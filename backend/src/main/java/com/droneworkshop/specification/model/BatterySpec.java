package com.droneworkshop.specification.model;

import com.droneworkshop.dto.filter.model.BatteryFilterDto;
import com.droneworkshop.model.component.Battery;
import com.droneworkshop.repository.component.BatteryRepository;
import org.springframework.data.jpa.domain.Specification;

public class BatterySpec {
    public static Specification<Battery> buildSpecification(BatteryFilterDto filter) {
        Specification<Battery> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = BatteryRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? BatteryRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(BatteryRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? BatteryRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(BatteryRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? BatteryRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(BatteryRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
