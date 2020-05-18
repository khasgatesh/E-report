import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrinalTestPage } from './urinal-test.page';

describe('UrinalTestPage', () => {
  let component: UrinalTestPage;
  let fixture: ComponentFixture<UrinalTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrinalTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrinalTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
