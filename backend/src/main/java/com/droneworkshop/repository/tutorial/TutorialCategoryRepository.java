package com.droneworkshop.repository.tutorial;

import com.droneworkshop.model.tutorial.TutorialCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorialCategoryRepository extends JpaRepository<TutorialCategory, Integer> {
}
