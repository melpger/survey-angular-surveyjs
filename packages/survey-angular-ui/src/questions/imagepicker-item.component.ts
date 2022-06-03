import { Component, Input } from "@angular/core";
import { BaseAngular } from "../base-angular";
import { ImageItemValue, QuestionImagePickerModel } from "survey-core";
@Component({
  selector: "sv-ng-imagepicker-item",
  templateUrl: "./imagepicker-item.component.html",
})
export class ImagePickerItemComponent extends BaseAngular<ImageItemValue> {
  @Input() question!: QuestionImagePickerModel;
  @Input() model!: ImageItemValue;
  protected getModel(): ImageItemValue {
    return this.model;
  }
  onChange(event: any) {
    if (this.question.multiSelect) {
      if (event.target.checked) {
        this.question.value = this.question.value.concat(event.target.value);
      } else {
        var currValue = this.question.value;
        currValue.splice(this.question.value.indexOf(event.target.value), 1);
        this.question.value = currValue;
      }
    } else {
      this.question.value = event.target.value;
    }
  }
}