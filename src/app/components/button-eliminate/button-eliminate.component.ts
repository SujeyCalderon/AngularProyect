import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-button-eliminate',
  templateUrl: './button-eliminate.component.html',
  styleUrls: ['./button-eliminate.component.scss'],
  standalone: true
})
export class ButtonEliminateComponent {
  constructor(
    public dialogRef: MatDialogRef<ButtonEliminateComponent>,
    @Inject(MAT_DIALOG_DATA) public employeeId: number
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
