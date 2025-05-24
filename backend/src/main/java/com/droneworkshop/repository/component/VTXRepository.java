package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.VTX;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VTXRepository extends JpaRepository<VTX, Integer> {
    List<VTX> findByModelStartingWithIgnoreCase(String modelPrefix);
}