import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookSubject= new BehaviorSubject<Book>({});
  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:7667/book/all");
  }
  
  postBook(book:Book):Observable<Book>{
    return this.http.post<Book>("http://localhost:7667/book/post",book);
  }

  borrowBook(id:number):Observable<Book>{
    return this.http.get<Book>("http://localhost:7667/book/borrow/"+id);
  }

  returnBook(id:number):Observable<Book>{
    return this.http.get<Book>("http://localhost:7667/book/return/"+id);
  }

}
