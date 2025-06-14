package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.model.BatteryFilterDto;
import com.droneworkshop.model.component.Battery;
import com.droneworkshop.repository.component.BatteryRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.model.BatterySpec.buildSpecification;


@Service
public class BatteryService {
    private final BatteryRepository batteryRepository;

    public BatteryService(BatteryRepository batteryRepository) {
        this.batteryRepository = batteryRepository;
    }

    public Battery getBatteryById(int id) {
        return batteryRepository.findById(id).orElse(null);
    }

    public Page<Battery> getFilteredBatteries(BatteryFilterDto filter, Pageable pageable) {
        Specification<Battery> spec = buildSpecification(filter);
        return batteryRepository.findAll(spec, pageable);
    }

    public List<String> getDistinctDistributorNames() {
        return batteryRepository.findDistinctDistributorNames();
    }

    public List<String> getDistinctManufacturers() {
        return batteryRepository.findDistinctManufacturers();
    }

}