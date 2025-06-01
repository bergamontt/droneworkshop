package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.MotorFilterDto;
import com.droneworkshop.model.component.Motor;
import com.droneworkshop.service.component.MotorService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MotorController {
    private final MotorService motorService;

    public MotorController(MotorService motorService) {
        this.motorService = motorService;
    }

    @GetMapping(value = "/motor")
    public Page<Motor> getAllMotors(
            @ModelAttribute MotorFilterDto filter,
            Pageable pageable
    ) {
        return motorService.getFilteredMotors(filter, pageable);
    }

    @GetMapping("/motor/{id}")
    public Motor getMotorById(
            @PathVariable int id
    ) {
        return motorService.getMotorById(id);
    }

    @GetMapping("/motor/manufacturers")
    public List<String> getMotorManufacturers() {
        return motorService.getDistinctManufacturers();
    }

    @GetMapping("/motor/distributors")
    public List<String> getMotorDistributors() {
        return motorService.getDistinctDistributorNames();
    }

}