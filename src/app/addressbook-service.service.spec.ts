import { TestBed } from '@angular/core/testing';

import { AddressbookServiceService } from './addressbook-service.service';

describe('AddressbookServiceService', () => {
  let service: AddressbookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressbookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
