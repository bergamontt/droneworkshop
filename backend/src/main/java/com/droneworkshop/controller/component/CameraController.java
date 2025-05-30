package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Camera;
import com.droneworkshop.service.component.CameraService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CameraController {
    private final CameraService cameraService;

    public CameraController(CameraService cameraService) {
        this.cameraService = cameraService;
    }

    @GetMapping(value = "/camera", params = {"page", "size"})
    public Page<Camera> getAllCameras(
            Pageable pageable
    ) {
        return cameraService.getAllCameras(pageable);
    }

    @GetMapping("/camera/{id}")
    public Camera getCamera(
            @PathVariable int id
    ) {
        return cameraService.getCameraById(id);
    }

    @GetMapping(value = "/camera", params = {"modelPrefix"})
    public List<Camera> getAllCamerasByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return cameraService.getCamerasByModelStartingWith(modelPrefix);
    }
}