package com.droneworkshop.controller.publication;

import com.droneworkshop.model.publication.Publication;
import com.droneworkshop.service.publication.PublicationService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PublicationController {
    private final PublicationService publicationService;

    public PublicationController(PublicationService publicationService) {
        this.publicationService = publicationService;
    }

    @GetMapping("/publication")
    public List<Publication> getAllPublications() {
        return publicationService.getAllPublications();
    }

    @GetMapping("/publication/{id}")
    public Publication getPublication(
            @PathVariable int id
    ) {
        return publicationService.getPublicationById(id);
    }
}