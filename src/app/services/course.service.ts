import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'https://webbutveckling.miun.se/files/ramschema.json'; // Pekar på JSON filen

  constructor(private http: HttpClient) {}  // låter Angular använda HttpClient.

  getCourses(): Observable<Course[]> { // Hämtar alla kurser från JSON-filen
    return this.http.get<Course[]>(this.url);
  }
}