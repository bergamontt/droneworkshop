package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Antenna {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="antenna_id")
    private Integer id;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column(nullable = false, length = 50)
    private String connector;

    @Column
    private Double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String frequency;

    @Column
    private Double dbi;

    @Column(length = 50)
    private String polarization;

    @Column
    private Double swr;

    @Column(nullable = false, length = 50)
    private String antennaType;

    @Column(length = 100)
    private String photoLink;

    @OneToMany(mappedBy = "antenna")
    private List<Distributor> distributors = new ArrayList<>();
}