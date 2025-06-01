package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.AntennaFilterDto;
import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.repository.component.AntennaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.AntennaSpec.buildSpecification;

@Service
public class AntennaService {
    private final AntennaRepository antennaRepository;

    public AntennaService(AntennaRepository antennaRepository) {
        this.antennaRepository = antennaRepository;
    }

    public Antenna getAntennaById(int id) {
        return antennaRepository.findById(id).orElse(null);
    }

    public Page<Antenna> getFilteredAntennas(AntennaFilterDto filter, Pageable pageable) {
        Specification<Antenna> spec = buildSpecification(filter);
        return antennaRepository.findAll(AntennaRepository.Specs.orderByModel(spec), pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return antennaRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return antennaRepository.findDistinctManufacturers();
    }

}