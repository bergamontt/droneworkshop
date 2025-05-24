package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Battery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatteryRepository extends JpaRepository<Battery, Integer> {
}
