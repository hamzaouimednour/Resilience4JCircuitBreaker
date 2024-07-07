import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  private baseUrl = 'http://localhost:8080/repositories';

  constructor(private http: HttpClient) { }

  searchRepositories(query: string): Observable<GitHubRepository[]> {
    return this.http.get<GitHubRepository[]>(`${this.baseUrl}/search?query=${query}`)
      .pipe(
        catchError(error => of([
          { name: 'FallbackRepo1', description: 'Description', owner: 'FallbackOwner', stars: 0, forks: 0 },
          { name: 'FallbackRepo2', description: 'Description', owner: 'FallbackOwner', stars: 0, forks: 0 }
        ]))
      );
  }

  getRepositoryDetails(owner: string, repo: string): Observable<GitHubRepository> {
    return this.http.get<GitHubRepository>(`${this.baseUrl}/${owner}/${repo}`)
      .pipe(
        catchError(error => of(
          { name: 'FallbackRepo', description: 'Description', owner: 'FallbackOwner', stars: 0, forks: 0 }
        ))
      );
  }
}
