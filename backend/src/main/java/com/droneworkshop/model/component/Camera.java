package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Camera {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cameraId;

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

    @Column
    private int tvl;

    @Column(nullable = false, length = 50)
    private String aspectRadio;

    @Column(nullable = false, length = 50)
    private String videoFormat;

    @Column(length = 100)
    private String photoLink;
}