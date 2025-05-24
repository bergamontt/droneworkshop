package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.Drone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DroneRepository extends JpaRepository<Drone, Integer> {
}
