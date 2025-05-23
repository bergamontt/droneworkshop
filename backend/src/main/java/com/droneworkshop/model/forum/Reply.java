package com.droneworkshop.model.forum;

import com.droneworkshop.model.publication.User;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int replyId;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @ManyToOne
    @JoinColumn(name = "username")
    private User user;

    @Column(nullable = false, length = 2000)
    private String description;
}