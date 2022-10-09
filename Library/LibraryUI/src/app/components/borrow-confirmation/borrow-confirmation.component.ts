import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-borrow-confirmation',
  templateUrl: './borrow-confirmation.component.html',
  styleUrls: ['./borrow-confirmation.component.css']
})
export class BorrowConfirmationComponent implements OnInit {

  constructor(private bookService:BookService) { }
  book:Book;
  ngOnInit(): void {
    this.bookService.bookSubject.subscribe(data=>{
      this.book=data;
    })
  }

}
