import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormgroupsService {

  constructor() { }

  defaultGroup = {
    id: this.generateUniqueId(),
    name: 'Default Group',
    description: 'This is the default group',
    formElements: [],
    isDefault: true
  }
  uniqueIds = new Set<string>();

  getGroups() {
    return [this.defaultGroup];
  }

  generateUniqueId(): string {
    let id;
    do {
      id =  Math.random().toString(36).slice(2, 9);
    } while (this.uniqueIds?.has(id));
    
    this.uniqueIds?.add(id);
    return id;
  }

  setGroupsOnLocalStorage(groups: any) {
    localStorage.setItem('groups', JSON.stringify(groups));
  }

  removeGroupsFromLocalStorage() {
    localStorage.removeItem('groups');
  }


}
