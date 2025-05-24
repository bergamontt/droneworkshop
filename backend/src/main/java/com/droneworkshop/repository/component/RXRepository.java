package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.RX;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RXRepository extends JpaRepository<RX, Integer> {
    List<RX> findByModelStartingWithIgnoreCase(String modelPrefix);
}
