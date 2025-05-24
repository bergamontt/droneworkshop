package com.droneworkshop.service.publication;

import com.droneworkshop.model.publication.Publication;
import com.droneworkshop.repository.publication.PublicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicationService {
    private final PublicationRepository publicationRepository;

    public PublicationService(PublicationRepository publicationRepository) {
        this.publicationRepository = publicationRepository;
    }

    public Publication getPublicationById(int id) {
        return publicationRepository.findById(id).orElse(null);
    }

    public List<Publication> getAllPublications() {
        return publicationRepository.findAll();
    }
}