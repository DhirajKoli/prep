import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BorrowConfirmationComponent } from './components/borrow-confirmation/borrow-confirmation.component';
import { ReturnConfirmationComponent } from './components/return-confirmation/return-confirmation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    AllBooksComponent,
    AddBookComponent,
    BorrowConfirmationComponent,
    ReturnConfirmationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
