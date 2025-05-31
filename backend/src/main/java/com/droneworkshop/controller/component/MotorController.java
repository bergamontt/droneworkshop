package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.MotorFilterDto;
import com.droneworkshop.model.component.Motor;
import com.droneworkshop.service.component.MotorService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

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

}