package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Frame {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int frameId;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column(nullable = false)
    private double propellersInches;

    @Column
    private double mass;

    @Column(length = 50)
    private String material;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String camMountSize;

    @Column(nullable = false, length = 50)
    private String motorMountSize;

    @Column(length = 100)
    private String photoLink;
}