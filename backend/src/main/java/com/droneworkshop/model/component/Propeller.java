package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Propeller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int propellerId;

    @Column(nullable = false, length = 50)
    private String model;

    @Column(nullable = false, length = 50)
    private String manufacturer;

    @Column(nullable = false, length = 50)
    private String material;

    @Column(nullable = false)
    private double sizeInches;

    @Column(nullable = false, length = 50)
    private String sizeMm;
}