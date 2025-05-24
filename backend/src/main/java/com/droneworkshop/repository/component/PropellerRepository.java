package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Propeller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PropellerRepository extends JpaRepository<Propeller, Integer> {
    List<Propeller> findByModelStartingWithIgnoreCase(String modelPrefix);
}
