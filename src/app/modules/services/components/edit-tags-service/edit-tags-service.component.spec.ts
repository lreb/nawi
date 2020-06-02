import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTagsServiceComponent } from './edit-tags-service.component';

describe('EditTagsServiceComponent', () => {
  let component: EditTagsServiceComponent;
  let fixture: ComponentFixture<EditTagsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTagsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTagsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
