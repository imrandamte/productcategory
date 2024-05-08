import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryreadComponent } from './categoryread.component';

describe('CategoryreadComponent', () => {
  let component: CategoryreadComponent;
  let fixture: ComponentFixture<CategoryreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
