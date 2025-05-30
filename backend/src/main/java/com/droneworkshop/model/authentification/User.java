package com.droneworkshop.model.authentification;

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

    @Column(nullable = false, length = 254, name="e_mail")
    private String email;

    @Column(length = 70)
    private String bio;
}