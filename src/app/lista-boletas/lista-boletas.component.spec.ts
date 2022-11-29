import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBoletasComponent } from './lista-boletas.component';

describe('ListaBoletasComponent', () => {
  let component: ListaBoletasComponent;
  let fixture: ComponentFixture<ListaBoletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBoletasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
