package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.model.component.Frame;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import static com.droneworkshop.repository.component.GenericPredicates.getPricePredicate;

public interface FrameRepository extends JpaRepository<Frame, Integer>, JpaSpecificationExecutor<Frame> {

    @Query("SELECT DISTINCT b.manufacturer FROM Frame b WHERE b.manufacturer IS NOT NULL")
    List<String> findDistinctManufacturers();

    @Query("SELECT DISTINCT d.distributorName FROM Distributor d WHERE d.frame IS NOT NULL")
    List<String> findDistinctDistributorNames();

    interface Specs {
        static Specification<Frame> byModelPrefix(String modelPrefix) {
            return (root, query, builder) -> {
                if (modelPrefix == null || modelPrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("modelLowercase"), "%" + modelPrefix.toLowerCase() + "%");
            };
        }

        static Specification<Frame> byDistributorPriceBetween(Integer minPrice, Integer maxPrice) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                Join<Frame, Distributor> distributorJoin = root.join("distributors");
                return getPricePredicate(minPrice, maxPrice, builder, distributorJoin.get("price"));
            };
        }

        static Specification<Frame> byManufacturerNames(List<String> manufacturerNames) {
            return (root, query, cb) -> {
                if (manufacturerNames == null || manufacturerNames.isEmpty()) {
                    return cb.conjunction();
                }
                return root.get("manufacturer").in(manufacturerNames);
            };
        }

        static Specification<Frame> byDistributorNames(List<String> distributorNames) {
            return (root, query, cb) -> {
                if (distributorNames == null || distributorNames.isEmpty()) {
                    return cb.conjunction();
                }
                assert query != null;
                query.distinct(true);
                Join<Frame, Distributor> distributorJoin = root.join("distributors");
                return distributorJoin.get("distributorName").in(distributorNames);
            };
        }

    }
}
