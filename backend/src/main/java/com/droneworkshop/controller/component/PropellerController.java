package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.PropellerFilterDto;
import com.droneworkshop.model.component.Propeller;
import com.droneworkshop.service.component.PropellerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;


@RestController
public class PropellerController {
    private final PropellerService propellerService;

    public PropellerController(PropellerService propellerService) {
        this.propellerService = propellerService;
    }

    @GetMapping(value = "/propeller")
    public Page<Propeller> getAllPropellers(
            @ModelAttribute PropellerFilterDto filter,
            Pageable pageable
    ) {
        return propellerService.getFilteredPropellers(filter, pageable);
    }

    @GetMapping("/propeller/{id}")
    public Propeller getPropellerById(
            @PathVariable int id
    ) {
        return propellerService.getPropellerById(id);
    }
}