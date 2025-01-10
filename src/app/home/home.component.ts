import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgbRatingModule, StarRatingComponent], // Añade NgbRatingModule a los imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Cambiado a styleUrls
})
export class HomeComponent {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;
  ariaValueText = (value: number) => `${value} out of 5`; // Define ariaValueText

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  getTheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
      this.theatreMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
      this.popularMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  getStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.round(rating));
    }
    return stars;
  }

  goToMovie(type: string, id: string){
    this.router.navigate(['movie', type, id]);
  }
}
