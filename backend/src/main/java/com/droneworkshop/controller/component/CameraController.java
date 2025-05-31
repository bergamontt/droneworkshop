package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.CameraFilterDto;
import com.droneworkshop.model.component.Camera;
import com.droneworkshop.service.component.CameraService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class CameraController {
    private final CameraService cameraService;

    public CameraController(CameraService cameraService) {
        this.cameraService = cameraService;
    }

    @GetMapping(value = "/camera")
    public Page<Camera> getAllCameras(
            @ModelAttribute CameraFilterDto filter,
            Pageable pageable
    ) {
        return cameraService.getFilteredCameras(filter, pageable);
    }

    @GetMapping("/camera/{id}")
    public Camera getCamera(
            @PathVariable int id
    ) {
        return cameraService.getCameraById(id);
    }

}