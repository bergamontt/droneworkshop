package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.VTXFilterDto;
import com.droneworkshop.model.component.VTX;
import com.droneworkshop.repository.component.VTXRepository;
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

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}