package com.api.Api.auth;

import org.springframework.stereotype.Service;

import com.api.Api.models.User;

@Service
public interface AuthServices {

	public User registration(User user);
}
