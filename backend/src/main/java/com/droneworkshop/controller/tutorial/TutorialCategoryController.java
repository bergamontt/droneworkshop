package com.droneworkshop.controller.tutorial;

import com.droneworkshop.model.tutorial.TutorialCategory;
import com.droneworkshop.service.tutorial.TutorialCategoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TutorialCategoryController {
    private final TutorialCategoryService tutorialCategoryService;

    public TutorialCategoryController(TutorialCategoryService tutorialCategoryService) {
        this.tutorialCategoryService = tutorialCategoryService;
    }

    @GetMapping("/tutorial_category")
    public List<TutorialCategory> getAllTutorialCategories() {
        return tutorialCategoryService.findAllTutorialCategories();
    }

    @GetMapping("/tutorial_category/{id}")
    public TutorialCategory getTutorialCategoryById(
            @PathVariable int id
    ) {
        return tutorialCategoryService.findTutorialCategoryById(id);
    }
}