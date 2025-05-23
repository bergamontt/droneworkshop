package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Frame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int frameId;

    @Column(nullable = false, length = 50)
    private String model;

    @Column(nullable = false, length = 50)
    private String manufacturer;

    @Column(nullable = false)
    private double propellersInches;

    @Column(nullable = false)
    private double mass;

    @Column(nullable = false, length = 50)
    private String material;

    @Column(nullable = false, length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String camMountSize;

    @Column(nullable = false, length = 50)
    private String motorMountSize;
}