package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.PropellerFilterDto;
import com.droneworkshop.model.component.Battery;
import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.model.component.Motor;
import com.droneworkshop.model.component.Propeller;
import com.droneworkshop.repository.component.PropellerRepository;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Subquery;
import org.springframework.data.jpa.domain.Specification;

public class PropellerSpec {
    public static Specification<Propeller> buildSpecification(PropellerFilterDto filter) {
        Specification<Propeller> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = PropellerRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? PropellerRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(PropellerRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? PropellerRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(PropellerRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? PropellerRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(PropellerRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        if (filter.getSortBy() != null && filter.getSortDirection() != null) {
            Specification<Propeller> finalSpec = spec;
            return (root, query, builder) -> {

                assert query != null;
                query.distinct(true);

                if ("minPrice".equalsIgnoreCase(filter.getSortBy())) {
                    Subquery<Integer> subquery = query.subquery(Integer.class);
                    var subRoot = subquery.from(Propeller.class);
                    Join<Propeller, Distributor> subDistributorJoin = subRoot.join("distributors");
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