package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Motor;
import com.droneworkshop.repository.component.MotorRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MotorService {
    private final MotorRepository motorRepository;

    public MotorService(MotorRepository motorRepository) {
        this.motorRepository = motorRepository;
    }

    public Motor getMotorById(int id) {
        return motorRepository.findById(id).orElse(null);
    }

    public Page<Motor> getAllMotors(Pageable pageable) {
        return motorRepository.findAll(pageable);
    }

    public List<Motor> getMotorsByModelStartingWith(String modelPrefix) {
        return motorRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}