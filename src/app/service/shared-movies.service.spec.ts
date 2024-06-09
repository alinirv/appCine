import { TestBed } from '@angular/core/testing';

import { SharedMoviesService } from './shared-movies.service';

describe('SharedMoviesService', () => {
  let service: SharedMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
