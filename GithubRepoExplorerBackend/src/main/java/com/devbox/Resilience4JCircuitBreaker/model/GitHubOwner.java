package com.devbox.Resilience4JCircuitBreaker.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class GitHubOwner {

    private String login;

}
