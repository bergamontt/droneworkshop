package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Battery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int batteryId;

    @Column(nullable = false, length = 50)
    private String model;

    @Column(nullable = false, length = 50)
    private String manufacturer;

    @Column(nullable = false)
    private double mass;

    @Column(nullable = false, length = 50)
    private String sizeMm;

    @Column(nullable = false)
    private int numS;

    @Column(nullable = false)
    private int numP;

    @Column(nullable = false)
    private int numC;

    @Column(nullable = false, length = 50)
    private String batteryType;

    @Column(nullable = false)
    private double capacity;

    @Column(nullable = false, length = 50)
    private String cableConnector;
}
