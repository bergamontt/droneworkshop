package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Distributor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DistributorRepository extends JpaRepository<Distributor, Integer> {
}