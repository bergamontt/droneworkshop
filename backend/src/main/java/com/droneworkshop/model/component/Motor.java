package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Motor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer motorId;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column
    private Double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String mountSize;

    @Column(nullable = false)
    private Integer rotationSpeed;

    @Column(nullable = false, length = 50)
    private String rangeS;

    @Column(nullable = false)
    private Double maxCurrent;

    @Column(nullable = false)
    private Double maxPower;

    @Column(length = 100)
    private String photoLink;
}