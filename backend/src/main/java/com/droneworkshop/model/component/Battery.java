package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Battery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="battery_id")
    private Integer id;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column
    private Double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, name = "num_s")
    private Integer numS;

    @Column
    private Integer dischargeRate;

    @Column(nullable = false, length = 50)
    private String batteryType;

    @Column(nullable = false)
    private Double capacity;

    @Column(nullable = false, length = 50)
    private String cableConnector;

    @Column(length = 100)
    private String photoLink;

    @OneToMany(mappedBy = "battery")
    private List<Distributor> distributors = new ArrayList<>();
}