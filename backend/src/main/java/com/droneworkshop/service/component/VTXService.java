package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.VTXFilterDto;
import com.droneworkshop.model.component.VTX;
import com.droneworkshop.repository.component.VTXRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.VTXSpec.buildSpecification;

@Service
public class VTXService {
    private final VTXRepository vtxRepository;

    public VTXService(VTXRepository vtxRepository) {
        this.vtxRepository = vtxRepository;
    }

    public VTX getVTXById(int id) {
        return vtxRepository.findById(id).orElse(null);
    }

    public Page<VTX> getFilteredVTXs(VTXFilterDto filter, Pageable pageable) {
        Specification<VTX> spec = buildSpecification(filter);
        return vtxRepository.findAll(spec, pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return vtxRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return vtxRepository.findDistinctManufacturers();
    }

}