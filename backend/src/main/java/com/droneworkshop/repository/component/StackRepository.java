package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.model.component.RX;
import com.droneworkshop.model.component.Stack;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import static com.droneworkshop.repository.component.GenericPredicates.getPricePredicate;

public interface StackRepository extends JpaRepository<Stack, Integer>, JpaSpecificationExecutor<Stack> {

    interface Specs {
        static Specification<Stack> byModelPrefix(String modelPrefix) {
            return (root, query, builder) -> {
                if (modelPrefix == null || modelPrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("model"), modelPrefix + "%");
            };
        }

        static Specification<Stack> byDistributorPriceBetween(Integer minPrice, Integer maxPrice) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                Join<RX, Distributor> distributorJoin = root.join("distributors");
                return getPricePredicate(minPrice, maxPrice, builder, distributorJoin.get("price"));
            };
        }

        static Specification<Stack> orderByModel(Specification<Stack> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.asc(root.get("model")));
                return spec.toPredicate(root, query, builder);
            };
        }
    }
}