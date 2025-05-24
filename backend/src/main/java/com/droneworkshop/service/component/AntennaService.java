package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.repository.component.AntennaRepository;
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

    public List<Antenna> getAllAntennas() {
        return antennaRepository.findAll();
    }
}