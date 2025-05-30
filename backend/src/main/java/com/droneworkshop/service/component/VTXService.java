package com.droneworkshop.service.component;

import com.droneworkshop.model.component.VTX;
import com.droneworkshop.repository.component.VTXRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VTXService {
    private final VTXRepository vtxRepository;

    public VTXService(VTXRepository vtxRepository) {
        this.vtxRepository = vtxRepository;
    }

    public VTX getVTXById(int id) {
        return vtxRepository.findById(id).orElse(null);
    }

    public Page<VTX> getAllVTXs(Pageable pageable) {
        return vtxRepository.findAll(pageable);
    }

    public List<VTX> getVTXsByModelStartingWith(String modelPrefix) {
        return vtxRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}