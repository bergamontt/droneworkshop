package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Antenna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int antennaId;

    @Column(nullable = false, length = 50)
    private String model;

    @Column(nullable = false, length = 50)
    private String manufacturer;

    @Column(nullable = false, length = 50)
    private String connector;

    @Column(nullable = false)
    private double mass;

    @Column(nullable = false, length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String frequency;

    @Column(nullable = false)
    private double dbi;

    @Column(length = 50)
    private String polarization;

    @Column(nullable = false)
    private double swr;

    @Column(nullable = false, length = 3)
    private String antennaType;
}