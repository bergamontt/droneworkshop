package com.droneworkshop.service.authentification;

import com.droneworkshop.model.authentification.User;
import com.droneworkshop.repository.publication.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserService implements UserDetailsService{

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addUser(User user) { this.userRepository.save(user); }

    public void deleteUserByUsername(String username) { userRepository.deleteById(username); }

    public void updateUser(User user) { this.userRepository.save(user); }

    public User getUserByUsername(String username) {
        return userRepository.findById(username).orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
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
}