import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabTechPage } from './lab-tech.page';

describe('LabTechPage', () => {
  let component: LabTechPage;
  let fixture: ComponentFixture<LabTechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabTechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
