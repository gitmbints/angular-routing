import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./Services/auth.service";

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

const canActivateChild = () => {
	return canActivate();
};

export { canActivate, canActivateChild };
