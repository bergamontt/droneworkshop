package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
