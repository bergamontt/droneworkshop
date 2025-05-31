package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.AntennaFilterDto;
import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.repository.component.AntennaRepository;
import org.springframework.data.jpa.domain.Specification;

public class AntennaSpec {
    public static Specification<Antenna> buildSpecification(AntennaFilterDto filter) {
        Specification<Antenna> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = AntennaRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? AntennaRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(AntennaRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
