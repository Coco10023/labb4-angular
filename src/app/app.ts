import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseService } from './services/course.service';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  courses: Course[] = [];  // Här sparas alla kurser
  filteredCourses: Course[] = [];  // Här sparas filtrerade kurser

  searchText: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void { // Hämtar JSON-datan från min service 
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  filterCourses(): void { // Filtrerar sökningen 
    const search = this.searchText.toLowerCase();

    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(search) ||
      course.coursename.toLowerCase().includes(search)
    );
  }

  sortCourses(field: keyof Course): void { // Sorterar tabellen 
    this.filteredCourses.sort((a, b) =>
      a[field].localeCompare(b[field])
    );
  }
}