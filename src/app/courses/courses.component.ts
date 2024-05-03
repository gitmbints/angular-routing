import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../Models/course";
import { CourseService } from "../Services/course.service";

@Component({
	selector: "app-courses",
	templateUrl: "./courses.component.html",
	styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit, OnDestroy {
	coursesService = inject(CourseService);
	AllCourses: Course[];
	searchText: string;
	queryParamMapObservable;

	activeRoute: ActivatedRoute = inject(ActivatedRoute);

	ngOnInit() {
		this.queryParamMapObservable = this.activeRoute.queryParamMap.subscribe(
			(data) => {
				this.searchText = data.get("search");

				if (!this.searchText) {
					this.AllCourses = this.activeRoute.snapshot.data["courses"];
				} else {
					this.AllCourses = this.coursesService.courses.filter((course) =>
						course.title.toLowerCase().includes(this.searchText.toLowerCase())
					);
				}
			}
		);
	}

	ngOnDestroy() {
		this.queryParamMapObservable.unsubscribe();
	}
}
