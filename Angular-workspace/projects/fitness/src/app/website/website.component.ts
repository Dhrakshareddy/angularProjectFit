import { Component } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
