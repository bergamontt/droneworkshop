package com.droneworkshop.model.forum;

import com.droneworkshop.model.authentification.User;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer replyId;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @ManyToOne
    @JoinColumn(name = "username")
    private User user;

    @Column(nullable = false, length = 5000)
    private String description;

    @Column(nullable = false)
    private Timestamp createdAt;
}