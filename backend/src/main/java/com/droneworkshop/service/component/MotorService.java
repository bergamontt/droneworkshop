package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.MotorFilterDto;
import com.droneworkshop.model.component.Motor;
import com.droneworkshop.repository.component.MotorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.MotorSpec.buildSpecification;

@Service
public class MotorService {
    private final MotorRepository motorRepository;

    public MotorService(MotorRepository motorRepository) {
        this.motorRepository = motorRepository;
    }

    public Motor getMotorById(int id) {
        return motorRepository.findById(id).orElse(null);
    }

    public Page<Motor> getFilteredMotors(MotorFilterDto filter, Pageable pageable) {
        Specification<Motor> spec = buildSpecification(filter);
        return motorRepository.findAll(spec, pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return motorRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return motorRepository.findDistinctManufacturers();
    }
}