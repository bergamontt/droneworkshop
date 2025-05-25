package com.droneworkshop.controller.publication;

import com.droneworkshop.model.publication.User;
import com.droneworkshop.service.publication.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/{username}")
    public User getUserByUsername(
            @PathVariable String username
    ) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}