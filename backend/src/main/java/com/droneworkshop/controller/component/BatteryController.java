package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Battery;
import com.droneworkshop.service.component.BatteryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BatteryController {
    private final BatteryService batteryService;

    public BatteryController(BatteryService batteryService) {
        this.batteryService = batteryService;
    }

    @GetMapping("/battery")
    public List<Battery> getAllBatteries() {
        return batteryService.getAllBatteries();
    }

    @GetMapping("/battery/{id}")
    public Battery getBatteryById(
            @PathVariable int id
    ) {
        return batteryService.getBatteryById(id);
    }

    @GetMapping(value = "/battery", params = {"modelPrefix"})
    public List<Battery> getBatteriesByModelStartingWith(
            @RequestParam String modelPrefix
    ) {
        return batteryService.getBatteriesByModelStartingWith(modelPrefix);
    }
}