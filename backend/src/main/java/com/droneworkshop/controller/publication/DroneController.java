package com.droneworkshop.controller.publication;

import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.service.publication.DroneService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DroneController {
    private final DroneService droneService;

    public DroneController(DroneService droneService) {
        this.droneService = droneService;
    }

    @GetMapping("/drone/{id}")
    public Drone getDroneById(
            @PathVariable int id
    ) {
        return droneService.getDroneById(id);
    }
}