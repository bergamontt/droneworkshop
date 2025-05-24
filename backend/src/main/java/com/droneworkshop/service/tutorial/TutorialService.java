package com.droneworkshop.service.tutorial;

import com.droneworkshop.model.tutorial.Tutorial;
import com.droneworkshop.repository.tutorial.TutorialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TutorialService {
    private final TutorialRepository tutorialRepository;

    public TutorialService(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    public Tutorial getTutorialById(int id) {
        return tutorialRepository.findById(id).get();
    }

    public List<Tutorial> getAllTutorials() {
        return tutorialRepository.findAll();
    }
}