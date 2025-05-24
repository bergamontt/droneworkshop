package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Distributor;
import com.droneworkshop.repository.component.DistributorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistributorService {
    private final DistributorRepository distributorRepository;

    public DistributorService(DistributorRepository distributorRepository) {
        this.distributorRepository = distributorRepository;
    }

    public Distributor getDistributorById(int id) {
        return distributorRepository.findById(id).orElse(null);
    }

    public List<Distributor> getAllDistributors() {
        return distributorRepository.findAll();
    }
}