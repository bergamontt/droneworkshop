package com.droneworkshop.model.publication;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    @Column(nullable = false, length = 24)
    private String username;

    @Column(nullable = false, length = 60)
    private String password;

    @Column(nullable = false, length = 254)
    private String email;

    @Column(length = 13)
    private String phoneNum;

    @Column(length = 70)
    private String bio;

    @Column(nullable = false)
    private int rating;
}