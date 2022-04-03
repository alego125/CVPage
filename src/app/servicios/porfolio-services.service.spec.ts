import { TestBed } from '@angular/core/testing';

import { PorfolioServicesService } from './porfolio-services.service';

describe('PorfolioServicesService', () => {
  let service: PorfolioServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorfolioServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
