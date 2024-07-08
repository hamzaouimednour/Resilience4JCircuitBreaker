package com.devbox.Resilience4JCircuitBreaker.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class GitHubSearchResponse {

    @JsonProperty("total_count")
    private int totalCount;

    @JsonProperty("incomplete_results")
    private boolean incompleteResults;

    @JsonProperty("items")
    private List<GitHubRepository> repositories;

}
