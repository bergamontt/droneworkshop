package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.repository.component.AntennaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AntennaService {
    private final AntennaRepository antennaRepository;

    public AntennaService(AntennaRepository antennaRepository) {
        this.antennaRepository = antennaRepository;
    }

    public Antenna getAntennaById(int id) {
        return antennaRepository.findById(id).orElse(null);
    }

    public Page<Antenna> getAllAntennas(Pageable pageable) {
        return antennaRepository.findAll(pageable);
    }

    public List<Antenna> getAntennasByModelStartingWith(String modelPrefix) {
        return antennaRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}