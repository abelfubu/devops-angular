import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDeRepositorioComponent } from './listas-de-repositorio.component';

describe('ListasDeRepositorioComponent', () => {
  let component: ListasDeRepositorioComponent;
  let fixture: ComponentFixture<ListasDeRepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasDeRepositorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDeRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
