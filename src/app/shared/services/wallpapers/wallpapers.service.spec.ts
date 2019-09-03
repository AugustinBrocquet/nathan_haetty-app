import { TestBed } from '@angular/core/testing';

import { WallpapersService } from './wallpapers.service';

describe('WxallpapersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WallpapersService = TestBed.get(WallpapersService);
    expect(service).toBeTruthy();
  });
});
