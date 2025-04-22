import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-filter-modal',
  imports: [MatDialogModule, MatButtonModule, TranslateModule, FormsModule],
  templateUrl: './user-filter-modal.component.html'
})
export class UserFilterModalComponent {
  selectedUserId: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<UserFilterModalComponent>,
  ) {}
}
