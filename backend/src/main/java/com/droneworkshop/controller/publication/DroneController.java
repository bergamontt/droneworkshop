package com.droneworkshop.controller.publication;

import com.droneworkshop.dto.filter.publication.DroneFilterDto;
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
            @PathVariable Integer id
    ) {
        return droneService.getDroneById(id);
    }

    @GetMapping("/drone")
    public Page<DroneResponseDto> getAllDrones(
            @ModelAttribute DroneFilterDto filter,
            Pageable pageable
    ) {
        return droneService.getAllDrones(filter, pageable);
    }

    @PostMapping("/drone")
    public DroneResponseDto createDrone(
            @ModelAttribute DroneRequestDto request
    ) {
        return droneService.createDrone(request);
    }

    @DeleteMapping("/drone/{id}")
    public void deleteDroneById(
            @PathVariable Integer id
    ) {
        droneService.deleteDrone(id);
    }

}