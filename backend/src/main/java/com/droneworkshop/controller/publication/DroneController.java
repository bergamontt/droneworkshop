package com.droneworkshop.controller.publication;

import com.droneworkshop.dto.request.DroneRequestDto;
import com.droneworkshop.dto.response.DroneResponseDto;
import com.droneworkshop.service.publication.DroneService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class DroneController {
    private final DroneService droneService;

    public DroneController(DroneService droneService) {
        this.droneService = droneService;
    }

    @GetMapping("/drone/{id}")
    public DroneResponseDto getDroneById(
            @PathVariable int id
    ) {
        return droneService.getDroneById(id);
    }

    @GetMapping("/drone")
    public Page<DroneResponseDto> getAllDrones(Pageable pageable) {
        return droneService.getAllDrones(pageable);
    }

    @PostMapping("/drone")
    public DroneResponseDto createDrone(
            @ModelAttribute DroneRequestDto request
    ) {
            return droneService.createDrone(request);
    }

}