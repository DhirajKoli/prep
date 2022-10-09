import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-return-confirmation',
  templateUrl: './return-confirmation.component.html',
  styleUrls: ['./return-confirmation.component.css']
})
export class ReturnConfirmationComponent implements OnInit {

  book:Book;
  constructor(private bookService:BookService) { }
  
  ngOnInit(): void {
    this.bookService.bookSubject.subscribe(data=>{
      this.book=data;
    })
  }

}
