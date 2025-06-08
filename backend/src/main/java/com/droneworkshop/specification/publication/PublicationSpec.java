package com.droneworkshop.specification.publication;

import com.droneworkshop.dto.filter.publication.PublicationFilterDto;
import com.droneworkshop.model.publication.Publication;
import com.droneworkshop.repository.publication.PublicationRepository;
import org.springframework.data.jpa.domain.Specification;

public class PublicationSpec {
    public static Specification<Publication> buildSpecification(PublicationFilterDto filter) {
        Specification<Publication> spec = null;

        if (filter.getDroneNamePrefix() != null && !filter.getDroneNamePrefix().isEmpty()) {
            spec = PublicationRepository.Specs.byDroneNamePrefix(filter.getDroneNamePrefix());
        }

        if (filter.getUsername() != null && !filter.getUsername().isEmpty()) {
            spec = spec == null ? PublicationRepository.Specs.byUsername(filter.getUsername())
                    : spec.and(PublicationRepository.Specs.byUsername(filter.getUsername()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}