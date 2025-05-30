package com.droneworkshop.controller.authentification;

import com.droneworkshop.model.authentification.User;
import com.droneworkshop.pojo.AuthRequest;
import com.droneworkshop.service.authentification.AuthService;
import com.droneworkshop.service.authentification.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService service;

    @Autowired
    public AuthController(AuthService service) {
        this.service = service;
    }

    @GetMapping("/log-in")
    public String authenticate(@RequestBody AuthRequest request) {
        return service.login(request);
    }
}
