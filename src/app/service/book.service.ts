import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/";

  constructor(
    private http: HttpClient
  ) { }

  getBook() {
    return this.http.get(this.baseUrl);
  }

  saveBook(data: string) {
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'myheader': 'username'
    //   })
    // };
    return this.http.post(this.baseUrl+"post", data);
  }

  getAdminData() {
    return this.http.get(this.baseUrl+"admin/idDeUser");
  }
}
