package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Propeller;
import com.droneworkshop.repository.component.PropellerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropellerService {
    private final PropellerRepository propellerRepository;

    public PropellerService(PropellerRepository propellerRepository) {
        this.propellerRepository = propellerRepository;
    }

    public Propeller getPropellerById(int id) {
        return propellerRepository.findById(id).orElse(null);
    }

    public List<Propeller> getAllPropellers() {
        return propellerRepository.findAll();
    }

    public List<Propeller> getPropellersByModelStartingWith(String modelPrefix) {
        return propellerRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}