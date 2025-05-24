package com.droneworkshop.service.tutorial;

import com.droneworkshop.model.tutorial.TutorialCategory;
import com.droneworkshop.repository.tutorial.TutorialCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TutorialCategoryService {
    private final TutorialCategoryRepository tutorialCategoryRepository;

    public TutorialCategoryService(TutorialCategoryRepository tutorialCategoryRepository) {
        this.tutorialCategoryRepository = tutorialCategoryRepository;
    }

    public TutorialCategory findTutorialCategoryById(int id) {
        return tutorialCategoryRepository.findById(id).orElse(null);
    }

    public List<TutorialCategory> findAllTutorialCategories() {
        return tutorialCategoryRepository.findAll();
    }
}