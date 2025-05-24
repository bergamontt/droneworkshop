package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Motor;
import com.droneworkshop.repository.component.MotorRepository;
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

    public List<Motor> getAllMotors() {
        return motorRepository.findAll();
    }

    public List<Motor> getMotorsByModelStartingWith(String modelPrefix) {
        return motorRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}