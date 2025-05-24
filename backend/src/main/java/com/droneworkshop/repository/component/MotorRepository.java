package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Motor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotorRepository extends JpaRepository<Motor, Integer> {
}
