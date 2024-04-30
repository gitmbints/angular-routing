import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "src/app/Models/course";
import { CourseService } from "src/app/Services/course.service";

@Component({
	selector: "app-course-detail",
	templateUrl: "./course-detail.component.html",
	styleUrls: ["./course-detail.component.css"],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
	selectedCourse: Course;
	courseId: number;
	paramMapObservable;

	activeRoute: ActivatedRoute = inject(ActivatedRoute);
	courseService: CourseService = inject(CourseService);

	ngOnInit() {
		// this.courseId = this.activeRoute.snapshot.params["id"];
		// this.courseId = +this.activeRoute.snapshot.paramMap.get("id");
		/* this.activeRoute.params.subscribe((data) => {
			this.courseId = +data["id"];
			this.selectedCourse = this.courseService.courses.find(
				(course) => course.id === this.courseId
			);
		}); */

		this.paramMapObservable = this.activeRoute.paramMap.subscribe((data) => {
			this.courseId = +data.get("id");
			this.selectedCourse = this.courseService.courses.find(
				(course) => course.id === this.courseId
			);
		});
	}

	ngOnDestroy() {
		this.paramMapObservable.unsubscribe();
	}
}
