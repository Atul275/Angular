import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseService = inject(CourseService);
  allCourses?: Course[];
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  searchString?: string;

  ngOnInit() {
    // this.searchString= this.activeRoute.snapshot.queryParams['search'];

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search') ?? undefined;

      if (this.searchString === undefined || this.searchString == '') {
        // this.courseService.getAllcourses().subscribe((data: Course[]) => {
        //   this.AllCourses = data;
        // });

        this.allCourses= this.activeRoute.snapshot.data['courses'];
      } else {
        this.allCourses = this.courseService.courses
        .filter(x => x.title.toLocaleLowerCase()
        .includes(this.searchString?.toLocaleLowerCase() || ''))
      }
    })
  }
}