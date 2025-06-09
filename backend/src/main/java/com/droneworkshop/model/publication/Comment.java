package com.droneworkshop.model.publication;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commentId;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private Integer publicationId;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false)
    private Timestamp createdAt;
}