package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Frame;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FrameRepository extends JpaRepository<Frame, Integer> {
    List<Frame> findByModelStartingWithIgnoreCase(String modelPrefix);
}
