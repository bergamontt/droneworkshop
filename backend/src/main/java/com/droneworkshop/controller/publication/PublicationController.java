package com.droneworkshop.controller.publication;

import com.droneworkshop.dto.filter.publication.PublicationFilterDto;
import com.droneworkshop.dto.request.PublicationRequestDto;
import com.droneworkshop.model.publication.Publication;
import com.droneworkshop.service.publication.PublicationService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class PublicationController {
    private final PublicationService publicationService;

    public PublicationController(PublicationService publicationService) {
        this.publicationService = publicationService;
    }

    @GetMapping("/publication")
    public Page<Publication> getAllPublications(
            @ModelAttribute PublicationFilterDto filter,
            Pageable pageable
    ) {
        return publicationService.getFilteredPublications(filter, pageable);
    }

    @GetMapping("/publication/{id}")
    public Publication getPublication(
            @PathVariable Integer id
    ) {
        return publicationService.getPublicationById(id);
    }

    @PostMapping("/publication")
    public Publication createPublication(
            @RequestBody PublicationRequestDto request
    ) {
        return publicationService.createPublication(request);
    }

}