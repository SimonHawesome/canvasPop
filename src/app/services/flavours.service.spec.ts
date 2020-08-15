import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { defer } from 'rxjs';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Flavour } from '../models/flavour.model';
import { FlavoursService } from './flavours.service';

describe ('FlavoursService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let flavoursService: FlavoursService;
  
    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      flavoursService = new FlavoursService(httpClientSpy as any);
    });
  
    it('should return expected flavours (HttpClient called once)', () => {
      const expectedFlavours: Flavour[] =
        [{ id: 1, title: 'A', image: 'url' }, { id: 2, title: 'B', image: 'url' }, { id: 3, title: 'C', image: 'url' }];
  
      httpClientSpy.get.and.returnValue(asyncData(expectedFlavours));
  
      flavoursService.getFlavours().subscribe(
        flavours => expect(flavours).toEqual(expectedFlavours, 'expected flavours'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});


export function asyncData<T>(data: T) {
return defer(() => Promise.resolve(data));
}

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
export function asyncError<T>(errorObject: any) {
return defer(() => Promise.reject(errorObject));
}
