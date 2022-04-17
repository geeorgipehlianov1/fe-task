import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-task';


  constructor(private route: Router) { }

  onChange(event: any): void {
    if(event.target.value === 'BGN') {
      this.route.navigate(['/BGN'])
    } else if(event.target.value === 'EUR') {
      this.route.navigate(['/EUR'])
    } else if(event.target.value === 'GBP') {
      this.route.navigate(['GBP'])
    }
  }
}
