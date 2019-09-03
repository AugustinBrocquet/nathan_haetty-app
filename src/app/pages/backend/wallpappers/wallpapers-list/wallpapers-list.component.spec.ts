import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpapersListComponent } from './wallpapers-list.component';

describe('WallpapersListComponent', () => {
  let component: WallpapersListComponent;
  let fixture: ComponentFixture<WallpapersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpapersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpapersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
