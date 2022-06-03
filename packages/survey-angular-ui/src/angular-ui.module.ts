import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SurveyComponent } from "./survey.component";
import { PageComponent } from "./page.component";
import { ElementComponent } from "./element.component";
import { ElementContentComponent } from "./element-content.component";
import { StringViewerComponent } from "./string-viewer.component";
import { PopupComponent } from "./components/popup/popup.component";
import { PopupContainerComponent } from "./components/popup/popup-container.component";
import { QuestionSkeletonComponent } from "./components/skeleton.component";
import { DropdownComponent } from "./components/dropdown.component";
import { TextQuestionComponent } from "./questions/text.component";
import { HtmlQuestionComponent } from "./questions/html.component";
import { RadiogroupComponent } from "./questions/radiogroup.component";
import { RadiogroupItemComponent } from "./questions/radiogroup-item.component";
import { CheckboxComponent } from "./questions/checkbox.component";
import { CheckboxItemComponent } from "./questions/checkbox-item.component";
import { DropdownQuestionComponent } from "./questions/dropdown.component";
import { RatingQuestionComponent } from "./questions/rating.component";
import { BooleanQuestionComponent } from "./questions/boolean.component";
import { ImagePickerItemComponent } from "./questions/imagepicker-item.component";
import { ImagePickerQuestionComponent } from "./questions/imagepicker.component";

import { ActionBarComponent } from "./components/action-bar/action-bar.component";
import { ActionComponent } from "./components/action-bar/action.component";
import { ActionBarItemComponent } from "./components/action-bar/action-bar-item.component";
import { ActionBarItemDropdownComponent } from "./components/action-bar/action-bar-item-dropdown.component";
import { SelectBaseItemComponent } from "./questions/selectbase-item";
import { SelectBaseComponent } from "./questions/selectbase.component";
import { SurveyCommentComponent } from "./comment.component";
import { ElementHeaderComponent } from "./components/element-header/element-header.component";
import { ElementTitleComponent } from "./components/element-title/element-title.component";
import { SurveyHeaderComponent } from "./components/survey-header/survey-header.component";

import { DynamicHeadComponent } from "./components/element-title/dynamic-head.component";
import { RowComponent } from "./row.component";
import { RatingDropdownComponent } from "./components/renderAs/rating-dropdown/rating-dropdown.component";
import { BooleanCheckboxComponent } from "./components/renderAs/boolean-checkbox/boolean-checkbox.component";
import { BooleanRadioComponent } from "./components/renderAs/boolean-radio/boolean-radio.component";
import { BooleanRadioItemComponent } from "./components/renderAs/boolean-radio/boolean-radio-item.component";
import { ProgressDefaultComponent } from "./components/progress/default/progress.component";
import { ProgressButtonsComponent } from "./components/progress/buttons/progress.component";
import { ProgressComponent } from "./components/progress/progress.component";

@NgModule({
  declarations: [
    SurveyComponent, PageComponent, ElementComponent, ElementContentComponent, StringViewerComponent,
    QuestionSkeletonComponent, TextQuestionComponent, RadiogroupComponent, RadiogroupItemComponent, CheckboxComponent, CheckboxItemComponent,
    DropdownComponent, DropdownQuestionComponent,
    PopupComponent, PopupContainerComponent,
    ActionBarComponent, ActionComponent, ActionBarItemComponent, ActionBarItemDropdownComponent, HtmlQuestionComponent,
    SelectBaseItemComponent, SelectBaseComponent, SurveyCommentComponent, ElementHeaderComponent, ElementTitleComponent, DynamicHeadComponent, RowComponent,
    RatingQuestionComponent, RatingDropdownComponent, BooleanQuestionComponent, BooleanCheckboxComponent, BooleanRadioComponent, BooleanRadioItemComponent, ImagePickerItemComponent, ImagePickerQuestionComponent,
    SurveyHeaderComponent, ProgressDefaultComponent, ProgressComponent, ProgressButtonsComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    SurveyComponent
    // SurveyComponent, ActionBarComponent
  ]
})
export class SurveyAngularModule { }