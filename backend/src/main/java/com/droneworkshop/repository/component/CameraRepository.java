package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Camera;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CameraRepository extends JpaRepository<Camera, Integer> {
}
