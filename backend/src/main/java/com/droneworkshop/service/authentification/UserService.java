package com.droneworkshop.service.authentification;

import com.droneworkshop.model.authentification.User;
import com.droneworkshop.repository.publication.UserRepository;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserService implements UserDetailsService{

    private final UserRepository userRepository;

    private final PasswordEncoder encoder;

    public UserService(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public void addUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        this.userRepository.save(user);
    }

    public void deleteUserByUsername(String username) {
        checkIfCurrentUser(username);
        userRepository.deleteById(username);
    }

    public void updateUser(User user) {
        checkIfCurrentUser(user.getUsername());
        User oldUser = getUserByUsername(user.getUsername());
        user.setPassword(oldUser.getPassword());
        this.userRepository.save(user);
    }

    public void updateUserPassword(String username, String password) {
        checkIfCurrentUser(username);
        User oldUser = getUserByUsername(username);
        oldUser.setPassword(encoder.encode(password));
        this.userRepository.save(oldUser);
    }

    public User getUserByUsername(String username) {
        return userRepository.findById(username).orElse(null);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getUserByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("Invalid username.");
        }
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                Collections.emptyList());
    }

    private void checkIfCurrentUser(String username) throws AuthenticationException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();
        if(!username.equals(currentUsername)){
            throw new AuthenticationCredentialsNotFoundException("Invalid user credentials.");
        }
    }
}