package com.droneworkshop.model.publication;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer publicationId;

    @ManyToOne
    @JoinColumn(name = "drone_id", nullable = false)
    private Drone drone;

    @Column(nullable = false)
    private Integer numOfViews;

    @Column(nullable = false)
    private Timestamp createdAt;
}