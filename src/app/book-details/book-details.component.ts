import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  returnedString = "";
  ceva = "random string";

  constructor(
    private bookService: BookService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.setAuthentication("alexa.murgoci@gmail.com","secret",["ROLE_ADMIN"]);
    this.bookService.getBook().subscribe(
      result => console.log("succes 1"),
      error =>  console.log("error 1"));
    this.bookService.saveBook(this.ceva).subscribe(
      result => console.log("succes 2"),
      error =>  console.log("error 2"));
    this.bookService.getAdminData().subscribe(
      result => console.log("succes 3"),
      error =>  console.log("error 3"));
  }

}
