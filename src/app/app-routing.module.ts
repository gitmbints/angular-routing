import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGuardService } from "./Services/auth-guard.service";

const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "courses", component: CoursesComponent },
	{
		path: "courses",
    children: [
      { path: "course/:id", component: CourseDetailComponent },
      { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuardService] }
    ],
	},
	{ path: "login", component: LoginComponent },

	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "**", component: NotFoundComponent },
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
