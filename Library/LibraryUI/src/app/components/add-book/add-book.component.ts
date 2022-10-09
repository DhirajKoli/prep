import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  
  constructor(private bookService:BookService,private router:Router) { }
  book:Book;

  ngOnInit(): void {
  }
  onBookSubmit(bookForm:NgForm){
    this.book={
      name:bookForm.value.name,
      price:bookForm.value.price,
      genre:bookForm.value.genre,
    }
    this.bookService.postBook(this.book).subscribe(
      data=>{
        this.router.navigateByUrl("/all-books");
      }
    );

    
  }
}
