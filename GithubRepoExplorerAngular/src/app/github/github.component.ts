import { Component, OnInit } from '@angular/core';
import { GitHubService } from './github.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepositoryDetailsDialogComponent } from './repository-details-dialog/repository-details-dialog.component';
import { GitHubRepository } from './github.model';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GitHubComponent implements OnInit {
  searchQuery: string = '';
  username: string = '';
  repositories: GitHubRepository[] = [];

  constructor(
    private gitHubService: GitHubService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.searchQuery = 'angular'; // Default search query
    this.searchRepositories();
  }

  searchRepositories(): void {
    this.gitHubService.searchRepositories(this.searchQuery).subscribe(
      repositories => this.repositories = repositories,
      error => {
        console.error('Error fetching repositories: ', error);
        this.snackBar.open('Failed to fetch repositories. Please try again later.', 'Dismiss', {
          duration: 5000,
        });
      }
    );
  }

  viewDetails(owner: string, repo: string): void {
    this.gitHubService.getRepositoryDetails(owner, repo).subscribe(
      repository => {
        this.dialog.open(RepositoryDetailsDialogComponent, {
          width: '500px',
          data: repository
        });
      },
      error => {
        console.error('Error fetching repository details: ', error);
        this.snackBar.open('Failed to fetch repository details. Please try again later.', 'Dismiss', {
          duration: 5000,
        });
      }
    );
  }

  openRepositoryDetailsDialog(repo: GitHubRepository): void {
      this.dialog.open(RepositoryDetailsDialogComponent, {
        data: repo
      });
    }
}
