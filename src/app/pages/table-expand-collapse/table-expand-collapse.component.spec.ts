import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpandCollapseComponent } from './table-expand-collapse.component';

describe('TableExpandCollapseComponent', () => {
  let component: TableExpandCollapseComponent;
  let fixture: ComponentFixture<TableExpandCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpandCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
