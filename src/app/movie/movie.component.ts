import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StarRatingComponent } from "../feature/star-rating/star-rating.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [HeaderComponent,StarRatingComponent, CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = `http://localhost:4200/assets/data/trending-movies.json`;
    }
    if (this.type === 'theatre') {
      this.url = `http://localhost:4200/assets/data/theatre-movies.json`;
    }
    if (this.type === 'popular') {
      this.url = `http://localhost:4200/assets/data/popular-movies.json`;
    }
    this.getMovie();
  } 

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
}
