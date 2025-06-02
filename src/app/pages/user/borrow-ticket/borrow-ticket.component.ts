import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface BorrowTicket {
  id: string;
  borrowDate: string;
  dueDate: string;
  status: 'Đang mượn' | 'Đã trả' | 'Quá hạn';
  quantity: number;
  books: { title: string; author: string; }[];
}

@Component({
  selector: 'app-borrow-ticket',
  imports: [CommonModule, FormsModule],
  templateUrl: './borrow-ticket.component.html',
  styleUrls: ['./borrow-ticket.component.css']
})
export class BorrowTicketComponent {
  borrowTickets: BorrowTicket[] = [
    {
      id: 'PM001',
      borrowDate: '2024-06-01',
      dueDate: '2024-06-10',
      status: 'Đang mượn',
      quantity: 2,
      books: [
        { title: 'Lập trình Java cơ bản', author: 'Nguyễn Văn A' },
        { title: 'Cấu trúc dữ liệu', author: 'Trần Thị B' }
      ]
    },
    {
      id: 'PM002',
      borrowDate: '2024-05-20',
      dueDate: '2024-05-30',
      status: 'Đã trả',
      quantity: 1,
      books: [
        { title: 'Học máy cơ bản', author: 'Lê Văn C' }
      ]
    }
  ];

  selectedTicket: BorrowTicket | null = null;
  statusFilter: string = '';

  filteredTickets() {
    if (!this.statusFilter) return this.borrowTickets;
    return this.borrowTickets.filter(t => t.status === this.statusFilter);
  }

  viewDetail(ticket: BorrowTicket) {
    this.selectedTicket = ticket;
  }

  closeDetail() {
    this.selectedTicket = null;
  }
}
