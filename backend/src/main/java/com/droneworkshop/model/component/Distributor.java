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

    @ManyToOne
    @JoinColumn(name = "frame_id")
    private Frame frame;

    @ManyToOne
    @JoinColumn(name = "propeller_id")
    private Propeller propeller;

    @ManyToOne
    @JoinColumn(name = "camera_id")
    private Camera camera;

    @ManyToOne
    @JoinColumn(name = "vtx_id")
    private VTX vtx;

    @ManyToOne
    @JoinColumn(name = "rx_id")
    private RX rx;

    @ManyToOne
    @JoinColumn(name = "antenna_id")
    private Antenna antenna;

    @ManyToOne
    @JoinColumn(name = "battery_id")
    private Battery battery;

    @ManyToOne
    @JoinColumn(name = "motor_id")
    private Motor motor;

    @ManyToOne
    @JoinColumn(name = "stack_id")
    private Stack stack;
}
