import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupshomeComponent } from './formgroupshome.component';

describe('FormgroupshomeComponent', () => {
  let component: FormgroupshomeComponent;
  let fixture: ComponentFixture<FormgroupshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupshomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgroupshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
