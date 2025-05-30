package com.droneworkshop.controller.authentification;

import com.droneworkshop.model.authentification.User;
import com.droneworkshop.service.authentification.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @DeleteMapping("/{username}")
    public void deleteUser(@PathVariable String username) {
        userService.deleteUserByUsername(username);
    }

    @PatchMapping
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @PatchMapping("/{username}")
    public void updateUserPassword(@PathVariable String username, @RequestBody String password) {
        userService.updateUserPassword(username, password);
    }

    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }
}