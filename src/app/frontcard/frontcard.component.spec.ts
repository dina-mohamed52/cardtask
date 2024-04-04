import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontcardComponent } from './frontcard.component';

describe('FrontcardComponent', () => {
  let component: FrontcardComponent;
  let fixture: ComponentFixture<FrontcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
