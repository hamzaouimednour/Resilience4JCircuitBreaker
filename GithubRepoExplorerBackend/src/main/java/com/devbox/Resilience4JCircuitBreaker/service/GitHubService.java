package com.devbox.Resilience4JCircuitBreaker.service;

import com.devbox.Resilience4JCircuitBreaker.model.GitHubSearchResponse;
import com.devbox.Resilience4JCircuitBreaker.model.GitHubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;


@Service
public class GitHubService {

    @Autowired
    private RestTemplate restTemplate;

    public List<GitHubRepository> searchRepositories(String query) {
        String url = "https://api.github.com/search/repositories?q=" + query;
        GitHubSearchResponse response = restTemplate.getForObject(url, GitHubSearchResponse.class);
        return response != null ? response.getRepositories() : Collections.emptyList();
    }

    public GitHubRepository getRepositoryDetails(String owner, String repo) {
        String url = "https://api.github.com/repos/" + owner + "/" + repo;
        GitHubRepository repository = restTemplate.getForObject(url, GitHubRepository.class);
        return repository;
    }
}
