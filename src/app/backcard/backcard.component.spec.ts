import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackcardComponent } from './backcard.component';

describe('BackcardComponent', () => {
  let component: BackcardComponent;
  let fixture: ComponentFixture<BackcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
