import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  endPoint = 'http://localhost:8080/api/film';

  constructor(private httpClient: HttpClient) { }

  getFilms() {
    return this.httpClient.get(this.endPoint);
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  create(title: string, genre: string){
    const headers = new HttpHeaders({
      'content-type': "application/x-www-form-urlencoded"
    });

    const body = new URLSearchParams();
      body.append("title", title);
      body.append("genre", genre);

      return this.httpClient.post(this.endPoint, body, {headers})
  }
}
