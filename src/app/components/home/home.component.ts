import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  available: boolean;
  coverImage: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  categories: string[] = ['all', 'Fiction', 'Science', 'History', 'Technology'];

  constructor() {
    // Fake data
    this.books = [
      {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Fiction',
        available: true,
        coverImage: 'https://picsum.photos/200/300',
        description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.'
      },
      {
        id: 2,
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        category: 'Science',
        available: true,
        coverImage: 'https://picsum.photos/200/300',
        description: 'A landmark volume in science writing by one of the great minds of our time.'
      },
      {
        id: 3,
        title: 'The Art of War',
        author: 'Sun Tzu',
        category: 'History',
        available: false,
        coverImage: 'https://picsum.photos/200/300',
        description: 'An ancient Chinese military treatise dating from the 5th century BC.'
      },
      {
        id: 4,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        category: 'Technology',
        available: true,
        coverImage: 'https://picsum.photos/200/300',
        description: 'A handbook of agile software craftsmanship.'
      },
      {
        id: 5,
        title: '1984',
        author: 'George Orwell',
        category: 'Fiction',
        available: true,
        coverImage: 'https://picsum.photos/200/300',
        description: 'A dystopian social science fiction novel and cautionary tale.'
      }
    ];
    this.filteredBooks = [...this.books];
  }

  ngOnInit(): void {
    this.filterBooks();
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || book.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  onSearch(): void {
    this.filterBooks();
  }

  onCategoryChange(): void {
    this.filterBooks();
  }

  borrowBook(book: Book): void {
    if (book.available) {
      book.available = false;
      // Here you would typically make an API call to update the book status
      alert(`Book "${book.title}" has been borrowed successfully!`);
    } else {
      alert('This book is currently not available.');
    }
  }
} 