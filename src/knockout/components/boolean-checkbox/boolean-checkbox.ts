import * as ko from "knockout";
import { Question, RendererFactory } from "survey-core";

const template = require("./boolean-checkbox.html");

export var CheckboxViewModel: any;

ko.components.register("sv-boolean-checkbox", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return {
        question: params.question,
        onMouseDown: (data: any, event: any) => { params.question.onMouseDown(event, data); }
      };
    },
  },
  template: template,
});

RendererFactory.Instance.registerRenderer(
  "boolean",
  "checkbox",
  "sv-boolean-checkbox"
);
