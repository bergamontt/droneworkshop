package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Stack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StackRepository extends JpaRepository<Stack, Integer> {
    List<Stack> findByModelStartingWithIgnoreCase(String modelPrefix);
}