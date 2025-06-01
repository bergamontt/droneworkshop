package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.BatteryFilterDto;
import com.droneworkshop.model.component.Battery;
import com.droneworkshop.service.component.BatteryService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BatteryController {
    private final BatteryService batteryService;

    public BatteryController(BatteryService batteryService) {
        this.batteryService = batteryService;
    }

    @GetMapping(value = "/battery")
    public Page<Battery> getAllBatteries(
            @ModelAttribute BatteryFilterDto filter,
            Pageable pageable
    ) {
        return batteryService.getFilteredAntennas(filter, pageable);
    }

    @GetMapping("/battery/{id}")
    public Battery getBatteryById(
            @PathVariable int id
    ) {
        return batteryService.getBatteryById(id);
    }

    @GetMapping("/battery/manufacturers")
    public List<String> getBatteryManufacturers() {
        return batteryService.getDistinctManufacturers();
    }

    @GetMapping("/battery/distributors")
    public List<String> getBatteryDistributors() {
        return batteryService.getDistinctDistributorNames();
    }

}