package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class RX {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rx_id")
    private Integer id;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column
    private Double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String frequency;

    @Column(nullable = false, length = 50)
    private String protocol;

    @Column(length = 100)
    private String photoLink;

    @OneToMany(mappedBy = "rx")
    private List<Distributor> distributors = new ArrayList<>();
}