import { Component, Input } from "@angular/core";
import { QuestionAngular } from "../question.component";
import { QuestionBooleanModel } from "survey-core";
import { AngularComponentFactory } from "../component-factory";

@Component({
  selector: "sv-ng-boolean-question",
  templateUrl: "./boolean.component.html"
})
export class BooleanQuestionComponent extends QuestionAngular<QuestionBooleanModel> {
  onChange(event: any) {
    this.model.checkedValue = event.target.value;
  }
}

AngularComponentFactory.Instance.registerComponent("boolean-question", BooleanQuestionComponent);