import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/book";

  constructor(
    private http: HttpClient
  ) { }

  getTop12() {
    return this.http.get(this.baseUrl+"/top");
  }

  getBook(isbn) {
    return this.http.get(this.baseUrl+"/"+isbn);
  }

  getBookReviews(isbn) {
    return this.http.get(this.baseUrl+"/reviews/"+isbn);
  }

  search(page, searchParam?) {
    return searchParam && (searchParam+"")!="" ?
     this.http.get(this.baseUrl+"/search?page="+page+"&searchParam="+searchParam)
     : this.http.get(this.baseUrl+"/search?page="+page);
  }

  rateBook(userId, isbn, userRating) {
    let bookRatingData = {"userId":userId, "isbn":isbn, "rating":userRating};
    return this.http.post(this.baseUrl+"/rate", bookRatingData);
  }

  unRateBook(userId, isbn) {
    let bookRatingData = {"userId":userId, "isbn":isbn, "rating":0};
    return this.http.post(this.baseUrl+"/un-rate", bookRatingData);
  }

  saveReview(userId, isbn, review) {
    let bookReviewData = {"userId":userId, "isbn":isbn, "review":review};
    return this.http.post(this.baseUrl+"/review", bookReviewData);
  }

  getBookRatingForUser(userId, isbn) {
    return this.http.get(this.baseUrl+"/"+isbn+"/rating/user/"+userId);
  }
}
