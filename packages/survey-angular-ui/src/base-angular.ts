import { ChangeDetectorRef, Component, OnChanges, OnDestroy, SimpleChange } from "@angular/core";
import { ArrayChanges, Base } from "survey-core";

@Component({
  template: ""
})
export abstract class BaseAngular<T extends Base = Base> implements OnChanges, OnDestroy {
  private isRendering: boolean = false; //#todonot implemented yet

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  protected abstract getModel(): T;
  ngOnChanges(): void {
    this.makeBaseElementAngular(this.getModel());
  }
  ngOnDestroy() {
    this.unMakeBaseElementAngular(this.getModel());
  }

  private makeBaseElementAngular(stateElement: Base) {
    stateElement.iteratePropertiesHash((hash, key) => {
      var val: any = hash[key];
      if (Array.isArray(val)) {
        var val: any = val;
        val["onArrayChanged"] = (arrayChanges: ArrayChanges) => {
          if (this.isRendering) return;
          this.changeDetectorRef.detectChanges();
        };
      }
    });
    stateElement.setPropertyValueCoreHandler = (
      hash: any,
      key: string,
      val: any
    ) => {
      if (hash[key] !== val) {
        hash[key] = val;
        if (this.isRendering) return;
        this.changeDetectorRef.detectChanges();
      }
    };
  }
  private unMakeBaseElementAngular(stateElement: Base) {
    stateElement.setPropertyValueCoreHandler = <any>undefined;
    stateElement.iteratePropertiesHash((hash, key) => {
      var val: any = hash[key];
      if (Array.isArray(val)) {
        var val: any = val;
        val["onArrayChanged"] = () => {};
      }
    });
  }
}