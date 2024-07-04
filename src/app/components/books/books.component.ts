import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  book : Book = {} as Book;
  isUpdate : boolean = false;
  idCount : number = 5; // começando em 5 para testes

  books : Book[] = [
    {
      id : 1,
      title : "Angular do Zero",
      author : "Fulano de Tal",
      price : 35.50
    },
    {
      id : 2,
      title : "Java do Zero",
      author : "Ciclano de Tal",
      price : 40.00
    },
    {
      id : 3,
      title : "Bootstrap do Zero",
      author : "Beltrano de Tal",
      price : 25.25
    },
    {
      id : 4,
      title : "JavaScript do Zero",
      author : "Fulana de Tal",
      price : 38.00
    }
  ]

  saveBook() {
    if(!this.isUpdate) {
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }

    this.book = {} as Book;
    this.isUpdate = false;
  }

  update(selectedBook : Book) {
    this.book = selectedBook;
    this.isUpdate = true;
  }
  remove(removeBook : Book) {
    this.books = this.books.filter( b => b !== removeBook);
  }
}
