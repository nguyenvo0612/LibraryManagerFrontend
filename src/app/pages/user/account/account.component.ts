import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  username = 'nguyenvvo0612';
  name = 'Nguyễn Võ';
  email = 'your@email.com';
  password = '';
  avatarUrl = 'assets/avatar-default.png';
  bio: string = '';
  showThreadsBadge: boolean = false;
  gender: string = 'Nam';
  showAccountSuggestion: boolean = true;

  // Nếu bạn muốn thêm logic cho nút "Đổi ảnh", có thể thêm hàm này:
  changeAvatar() {
    // Xử lý đổi ảnh đại diện ở đây
    alert('Chức năng đổi ảnh chưa được triển khai!');
  }

  onAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.avatarUrl = reader.result as string;
      reader.readAsDataURL(file);
    }
  }
  onSave() {
    // Xử lý lưu thông tin
    alert('Thông tin đã được lưu!');
  }

  onChangePassword() {
    alert('Thông tin đã được lưu!');
  }
}
