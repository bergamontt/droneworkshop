package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Antenna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int antennaId;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column(nullable = false, length = 50)
    private String connector;

    @Column
    private double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String frequency;

    @Column
    private double dbi;

    @Column(length = 50)
    private String polarization;

    @Column
    private double swr;

    @Column(nullable = false, length = 50)
    private String antennaType;

    @Column(length = 100)
    private String photoLink;
}