package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.VTXFilterDto;
import com.droneworkshop.model.component.Battery;
import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.model.component.Stack;
import com.droneworkshop.model.component.VTX;
import com.droneworkshop.repository.component.VTXRepository;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Subquery;
import org.springframework.data.jpa.domain.Specification;

public class VTXSpec {
    public static Specification<VTX> buildSpecification(VTXFilterDto filter) {
        Specification<VTX> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = VTXRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? VTXRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(VTXRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? VTXRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(VTXRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? VTXRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(VTXRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        if (filter.getSortBy() != null && filter.getSortDirection() != null) {
            Specification<VTX> finalSpec = spec;
            return (root, query, builder) -> {

                assert query != null;
                query.distinct(true);

                if ("minPrice".equalsIgnoreCase(filter.getSortBy())) {
                    Subquery<Integer> subquery = query.subquery(Integer.class);
                    var subRoot = subquery.from(VTX.class);
                    Join<VTX, Distributor> subDistributorJoin = subRoot.join("distributors");
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