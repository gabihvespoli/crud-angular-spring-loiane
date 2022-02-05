import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getList(): Course[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'Front',
      },
    ];
  }
}
