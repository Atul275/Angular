import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  selectedCourse?: Course;
  courseId: number = 0;
  discount: number = 85;
  maxCourseId: number=0;

  courseService: CourseService = inject(CourseService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs: any;

  ngOnInit() {
    // this.courseId= this.activatedRoute.snapshot.params['id'];
    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.maxCourseId = this.courseService.getMaxCourseId();
    this.paramMapObs = this.activatedRoute.paramMap.subscribe((data) => {
      this.courseId = +(data.get('id')!);
      this.selectedCourse = this.courseService.courses.find((course => course.id == this.courseId));
    });
  }
  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
  getTotalPrice(): number {
    return Math.round(this.selectedCourse ? this.selectedCourse.price / (100 - this.discount) : 0) * 100;
  }
}
