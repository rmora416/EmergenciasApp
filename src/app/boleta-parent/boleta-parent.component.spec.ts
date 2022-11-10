import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletaParentComponent } from './boleta-parent.component';

describe('BoletaParentComponent', () => {
  let component: BoletaParentComponent;
  let fixture: ComponentFixture<BoletaParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletaParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletaParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
