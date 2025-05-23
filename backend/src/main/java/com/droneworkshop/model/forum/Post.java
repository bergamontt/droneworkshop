package com.droneworkshop.model.forum;

import com.droneworkshop.model.publication.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int postId;

    @ManyToOne
    @JoinColumn(name = "username")
    private User user;

    @Column(nullable = false, length = 100)
    private String topic;

    @Column(nullable = false, length = 2000)
    private String description;
}