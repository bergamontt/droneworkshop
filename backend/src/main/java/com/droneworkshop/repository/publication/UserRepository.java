package com.droneworkshop.repository.publication;

import com.droneworkshop.model.authentification.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}