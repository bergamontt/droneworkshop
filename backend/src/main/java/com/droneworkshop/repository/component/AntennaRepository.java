package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Antenna;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AntennaRepository extends JpaRepository<Antenna, Integer> {
}