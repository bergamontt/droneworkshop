package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.AntennaFilterDto;
import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.repository.component.AntennaRepository;
import org.springframework.data.jpa.domain.Specification;

public class AntennaSpec {
    public static Specification<Antenna> buildSpecification(AntennaFilterDto filter, String antennaType) {
        Specification<Antenna> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = AntennaRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? AntennaRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(AntennaRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        if (filter.getManufacturerNames() != null && !filter.getManufacturerNames().isEmpty()) {
            spec = spec == null ? AntennaRepository.Specs.byManufacturerNames(filter.getManufacturerNames())
                    : spec.and(AntennaRepository.Specs.byManufacturerNames(filter.getManufacturerNames()));
        }

        if (filter.getDistributorNames() != null && !filter.getDistributorNames().isEmpty()) {
            spec = spec == null ? AntennaRepository.Specs.byDistributorNames(filter.getDistributorNames())
                    : spec.and(AntennaRepository.Specs.byDistributorNames(filter.getDistributorNames()));
        }

        if (antennaType != null && !antennaType.isEmpty()) {
            spec = spec == null ? AntennaRepository.Specs.byAntennaType(antennaType)
                    : spec.and(AntennaRepository.Specs.byAntennaType(antennaType));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}
