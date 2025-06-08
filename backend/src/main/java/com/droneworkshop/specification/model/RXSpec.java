package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.RXFilterDto;
import com.droneworkshop.model.component.RX;
import com.droneworkshop.repository.component.RXRepository;
import org.springframework.data.jpa.domain.Specification;

public class RXSpec {
    public static Specification<RX> buildSpecification(RXFilterDto filter) {
        Specification<RX> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = RXRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? RXRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(RXRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? RXRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(RXRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? RXRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(RXRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
