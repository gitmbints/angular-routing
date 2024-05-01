import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  router: Router = inject(Router);

  handleSearch(value: string) {
    if (value) {
      this.router.navigate(['/courses'], { queryParams: { search: value } });
    }
  }
}
