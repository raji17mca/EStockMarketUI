import { TestBed } from '@angular/core/testing';

import { StockDetailsService } from './stock-details.service';

xdescribe('StockDetailsService', () => {
  let service: StockDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
