package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.RXFilterDto;
import com.droneworkshop.model.component.RX;
import com.droneworkshop.repository.component.RXRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.RXSpec.buildSpecification;

@Service
public class RXService {
    private final RXRepository rxRepository;

    public RXService(RXRepository rxRepository) {
        this.rxRepository = rxRepository;
    }

    public RX getRXById(int id) {
        return rxRepository.findById(id).orElse(null);
    }

    public Page<RX> getFilteredRXs(RXFilterDto filter, Pageable pageable) {
        Specification<RX> spec = buildSpecification(filter);
        return rxRepository.findAll(spec, pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return rxRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return rxRepository.findDistinctManufacturers();
    }

}