import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssProjectsComponent } from './mss-projects.component';

describe('MssProjectsComponent', () => {
  let component: MssProjectsComponent;
  let fixture: ComponentFixture<MssProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MssProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MssProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
