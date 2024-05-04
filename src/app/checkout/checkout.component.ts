import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  courseId: number;
  selectedCourse: Course;
  paramMapObservable;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  courseService: CourseService = inject(CourseService);

  ngOnInit(): void {
    this.paramMapObservable = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find((course) => {
        course.id === this.courseId;
      })
    })
  }

  ngOnDestroy(): void {
    this.paramMapObservable.unsubscribe();
  }
}
