package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.FrameFilterDto;
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

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}