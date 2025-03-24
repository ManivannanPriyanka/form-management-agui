import { Component, DestroyRef, inject, Input, signal } from '@angular/core';
import { FormgroupsService } from '../../services/formgroups.service';
import { Group } from '../../interfaces/groups.interface';
import { CommonModule } from '@angular/common';
import { ElementConfigurationComponent } from '../element-configuration/element-configuration.component';
import { FormElement } from '../../interfaces/formElement.interface';
import { ELEMENTS } from '../../constants/elements';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, copyArrayItem, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Elements } from '../../interfaces/elements.interface';
import { FormpreviewComponent } from '../formpreview/formpreview.component';

@Component({
  selector: 'app-formgroupshome',
  standalone: true,
  imports: [CommonModule, ElementConfigurationComponent, DragDropModule, CdkDrag, CdkDropList, CdkDropListGroup, FormpreviewComponent],
  templateUrl: './formgroupshome.component.html',
  styleUrl: './formgroupshome.component.scss'
})
export class FormgroupshomeComponent {

  _destroyReference = inject(DestroyRef);
  _formGroupService = inject(FormgroupsService);
  groups: Group[] = [];
  selectedGroup: Group = {} as Group;
  showEditDrawer = signal(false);
  selectedFormElement = {} as FormElement | null;
  elements = ELEMENTS;
  defaultGroup: Group = {} as Group;
  showPreviewModal = signal(false);

  ngOnInit() {
    this.groups = this._formGroupService.getGroups();
    this.selectedGroup = this.groups[0];
    this.defaultGroup = this.groups.filter(group => group.isDefault)[0];
    //Set data on Local Storage
    this.setDataOnLocalStorage();
  }

  createNewGroup() {
    const newGroup = {
      id: this._formGroupService.generateUniqueId(),
      name: 'Add name',
      description: 'Add description...',
      formElements: []
    }
    this.groups.push(newGroup);
    this.setDataOnLocalStorage();
    this.selectedGroup = newGroup;
  }

  displayGroupDetails(group: Group) {
    this.selectedGroup = group;
  }

  editDetails(formElement: FormElement | null , isFromGroup = false) {
    this.showEditDrawer.set(true);
    this.selectedFormElement = isFromGroup ? null : formElement;
  }

  drop(event: CdkDragDrop<FormElement[]>) {
    if (event.item.data.from !=='group' && event.previousContainer !== event.container) {
        const droppedElement = event.item.data.data;
        const newFormElement = {
          id: Math.random(),
          label: droppedElement.name,
          type: droppedElement.type,
          description: droppedElement.description,
        };
        event.container.data.push(newFormElement);
    }
    else if (event.item.data.from === 'group' && event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.setDataOnLocalStorage();
  }

  onGroupsListDragDrop(event: CdkDragDrop<Group[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    this.setDataOnLocalStorage();
  }

  deleteElement(index: number) {
    this.selectedGroup.formElements.splice(index, 1);
    this.setDataOnLocalStorage();
  }

  deleteGroup(group: Group) {
    this.selectedGroup = this.groups.filter(group => group.isDefault)[0];
    this.groups = this.groups.filter(grp => grp.id !== group.id);
    this.setDataOnLocalStorage();
  }

  updateFormElement(formElement: FormElement) {
    const index = this.selectedGroup.formElements.findIndex(element => element === this.selectedFormElement);
    if (index !== undefined) {
      this.selectedGroup.formElements[index] = formElement;
    }
    this.setDataOnLocalStorage();
  }

  updateGroup(group: Group) {
    this.selectedGroup.name = group.name;
    this.selectedGroup.description = group.description;
    this.setDataOnLocalStorage();
  }

  setDataOnLocalStorage() {
    this._formGroupService.setGroupsOnLocalStorage(this.groups);
  }

  ngOnDestroy() {
    this._formGroupService.removeGroupsFromLocalStorage();
  }

  maintainOrder() {
    return 0;
  }

  onSearch(event: Event) {
    const filteredElements = {} as Elements;
    const searchValue = (event.target as HTMLInputElement).value;
    Object.keys(ELEMENTS).forEach((category) => {
      const matchedData = ELEMENTS[category].filter((element) => {
        return element.name.toLowerCase().includes(searchValue.toLowerCase()) || element.description.toLowerCase().includes(searchValue.toLowerCase());
      });
      if (matchedData.length > 0) {
        filteredElements[category] = matchedData;
      }
    });
    if (Object.keys(filteredElements).length) {
      this.elements = filteredElements;
    }
  }

  openPreviewModal() {
    this.showPreviewModal.set(true);
  }

}
