package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Camera;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CameraRepository extends JpaRepository<Camera, Integer> {
    List<Camera> findByModelStartingWithIgnoreCase(String modelPrefix);
}