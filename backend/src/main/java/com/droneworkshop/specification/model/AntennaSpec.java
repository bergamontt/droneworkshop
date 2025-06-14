package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.AntennaFilterDto;
import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.model.component.Battery;
import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.repository.component.AntennaRepository;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Subquery;
import org.springframework.data.jpa.domain.Specification;

public class AntennaSpec {
    public static Specification<Antenna> buildSpecification(AntennaFilterDto filter) {
        Specification<Antenna> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = AntennaRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? AntennaRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(AntennaRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? AntennaRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(AntennaRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? AntennaRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(AntennaRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        if (filter.getAntennaType() != null && !filter.getAntennaType().isEmpty()) {
            spec = spec == null ? AntennaRepository.Specs.byAntennaType(filter.getAntennaType())
                    : spec.and(AntennaRepository.Specs.byAntennaType(filter.getAntennaType()));
        }

        if (filter.getSortBy() != null && filter.getSortDirection() != null) {
            Specification<Antenna> finalSpec = spec;
            return (root, query, builder) -> {

                assert query != null;
                query.distinct(true);

                if ("minPrice".equalsIgnoreCase(filter.getSortBy())) {
                    Subquery<Integer> subquery = query.subquery(Integer.class);
                    var subRoot = subquery.from(Antenna.class);
                    Join<Antenna, Distributor> subDistributorJoin = subRoot.join("distributors");
                    subquery.select(builder.min(subDistributorJoin.get("price")))
                            .where(builder.equal(subRoot.get("id"), root.get("id")));

                    query.orderBy("ASC".equalsIgnoreCase(filter.getSortDirection())
                            ? builder.asc(subquery)
                            : builder.desc(subquery));

                } else if ("model".equalsIgnoreCase(filter.getSortBy())) {
                    query.orderBy("ASC".equalsIgnoreCase(filter.getSortDirection())
                            ? builder.asc(root.get("model"))
                            : builder.desc(root.get("model")));
                }

                return finalSpec != null ? finalSpec.toPredicate(root, query, builder) : builder.conjunction();
            };
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
