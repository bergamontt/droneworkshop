package com.droneworkshop.repository.tutorial;

import com.droneworkshop.model.tutorial.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorialRepository extends JpaRepository<Tutorial, Integer> {
}
