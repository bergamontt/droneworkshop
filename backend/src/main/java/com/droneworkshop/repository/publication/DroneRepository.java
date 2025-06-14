package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.model.publication.Publication;
import jakarta.persistence.criteria.Root;
import jakarta.persistence.criteria.Subquery;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DroneRepository extends JpaRepository<Drone, Integer>, JpaSpecificationExecutor<Drone> {

    interface Specs {
        static Specification<Drone> byDroneNamePrefix(String droneNamePrefix) {
            return (root, query, builder) -> {
                if (droneNamePrefix == null || droneNamePrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("droneName"), "%" + droneNamePrefix + "%");
            };
        }

        static Specification<Drone> byUsername(String username) {
            return (root, query, builder) -> {
                if (username == null || username.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.equal(root.get("username"), username);
            };
        }

        static Specification<Drone> byIsPublished(Boolean isPublished) {
            return (root, query, builder) -> {
                if (isPublished == null) {
                    return builder.conjunction();
                }
                assert query != null;
                Subquery<Integer> subquery = query.subquery(Integer.class);
                Root<Publication> subRoot = subquery.from(Publication.class);
                subquery.select(subRoot.get("drone").get("droneId"));
                if (isPublished)
                    return builder.in(root.get("droneId")).value(subquery);
                return builder.not(root.get("droneId").in(subquery));
            };
        }

        static Specification<Drone> orderByDroneName(Specification<Drone> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.asc(root.get("droneName")));
                return spec.toPredicate(root, query, builder);
            };
        }

    }

}
