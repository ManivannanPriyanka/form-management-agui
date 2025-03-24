import { Component, inject, Input, signal } from '@angular/core';
import { Group } from '../../interfaces/groups.interface';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formpreview',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './formpreview.component.html',
  styleUrl: './formpreview.component.scss'
})
export class FormpreviewComponent {

  @Input() selectedGroup: Group = {} as Group;
  @Input() showPreviewModal = signal(false);
  dynamicForm !: FormGroup;
  _formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.dynamicForm = this._formBuilder.group({});
    this.selectedGroup.formElements.forEach(element => {
    });
    this.selectedGroup.formElements.forEach(element => {
      this.dynamicForm.addControl(element.label, new FormControl(element.defaultValue, this.setValidators(element)));
      if (element.readOnly) {
        this.dynamicForm.get(element.label)?.disable();
      }
    });
  }

  closePreviewModal() {
    this.showPreviewModal.set(false);
  }

  setValidators(element: any) {
    const validators = [];
    if (element.required) {
      validators.push(Validators.required);
    }
    if (element.minLength) {
      validators.push(Validators.minLength(element.minLength));
    }
    if (element.maxLength) {
      validators.push(Validators.maxLength(element.maxLength));
    }
    if (element.minValue) {
      validators.push(Validators.min(element.minValue));
    }
    if (element.maxValue) {
      this.dynamicForm.get(element.label)?.addValidators(Validators.max(element.maxValue));
    }
    return validators;
  }

}
