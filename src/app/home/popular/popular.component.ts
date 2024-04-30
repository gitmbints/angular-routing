import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "src/app/Models/course";
import { CourseService } from "src/app/Services/course.service";

@Component({
	selector: "app-popular",
	templateUrl: "./popular.component.html",
	styleUrls: ["./popular.component.css"],
})
export class PopularComponent {
	courseService = inject(CourseService);
	router: Router = inject(Router);
	activeRoute: ActivatedRoute = inject(ActivatedRoute);

	popularCourses: Course[] = [];

	ngOnInit() {
		this.popularCourses = this.courseService.courses.filter(
			(c) => c.rating >= 4.5
		);
	}

	navigateToCourses() {
		// this.router.navigate(["courses"], { relativeTo: this.activeRoute });
		this.router.navigateByUrl("courses");
	}
}
