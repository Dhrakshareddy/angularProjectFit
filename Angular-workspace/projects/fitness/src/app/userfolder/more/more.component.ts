import { Component } from "@angular/core";


@Component({
  selector: 'app-more',
  
  templateUrl: './more.component.html',
  styleUrl: './more.component.css'
})

export class MoreComponent {
  navigateTo(section: string): void {
    // Implement navigation logic here
    console.log(`Navigating to ${section}`);
    // You can use Angular Router to navigate or implement your custom logic
  }


 }
