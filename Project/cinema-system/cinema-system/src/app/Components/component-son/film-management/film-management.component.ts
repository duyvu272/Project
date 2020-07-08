import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../../Services/customer.service';
// import { Film } from './models/film.model'
import { FilmModel } from '../models/film.model'

@Component({
  selector: 'app-film-management',
  templateUrl: './film-management.component.html',
  styleUrls: ['./film-management.component.css']
})
export class FilmManagementComponent implements OnInit {
	public movies;
  public film: Array<FilmModel> = []

  constructor(
  	public customerService: CustomerService
  	) { }

  ngOnInit(): void {
  	this.customerService.getAllMovies().subscribe(data => {
  		this.movies = data;
  		console.log(this.movies)
  	})
  }
  // onAddFilm(){
  //   this.customerService.addNewFilm()
  // }
  onAddRow() {
    this.movies.push(new FilmModel())
  }
  addRow(index){
    this.customerService.addNewFilm(this.movies[index]).subscribe();
    return true;
  }
  onEdit(index) {
    this.customerService.editFilm(this.movies[index],index+1).subscribe(data => {

  });
  return true;
}

}
