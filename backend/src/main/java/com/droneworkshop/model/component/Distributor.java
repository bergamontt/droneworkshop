package com.droneworkshop.model.component;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Distributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer distributorId;

    @Column(nullable = false, length = 64)
    private String distributorName;

    @Column(nullable = false, length = 100)
    private String distributorLink;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private boolean isAvailable;

    @Column(name = "frame_id")
    private Integer frame;

    @Column(name = "propeller_id")
    private Integer propeller;

    @Column(name = "camera_id")
    private Integer camera;

    @Column(name = "vtx_id")
    private Integer vtx;

    @Column(name = "rx_id")
    private Integer rx;

    @Column(name = "antenna_id")
    private Integer antenna;

    @Column(name = "battery_id")
    private Integer battery;

    @Column(name = "motor_id")
    private Integer motor;

    @Column(name = "stack_id")
    private Integer stack;
}
