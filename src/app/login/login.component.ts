import {
	Component,
	ElementRef,
	inject,
	OnInit,
	ViewChild,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	@ViewChild("username") username: ElementRef;
	@ViewChild("password") password: ElementRef;

	authService: AuthService = inject(AuthService);
	router: Router = inject(Router);
	activeRoute: ActivatedRoute = inject(ActivatedRoute);

	ngOnInit() {
		this.activeRoute.queryParamMap.subscribe((query) => {
			const logout = !!query.get("logout");

			if (logout) {
				this.authService.logout();
				alert(
					"You are now logged out ! isLogged = " + this.authService.isLogged
				);
			}
		});
	}

	onLoginClicked() {
		const username = this.username.nativeElement.value;
		const password = this.password.nativeElement.value;

		const user = this.authService.login(username, password);

		if (!user) {
			alert("The login credentials is not correct");
		} else {
			alert("Welcome " + user.name + ". You are logged in.");
			this.router.navigate(["courses"]);
		}
	}
}
