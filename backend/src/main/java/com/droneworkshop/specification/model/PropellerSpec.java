package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.PropellerFilterDto;
import com.droneworkshop.model.component.Propeller;
import com.droneworkshop.repository.component.PropellerRepository;
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

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}