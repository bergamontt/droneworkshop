package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

import static com.droneworkshop.utils.ComponentUtils.findStartingPrice;

@Data
@Entity
public class Stack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stack_id")
    private Integer id;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(nullable = false, length = 100)
    private String modelLowercase;

    @Column(length = 50)
    private String manufacturer;

    @Column
    private Double mass;

    @Column(length = 50)
    private String sizeMm;

    @Column(nullable = false, length = 50)
    private String mountSize;

    @Column(nullable = false, length = 50)
    private String cableConnector;

    @Column(nullable = false)
    private Double workingCurrent;

    @Column(nullable = false)
    private Double maxCurrent;

    @Column(nullable = false, length = 50, name = "range_s")
    private String rangeS;

    @Column(length = 100)
    private String photoLink;

    @Transient
    private Integer startingPrice;

    @OneToMany(mappedBy = "stack")
    private List<Distributor> distributors = new ArrayList<>();

    public Integer getStartingPrice() {
        return findStartingPrice(distributors);
    }
}