package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Battery;
import com.droneworkshop.repository.component.BatteryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BatteryService {
    private final BatteryRepository batteryRepository;

    public BatteryService(BatteryRepository batteryRepository) {
        this.batteryRepository = batteryRepository;
    }

    public Battery getBatteryById(int id) {
        return batteryRepository.findById(id).orElse(null);
    }

    public List<Battery> getAllBatteries() {
        return batteryRepository.findAll();
    }

    public List<Battery> getBatteriesByModelStartingWith(String modelPrefix) {
        return batteryRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}