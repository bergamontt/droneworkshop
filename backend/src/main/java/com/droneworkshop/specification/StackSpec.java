package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.StackFilterDto;
import com.droneworkshop.model.component.Stack;
import com.droneworkshop.repository.component.StackRepository;
import org.springframework.data.jpa.domain.Specification;

public class StackSpec {
    public static Specification<Stack> buildSpecification(StackFilterDto filter) {
        Specification<Stack> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = StackRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? StackRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(StackRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}