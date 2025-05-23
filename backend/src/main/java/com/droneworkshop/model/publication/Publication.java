package com.droneworkshop.model.publication;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Publication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int publicationId;

    @ManyToOne
    @JoinColumn(name = "drone_id", nullable = false)
    private Drone drone;

    @Column(nullable = false)
    private int numOfViews;
}