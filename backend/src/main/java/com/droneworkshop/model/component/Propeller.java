package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Propeller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "propeller_id")
    private Integer id;

    @Column(nullable = false, length = 100)
    private String model;

    @Column(length = 50)
    private String manufacturer;

    @Column(nullable = false, length = 50)
    private String material;

    @Column(nullable = false)
    private Double sizeInches;

    @Column(length = 100)
    private String photoLink;

    @OneToMany(mappedBy = "propeller")
    private List<Distributor> distributors = new ArrayList<>();
}