package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Battery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BatteryRepository extends JpaRepository<Battery, Integer> {
    List<Battery> findByModelStartingWithIgnoreCase(String modelPrefix);
}