import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  constructor(private bookService:BookService,private router:Router) { }
  books:Book[];
  book:Book;
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data=>{
      this.books=data;
    })
  }

  borrowBook(bId:number){
    this.bookService.borrowBook(bId).subscribe(data=>{
      this.book=data;
      this.bookService.bookSubject.next(this.book);
    this.router.navigateByUrl("/borrow-confirmation")
    })
    
  }

  returnBook(bId:number){
    this.bookService.returnBook(bId).subscribe(data=>{
      this.book=data;
      this.bookService.bookSubject.next(this.book);
      this.router.navigateByUrl("/return-confirmation")
    })
    
  }
}
