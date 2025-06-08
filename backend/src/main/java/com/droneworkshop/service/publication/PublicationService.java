package com.droneworkshop.service.publication;

import com.droneworkshop.dto.filter.publication.PublicationFilterDto;
import com.droneworkshop.dto.request.PublicationRequestDto;
import com.droneworkshop.mapper.request.PublicationRequestMapper;
import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.model.publication.Publication;
import com.droneworkshop.repository.publication.DroneRepository;
import com.droneworkshop.repository.publication.PublicationRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import static com.droneworkshop.specification.publication.PublicationSpec.buildSpecification;

@Service
public class PublicationService {
    private final PublicationRepository publicationRepository;
    private final DroneRepository droneRepository;

    public PublicationService(
            PublicationRepository publicationRepository,
            DroneRepository droneRepository
    ) {
        this.publicationRepository = publicationRepository;
        this.droneRepository = droneRepository;
    }

    public Publication getPublicationById(int id) {
        return publicationRepository.findById(id).orElse(null);
    }

    public Page<Publication> getFilteredPublications(PublicationFilterDto filter, Pageable pageable) {
        Specification<Publication> spec = buildSpecification(filter);
        return publicationRepository.findAll(spec, pageable);
    }

    public void createPublication(PublicationRequestDto request) {
        Drone drone = droneRepository.findById(request.getDroneId()).orElse(null);
        Publication publication = PublicationRequestMapper.mapRequestToEntity(drone);
        publicationRepository.save(publication);
    }

}