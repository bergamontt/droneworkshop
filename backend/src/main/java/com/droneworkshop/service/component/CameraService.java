package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Camera;
import com.droneworkshop.repository.component.CameraRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CameraService {
    private final CameraRepository cameraRepository;

    public CameraService(CameraRepository cameraRepository) {
        this.cameraRepository = cameraRepository;
    }

    public Camera getCameraById(int id) {
        return cameraRepository.findById(id).orElse(null);
    }

    public Page<Camera> getAllCameras(Pageable pageable) {
        return cameraRepository.findAll(pageable);
    }

    public List<Camera> getCamerasByModelStartingWith(String modelPrefix) {
        return cameraRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}