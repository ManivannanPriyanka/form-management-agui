import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormElement } from '../../interfaces/formElement.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Group } from '../../interfaces/groups.interface';

@Component({
  selector: 'app-element-configuration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './element-configuration.component.html',
  styleUrl: './element-configuration.component.scss'
})
export class ElementConfigurationComponent {

  @Input() selectedFormElement: FormElement | null= {} as FormElement;
  @Input() showEditDrawer = signal(false);
  formElement: FormElement| null = {} as FormElement;
  @Input() selectedGroup : Group = {} as Group;
  group: Group = {} as Group;
  @Output() updatedFormElement = new EventEmitter<FormElement>();
  @Output() updatedGroup = new EventEmitter<Group>();

  ngOnInit() {
    this.formElement = structuredClone(this.selectedFormElement);
    this.group = structuredClone(this.selectedGroup);
  }

  addNewOption() {
    if (this.formElement) {
      this.formElement.options ? this.formElement.options.push({ value: '', id: (this.formElement.options.length + 1).toString()}) : this.formElement.options = [{ value: '', id: '1'}];
    }
  }

  removeOption(index: number) {
    this.formElement?.options?.splice(index, 1);
  }

  closeEditDrawer() {
    this.showEditDrawer.set(false);
  }

  saveChanges() {
    this.formElement ? this.updatedFormElement.emit(this.formElement) : this.updatedGroup.emit(this.group);
    this.showEditDrawer.set(false);
  }

 

}
