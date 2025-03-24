import { Component, inject, Input, signal } from '@angular/core';
import { Group } from '../../interfaces/groups.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formpreview',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
      this.dynamicForm.addControl(element.label, this._formBuilder.control(element.defaultValue || ''));
    });
  }
}
