package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Antenna;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AntennaRepository extends JpaRepository<Antenna, Integer> {
    List<Antenna> findByModelStartingWithIgnoreCase(String modelPrefix);
}