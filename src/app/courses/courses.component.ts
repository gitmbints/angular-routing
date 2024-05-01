import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../Models/course";
import { CourseService } from "../Services/course.service";

@Component({
	selector: "app-courses",
	templateUrl: "./courses.component.html",
	styleUrls: ["./courses.component.css"],
})
export class CoursesComponent implements OnInit {
	coursesService = inject(CourseService);
	AllCourses: Course[];
	searchText: string;

	activeRoute: ActivatedRoute = inject(ActivatedRoute);

	ngOnInit() {
    // this.searchText = this.activeRoute.snapshot.queryParamMap.get("search");
    
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchText = data.get('search');

      if (!this.searchText) {
        this.AllCourses = this.coursesService.courses;
      } else {
        this.AllCourses = this.coursesService.courses.filter((course) =>
          course.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    });
	}
}
