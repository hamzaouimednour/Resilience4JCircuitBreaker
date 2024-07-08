import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GitHubRepository } from '../github.model';

@Component({
  selector: 'app-repository-details-dialog',
  templateUrl: './repository-details-dialog.component.html',
  styleUrls: ['./repository-details-dialog.component.css']
})
export class RepositoryDetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RepositoryDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GitHubRepository
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
