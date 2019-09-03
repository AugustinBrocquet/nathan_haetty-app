import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWallpaperComponent } from './view-wallpaper.component';

describe('ViewWallpaperComponent', () => {
  let component: ViewWallpaperComponent;
  let fixture: ComponentFixture<ViewWallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWallpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
