package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.MotorFilterDto;
import com.droneworkshop.model.component.Motor;
import com.droneworkshop.repository.component.MotorRepository;
import org.springframework.data.jpa.domain.Specification;

public class MotorSpec {
    public static Specification<Motor> buildSpecification(MotorFilterDto filter) {
        Specification<Motor> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = MotorRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? MotorRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(MotorRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? MotorRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(MotorRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? MotorRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(MotorRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}