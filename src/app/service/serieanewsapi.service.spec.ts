import { TestBed } from '@angular/core/testing';

import { SerieanewsapiService } from './serieanewsapi.service';

describe('SerieanewsapiService', () => {
  let service: SerieanewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieanewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
