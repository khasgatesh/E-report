import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabDataPage } from './lab-data.page';

describe('LabDataPage', () => {
  let component: LabDataPage;
  let fixture: ComponentFixture<LabDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
