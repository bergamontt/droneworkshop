package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class VTX {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vtxId;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column(length = 50)
    private String connector;

    @Column(nullable = false)
    private int maxPower;

    @Column(length = 50)
    private String videoFormat;

    @Column
    private double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String frequency;

    @Column(length = 100)
    private String photoLink;
}