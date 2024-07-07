package com.devbox.Resilience4JCircuitBreaker.controller;

import com.devbox.Resilience4JCircuitBreaker.model.GitHubRepository;
import com.devbox.Resilience4JCircuitBreaker.service.GitHubService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/repositories")
public class GitHubController {

    @Autowired
    private GitHubService gitHubService;

    @GetMapping("/search")
    @CircuitBreaker(name = "gitHubService", fallbackMethod = "fallbackSearchRepositories")
    public ResponseEntity<List<GitHubRepository>> searchRepositories(@RequestParam String query) {
        List<GitHubRepository> repositories = gitHubService.searchRepositories(query);
        return ResponseEntity.ok(repositories);
    }

    @GetMapping("/{owner}/{repo}")
    @CircuitBreaker(name = "gitHubService", fallbackMethod = "fallbackRepositoryDetails")
    public ResponseEntity<GitHubRepository> getRepositoryDetails(@PathVariable String owner, @PathVariable String repo) {
        GitHubRepository repository = gitHubService.getRepositoryDetails(owner, repo);
        if (repository != null) {
            return ResponseEntity.ok(repository);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    public ResponseEntity<List<GitHubRepository>> fallbackSearchRepositories(String query, Exception e) {
        // Fallback response when searchRepositories fails
        List<GitHubRepository> fallbackList = Arrays.asList(
                new GitHubRepository("FallbackRepo1", "Description", "FallbackOwner", 0, 0),
                new GitHubRepository("FallbackRepo2", "Description", "FallbackOwner", 0, 0)
        );
        return ResponseEntity.ok(fallbackList);
    }

    public ResponseEntity<GitHubRepository> fallbackRepositoryDetails(String owner, String repo, Exception e) {
        // Fallback response when getRepositoryDetails fails
        GitHubRepository fallbackRepo = new GitHubRepository("FallbackRepo", "Description", "FallbackOwner", 0, 0);
        return ResponseEntity.ok(fallbackRepo);
    }
}