import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Resolve,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../Models/course";
import { AuthService } from "./auth.service";
import { CourseService } from "./course.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuardService implements CanActivate, Resolve<Course[]> {
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean> {
		if (this.authService.isAuthenticated()) {
			return true;
		} else {
			this.router.navigate(["login"]);
			return false;
		}
	}

	constructor(
		private authService: AuthService,
		private router: Router,
		private courseService: CourseService
	) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Course[] | Observable<Course[]> | Promise<Course[]> {
		return this.courseService.getAllcourses();
	}
}
