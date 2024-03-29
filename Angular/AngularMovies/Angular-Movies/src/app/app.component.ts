import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [{
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date('2016-11-11'),
        price: 14.99
      }];
    }, 3000);
  }
  title = 'any value';
  movies;

  duplicateNumber(n: number): number{
    return n*2;
  }
}
