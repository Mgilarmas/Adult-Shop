import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.page.html',
  styleUrls: ['./films-list.page.scss'],
})
export class FilmsListPage implements OnInit {

  filmForm: FormGroup;

  films: any = [];

  constructor(private filmService: FilmService,
    public formBuilder: FormBuilder
  ) {
    this.filmForm = this.formBuilder.group({
      title:['',Validators.compose([Validators.required])],
      genre:['',Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.getAllFilms();
  }

  // ionViewWillEnter(){
  //   this.getAllFilms();
  // }

  getAllFilms(){
    this.filmService.getFilms().subscribe(data =>{
      this.films = data;
    });
  }

  delete(id: any){
    this.filmService.delete(id).subscribe(data =>{
      console.log("Data deleted");
      console.log(data)
      location.reload();
    })
  }

  createFilm(){
    if(!this.filmForm.valid){
      console.log("Not valid")
      return
    }

    const title = this.filmForm.value.title;
    const genre = this.filmForm.value.genre;

    this.filmService.create(title,genre).subscribe((response) =>{
      location.reload();
      console.log("Film created")
    });
  }

  getFormControl(field: string){
    return this.filmForm.get(field);
  }

}
