package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class RX {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rxId;

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

    @Column(nullable = false, length = 50)
    private String protocol;
}