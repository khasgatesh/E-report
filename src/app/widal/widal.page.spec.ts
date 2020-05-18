import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WidalPage } from './widal.page';

describe('WidalPage', () => {
  let component: WidalPage;
  let fixture: ComponentFixture<WidalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WidalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
