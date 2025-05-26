package com.droneworkshop.model.publication;

import com.droneworkshop.model.component.*;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Drone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer droneId;

    @Column(nullable = false, length = 24)
    private String droneName;

    @ManyToOne
    @JoinColumn(name = "username")
    private User user;

    @ManyToOne
    @JoinColumn(name = "frame_id", nullable = false)
    private Frame frame;

    @ManyToOne
    @JoinColumn(name = "propeller_id", nullable = false)
    private Propeller propeller;

    @ManyToOne
    @JoinColumn(name = "camera_id", nullable = false)
    private Camera camera;

    @ManyToOne
    @JoinColumn(name = "vtx_id", nullable = false)
    private VTX vtx;

    @ManyToOne
    @JoinColumn(name = "rx_id", nullable = false)
    private RX rx;

    @ManyToOne
    @JoinColumn(name = "vtx_antenna_id", nullable = false)
    private Antenna vtxAntenna;

    @ManyToOne
    @JoinColumn(name = "rx_antenna_id", nullable = false)
    private Antenna rxAntenna;

    @ManyToOne
    @JoinColumn(name = "battery_id", nullable = false)
    private Battery battery;

    @ManyToOne
    @JoinColumn(name = "motor_id", nullable = false)
    private Motor motor;

    @ManyToOne
    @JoinColumn(name = "stack_id", nullable = false)
    private Stack stack;
}