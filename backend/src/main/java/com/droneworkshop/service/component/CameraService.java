package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.model.CameraFilterDto;
import com.droneworkshop.model.component.Camera;
import com.droneworkshop.repository.component.CameraRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.model.CameraSpec.buildSpecification;

@Service
public class CameraService {
    private final CameraRepository cameraRepository;

    public CameraService(CameraRepository cameraRepository) {
        this.cameraRepository = cameraRepository;
    }

    public Camera getCameraById(int id) {
        return cameraRepository.findById(id).orElse(null);
    }

    public Page<Camera> getFilteredCameras(CameraFilterDto filter, Pageable pageable) {
        Specification<Camera> spec = buildSpecification(filter);
        return cameraRepository.findAll(spec, pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return cameraRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return cameraRepository.findDistinctManufacturers();
    }

}