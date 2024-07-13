import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  resolve() {
    return of({ data: 'Resolved Data' });
  }
}
