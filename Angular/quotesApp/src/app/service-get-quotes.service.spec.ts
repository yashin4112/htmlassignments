import { TestBed } from '@angular/core/testing';

import { ServiceGetQuotesService } from './service-get-quotes.service';

describe('ServiceGetQuotesService', () => {
  let service: ServiceGetQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGetQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
