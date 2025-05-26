package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Battery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int batteryId;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column
    private double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false)
    private int numS;

    @Column
    private int dischargeRate;

    @Column(nullable = false, length = 50)
    private String batteryType;

    @Column(nullable = false)
    private double capacity;

    @Column(nullable = false, length = 50)
    private String cableConnector;

    @Column(length = 100)
    private String photoLink;
}