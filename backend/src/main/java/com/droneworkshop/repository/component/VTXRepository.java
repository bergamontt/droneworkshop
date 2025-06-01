package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.model.component.RX;
import com.droneworkshop.model.component.VTX;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import static com.droneworkshop.repository.component.GenericPredicates.getPricePredicate;

public interface VTXRepository extends JpaRepository<VTX, Integer>, JpaSpecificationExecutor<VTX> {

    @Query("SELECT DISTINCT b.manufacturer FROM VTX b WHERE b.manufacturer IS NOT NULL")
    List<String> findDistinctManufacturers();

    @Query("SELECT DISTINCT d.distributorName FROM Distributor d WHERE d.vtx IS NOT NULL")
    List<String> findDistinctDistributorNames();

    interface Specs {
        static Specification<VTX> byModelPrefix(String modelPrefix) {
            return (root, query, builder) -> {
                if (modelPrefix == null || modelPrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("model"), modelPrefix + "%");
            };
        }

        static Specification<VTX> byDistributorPriceBetween(Integer minPrice, Integer maxPrice) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                Join<RX, Distributor> distributorJoin = root.join("distributors");
                return getPricePredicate(minPrice, maxPrice, builder, distributorJoin.get("price"));
            };
        }

        static Specification<VTX> byManufacturerNames(List<String> manufacturerNames) {
            return (root, query, cb) -> {
                if (manufacturerNames == null || manufacturerNames.isEmpty()) {
                    return cb.conjunction();
                }
                return root.get("manufacturer").in(manufacturerNames);
            };
        }

        static Specification<VTX> byDistributorNames(List<String> distributorNames) {
            return (root, query, cb) -> {
                if (distributorNames == null || distributorNames.isEmpty()) {
                    return cb.conjunction();
                }
                assert query != null;
                query.distinct(true);
                Join<VTX, Distributor> distributorJoin = root.join("distributors");
                return distributorJoin.get("distributorName").in(distributorNames);
            };
        }

        static Specification<VTX> orderByModel(Specification<VTX> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.asc(root.get("model")));
                return spec.toPredicate(root, query, builder);
            };
        }
    }
}