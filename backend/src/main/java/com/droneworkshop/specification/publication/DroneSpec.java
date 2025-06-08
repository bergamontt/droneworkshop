package com.droneworkshop.specification.publication;

import com.droneworkshop.dto.filter.publication.DroneFilterDto;
import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.repository.publication.DroneRepository;
import org.springframework.data.jpa.domain.Specification;

public class DroneSpec {
    public static Specification<Drone> buildSpecification(DroneFilterDto filter) {
        Specification<Drone> spec = null;

        if (filter.getDroneNamePrefix() != null && !filter.getDroneNamePrefix().isEmpty()) {
            spec = DroneRepository.Specs.byDroneNamePrefix(filter.getDroneNamePrefix());
        }

        if (filter.getUsername() != null && !filter.getUsername().isEmpty()) {
            spec = spec == null ? DroneRepository.Specs.byUsername(filter.getUsername())
                    : spec.and(DroneRepository.Specs.byUsername(filter.getUsername()));
        }

        if (filter.getIsPublished() != null) {
            spec = spec == null ? DroneRepository.Specs.byIsPublished(filter.getIsPublished())
                    : spec.and(DroneRepository.Specs.byIsPublished(filter.getIsPublished()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
