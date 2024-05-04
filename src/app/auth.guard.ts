import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./Services/auth.service";
import { CourseService } from "./Services/course.service";


/* 
  * canActivate function must return a boolean
  * This allow a user or not to access a route
 */
const canActivate = () => {
	const authService: AuthService = inject(AuthService);
	const router: Router = inject(Router);

	if (authService.isAuthenticated()) {
		return true;
	} else {
		router.navigate(["login"]);
		return false;
	}
};

/* 
  * canActivateChil function must return a boolean
  * This allow a user or not to access a route child
 */
const canActivateChild = () => {
	return canActivate();
};

/* 
  * canActivateChild function must return an observable
  * This allow the route to not be redirected until
  * the data of it's component is fully loaded
 */
const resolve = () => {
	const courseService: CourseService = inject(CourseService);
	return courseService.getAllcourses();
};

export { canActivate, canActivateChild, resolve };
