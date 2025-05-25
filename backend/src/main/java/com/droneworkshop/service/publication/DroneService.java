package com.droneworkshop.service.publication;

import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.repository.publication.DroneRepository;
import org.springframework.stereotype.Service;

@Service
public class DroneService {
    private final DroneRepository droneRepository;

    public DroneService(DroneRepository droneRepository) {
        this.droneRepository = droneRepository;
    }

    public Drone getDroneById(int id) {
        return droneRepository.findById(id).orElse(null);
    }
}