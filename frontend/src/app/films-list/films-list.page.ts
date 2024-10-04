import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.page.html',
  styleUrls: ['./films-list.page.scss'],
})
export class FilmsListPage implements OnInit {

  filmForm: FormGroup;
  films: any = [];
  isModalOpen: boolean = false;
  selectedFilm: any = null;

  constructor(private filmService: FilmService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.filmForm = this.formBuilder.group({
      title:['',Validators.compose([Validators.required])],
      genre:['',Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
    this.getAllFilms();
  }

  gotoHome(){
    this.router.navigateByUrl("/home");
  }

  getAllFilms(){
    this.filmService.getFilms().subscribe(data =>{
      this.films = data;
    });
  }

  alert(){
    alert("Este botón no hace nada pero gracias por usarlo");
  }

  delete(id: any){
    this.filmService.delete(id).subscribe(data =>{
      console.log("Film deleted");
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
