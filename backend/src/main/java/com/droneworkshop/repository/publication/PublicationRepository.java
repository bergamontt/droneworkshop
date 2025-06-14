package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.Publication;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PublicationRepository extends JpaRepository<Publication, Integer>, JpaSpecificationExecutor<Publication> {

    boolean existsByDroneDroneId(Integer droneId);
    Publication findByDroneDroneId(Integer droneId);

    interface Specs {
        static Specification<Publication> byDroneNamePrefix(String droneNamePrefix) {
            return (root, query, builder) -> {
                if (droneNamePrefix == null || droneNamePrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.join("drone").get("droneName"), "%" + droneNamePrefix + "%");
            };
        }

        static Specification<Publication> byUsername(String username) {
            return (root, query, builder) -> {
                if (username == null || username.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.equal(root.join("drone").get("username"), username);
            };
        }

        static Specification<Publication> orderByDroneName(Specification<Publication> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.asc(root.join("drone").get("droneName")));
                return spec.toPredicate(root, query, builder);
            };
        }

    }

}