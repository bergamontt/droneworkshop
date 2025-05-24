package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Stack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StackRepository extends JpaRepository<Stack, Integer> {
}
