import { TestBed } from '@angular/core/testing';

import { DataHttpCacheService } from './data-http-cache.service';

describe('DataHttpCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHttpCacheService = TestBed.get(DataHttpCacheService);
    expect(service).toBeTruthy();
  });
});
