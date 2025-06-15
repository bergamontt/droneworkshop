package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.model.component.Propeller;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import static com.droneworkshop.repository.component.GenericPredicates.getPricePredicate;

public interface PropellerRepository extends JpaRepository<Propeller, Integer>, JpaSpecificationExecutor<Propeller> {

    @Query("SELECT DISTINCT b.manufacturer FROM Propeller b WHERE b.manufacturer IS NOT NULL")
    List<String> findDistinctManufacturers();

    @Query("SELECT DISTINCT d.distributorName FROM Distributor d WHERE d.propeller IS NOT NULL")
    List<String> findDistinctDistributorNames();

    interface Specs {
        static Specification<Propeller> byModelPrefix(String modelPrefix) {
            return (root, query, builder) -> {
                if (modelPrefix == null || modelPrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("modelLowercase"), "%" + modelPrefix.toLowerCase() + "%");
            };
        }

        static Specification<Propeller> byDistributorPriceBetween(Integer minPrice, Integer maxPrice) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                Join<Propeller, Distributor> distributorJoin = root.join("distributors");
                return getPricePredicate(minPrice, maxPrice, builder, distributorJoin.get("price"));
            };
        }

        static Specification<Propeller> byManufacturerNames(List<String> manufacturerNames) {
            return (root, query, cb) -> {
                if (manufacturerNames == null || manufacturerNames.isEmpty()) {
                    return cb.conjunction();
                }
                return root.get("manufacturer").in(manufacturerNames);
            };
        }

        static Specification<Propeller> byDistributorNames(List<String> distributorNames) {
            return (root, query, cb) -> {
                if (distributorNames == null || distributorNames.isEmpty()) {
                    return cb.conjunction();
                }
                assert query != null;
                query.distinct(true);
                Join<Propeller, Distributor> distributorJoin = root.join("distributors");
                return distributorJoin.get("distributorName").in(distributorNames);
            };
        }


    }
}
