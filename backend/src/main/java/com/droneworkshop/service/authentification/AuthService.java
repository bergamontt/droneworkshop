package com.droneworkshop.service.authentification;

import com.droneworkshop.pojo.AuthRequest;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final JwtService jwtService;

    private final AuthenticationProvider authenticationProvider;

    public AuthService(JwtService jwtService, AuthenticationProvider authenticationProvider){
        this.jwtService = jwtService;
        this.authenticationProvider = authenticationProvider;

    }

    public String login(AuthRequest request) {
        Authentication authentication = authenticationProvider.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()
                )
        );
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(request.username());
        } else {
            throw new UsernameNotFoundException("Invalid login request!");
        }
    }
}
