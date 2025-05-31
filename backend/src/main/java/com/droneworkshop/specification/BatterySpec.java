package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.BatteryFilterDto;
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

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
