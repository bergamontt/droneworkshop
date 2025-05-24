package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Frame;
import com.droneworkshop.model.component.Motor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MotorRepository extends JpaRepository<Motor, Integer> {
    List<Motor> findByModelStartingWithIgnoreCase(String modelPrefix);

}