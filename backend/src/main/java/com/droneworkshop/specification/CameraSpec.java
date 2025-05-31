package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.CameraFilterDto;
import com.droneworkshop.model.component.Camera;
import com.droneworkshop.repository.component.CameraRepository;
import org.springframework.data.jpa.domain.Specification;

public class CameraSpec {
    public static Specification<Camera> buildSpecification(CameraFilterDto filter) {
        Specification<Camera> spec = null;

        if (filter.getModelPrefix() != null && !filter.getModelPrefix().isEmpty()) {
            spec = CameraRepository.Specs.byModelPrefix(filter.getModelPrefix());
        }

        if (filter.getMinPrice() != null || filter.getMaxPrice() != null) {
            spec = spec == null ? CameraRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice())
                    : spec.and(CameraRepository.Specs.byDistributorPriceBetween(filter.getMinPrice(), filter.getMaxPrice()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}