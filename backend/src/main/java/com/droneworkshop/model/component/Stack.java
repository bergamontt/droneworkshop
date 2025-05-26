package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Stack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stackId;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column
    private double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String mountSize;

    @Column(nullable = false, length = 50)
    private String cableConnector;

    @Column(nullable = false)
    private double workingCurrent;

    @Column(nullable = false)
    private double maxCurrent;

    @Column(nullable = false, length = 50)
    private String rangeS;

    @Column(length = 100)
    private String photoLink;
}