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

        if (filter.getSortBy() != null && filter.getSortDirection() != null) {
            Specification<Drone> finalSpec = spec;
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);

                if ("droneName".equalsIgnoreCase(filter.getSortBy())) {
                    query.orderBy("ASC".equalsIgnoreCase(filter.getSortDirection())
                            ? builder.asc(root.get("droneNameLowercase"))
                            : builder.desc(root.get("droneNameLowercase")));
                }
                else if ("createdAt".equalsIgnoreCase(filter.getSortBy())) {
                    query.orderBy("ASC".equalsIgnoreCase(filter.getSortDirection())
                            ? builder.asc(root.get("createdAt"))
                            : builder.desc(root.get("createdAt")));
                }

                return finalSpec != null ? finalSpec.toPredicate(root, query, builder) : builder.conjunction();
            };
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
