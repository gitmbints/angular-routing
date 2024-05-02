import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../Models/user";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	isLogged: boolean = false;
	userService: UserService = inject(UserService);

	login(username: string, password: string) {
		const user: User = this.userService.users.find(
			(user) => user.username === username && user.password === password
		);

		if (!user) {
			this.isLogged = false;
		} else {
			this.isLogged = true;
		}

		return user;
	}

	logout() {
		this.isLogged = false;
	}

	isAuthenticated() {
		return this.isLogged;
	}
}
