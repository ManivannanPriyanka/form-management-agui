import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementConfigurationComponent } from './element-configuration.component';

describe('ElementConfigurationComponent', () => {
  let component: ElementConfigurationComponent;
  let fixture: ComponentFixture<ElementConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
