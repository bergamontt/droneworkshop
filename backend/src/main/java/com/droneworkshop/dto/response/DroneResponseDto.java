package com.droneworkshop.dto.response;

import com.droneworkshop.model.authentification.User;
import com.droneworkshop.model.component.*;
import lombok.Data;

@Data
public class DroneResponseDto {
    private Integer droneId;
    private String droneName;
    private User user;
    private String photoBase64;
    private Frame frame;
    private Propeller propeller;
    private Camera camera;
    private VTX vtx;
    private RX rx;
    private Antenna vtxAntenna;
    private Antenna rxAntenna;
    private Battery battery;
    private Motor motor;
    private Stack stack;
}