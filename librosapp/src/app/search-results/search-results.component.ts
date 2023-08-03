import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../google-books.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  loading: boolean = false;
  books: any[] = [];
  searchTerm: string = '';
  showResultsMessage: boolean = false; // Variable para mostrar el mensaje de resultados

  constructor(private googleBooksService: GoogleBooksService) { }

  ngOnInit(): void {
  }

  onSearch() {
    if (this.searchTerm.trim() !== '') {
      this.loading = true;
      this.googleBooksService.searchBooks(this.searchTerm).subscribe(
        (data: any) => {
          this.books = data.items || []; // Los resultados de búsqueda se almacenan en el arreglo 'items'
          this.loading = false;
        },
        (error: any) => {
          console.error('Error al realizar la búsqueda:', error);
          this.loading = false;
        }
      );
    }
  }
}
