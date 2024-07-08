export interface GitHubRepository {
  name: string;
  description: string;
  owner: {
    login: string
  }
  stargazers_count: number;
  forks_count: number;
}
