package com.droneworkshop.repository.component;

import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.model.component.Distributor;
import jakarta.persistence.criteria.Join;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import static com.droneworkshop.repository.component.GenericPredicates.getPricePredicate;

public interface AntennaRepository extends JpaRepository<Antenna, Integer>, JpaSpecificationExecutor<Antenna> {

    @Query("SELECT DISTINCT a.manufacturer FROM Antenna a WHERE a.manufacturer IS NOT NULL")
    List<String> findDistinctManufacturers();

    @Query("SELECT DISTINCT d.distributorName FROM Distributor d WHERE d.antenna IS NOT NULL")
    List<String> findDistinctDistributorNames();

    interface Specs {
        static Specification<Antenna> byModelPrefix(String modelPrefix) {
            return (root, query, builder) -> {
                if (modelPrefix == null || modelPrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("modelLowercase"), "%" + modelPrefix.toLowerCase() + "%");
            };
        }

        static Specification<Antenna> byDistributorPriceBetween(Integer minPrice, Integer maxPrice) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                Join<Antenna, Distributor> distributorJoin = root.join("distributors");
                return getPricePredicate(minPrice, maxPrice, builder, distributorJoin.get("price"));
            };
        }

        static Specification<Antenna> byManufacturerNames(List<String> manufacturerNames) {
            return (root, query, cb) -> {
                if (manufacturerNames == null || manufacturerNames.isEmpty()) {
                    return cb.conjunction();
                }
                return root.get("manufacturer").in(manufacturerNames);
            };
        }

        static Specification<Antenna> byDistributorNames(List<String> distributorNames) {
            return (root, query, cb) -> {
                if (distributorNames == null || distributorNames.isEmpty()) {
                    return cb.conjunction();
                }
                assert query != null;
                query.distinct(true);
                Join<Antenna, Distributor> distributorJoin = root.join("distributors");
                return distributorJoin.get("distributorName").in(distributorNames);
            };
        }

        static Specification<Antenna> byAntennaType(String antennaType) {
            return (root, query, builder) -> {
                if (antennaType == null || antennaType.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.equal(root.get("antennaType"), antennaType);
            };
        }

    }
}