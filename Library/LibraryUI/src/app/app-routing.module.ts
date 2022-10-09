import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BorrowConfirmationComponent } from './components/borrow-confirmation/borrow-confirmation.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReturnConfirmationComponent } from './components/return-confirmation/return-confirmation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'borrow-confirmation', component: BorrowConfirmationComponent },
  { path: 'return-confirmation', component: ReturnConfirmationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
