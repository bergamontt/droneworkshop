package com.droneworkshop.controller.tutorial;

import com.droneworkshop.model.tutorial.Tutorial;
import com.droneworkshop.service.tutorial.TutorialService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TutorialController {
    private final TutorialService tutorialService;

    public TutorialController(TutorialService tutorialService) {
        this.tutorialService = tutorialService;
    }

    @GetMapping("/tutorial")
    public List<Tutorial> getAllTutorials() {
        return tutorialService.getAllTutorials();
    }

    @GetMapping("/tutorial/{id}")
    public Tutorial getTutorialById(
            @PathVariable Integer id
    ) {
        return tutorialService.getTutorialById(id);
    }
}