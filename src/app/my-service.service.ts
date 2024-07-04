import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Provided at the root level
})
export class MyService {
  getServiceData() {
    return 'Service Data';
  }
}