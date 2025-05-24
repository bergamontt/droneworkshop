package com.droneworkshop.service.component;

import com.droneworkshop.model.component.RX;
import com.droneworkshop.repository.component.RXRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RXService {
    private final RXRepository rxRepository;

    public RXService(RXRepository rxRepository) {
        this.rxRepository = rxRepository;
    }

    public RX getRXById(int id) {
        return rxRepository.findById(id).orElse(null);
    }

    public List<RX> getAllRXs() {
        return rxRepository.findAll();
    }

    public List<RX> getRXsByModelStartingWith(String modelPrefix) {
        return rxRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}