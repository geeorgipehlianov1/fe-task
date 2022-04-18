import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private route: Router,
    private title: Title) { }

    ngOnInit(): void {
        this.title.setTitle('Home Page')
    }

  hasChoose: boolean = true;

  onChange(event: any): void {
    this.hasChoose = false;
    if(event.target.value === 'BGN') {
      this.route.navigate(['/BGN'])
    } else if(event.target.value === 'EUR') {
      this.route.navigate(['/EUR'])
    } else if(event.target.value === 'GBP') {
      this.route.navigate(['GBP'])
    }
  }
}
