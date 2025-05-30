package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Motor;
import com.droneworkshop.service.component.MotorService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MotorController {
    private final MotorService motorService;

    public MotorController(MotorService motorService) {
        this.motorService = motorService;
    }

    @GetMapping(value = "/motor", params = {"page", "size"})
    public Page<Motor> getAllMotors(
            Pageable pageable
    ) {
        return motorService.getAllMotors(pageable);
    }

    @GetMapping("/motor/{id}")
    public Motor getMotorById(
            @PathVariable int id
    ) {
        return motorService.getMotorById(id);
    }

    @GetMapping(value = "/motor", params = {"modelPrefix"})
    public List<Motor> getMotorsByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return motorService.getMotorsByModelStartingWith(modelPrefix);
    }
}