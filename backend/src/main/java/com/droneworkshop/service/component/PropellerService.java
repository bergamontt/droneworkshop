package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.model.PropellerFilterDto;
import com.droneworkshop.model.component.Propeller;
import com.droneworkshop.repository.component.PropellerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.model.PropellerSpec.buildSpecification;

@Service
public class PropellerService {
    private final PropellerRepository propellerRepository;

    public PropellerService(PropellerRepository propellerRepository) {
        this.propellerRepository = propellerRepository;
    }

    public Propeller getPropellerById(int id) {
        return propellerRepository.findById(id).orElse(null);
    }

    public Page<Propeller> getFilteredPropellers(PropellerFilterDto filter, Pageable pageable) {
        Specification<Propeller> spec = buildSpecification(filter);
        return propellerRepository.findAll(spec, pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return propellerRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return propellerRepository.findDistinctManufacturers();
    }
}