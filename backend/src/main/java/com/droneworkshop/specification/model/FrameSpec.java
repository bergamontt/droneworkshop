package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.FrameFilterDto;
import com.droneworkshop.model.component.Frame;
import com.droneworkshop.repository.component.FrameRepository;
import org.springframework.data.jpa.domain.Specification;

public class FrameSpec {
    public static Specification<Frame> buildSpecification(FrameFilterDto filter) {
        Specification<Frame> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = FrameRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? FrameRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(FrameRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? FrameRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(FrameRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? FrameRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(FrameRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}