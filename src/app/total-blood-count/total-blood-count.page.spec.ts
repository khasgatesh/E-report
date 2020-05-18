import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalBloodCountPage } from './total-blood-count.page';

describe('TotalBloodCountPage', () => {
  let component: TotalBloodCountPage;
  let fixture: ComponentFixture<TotalBloodCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBloodCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalBloodCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
