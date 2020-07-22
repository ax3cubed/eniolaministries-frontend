/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { About_usService } from './about_us.service';

describe('Service: About_us', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [About_usService]
    });
  });

  it('should ...', inject([About_usService], (service: About_usService) => {
    expect(service).toBeTruthy();
  }));
});
