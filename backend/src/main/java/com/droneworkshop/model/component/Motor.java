package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Motor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int motorId;

    @Column(nullable = false, length = 50)
    private String model;

    @Column(nullable = false, length = 50)
    private String manufacturer;

    @Column(nullable = false)
    private double mass;

    @Column(nullable = false, length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String mountSize;

    @Column(nullable = false)
    private int rotationSpeed;

    @Column(nullable = false)
    private int numS;

    @Column(nullable = false)
    private double maxCurrent;

    @Column(nullable = false)
    private double maxPower;

    @Column(nullable = false)
    private double shaftDiameter;

    @Column(nullable = false)
    private double shaftLength;
}