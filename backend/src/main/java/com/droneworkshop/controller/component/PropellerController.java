package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Propeller;
import com.droneworkshop.service.component.PropellerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PropellerController {
    private final PropellerService propellerService;

    public PropellerController(PropellerService propellerService) {
        this.propellerService = propellerService;
    }

    @GetMapping("/propeller")
    public List<Propeller> getAllPropellers() {
        return propellerService.getAllPropellers();
    }

    @GetMapping("/propeller/{id}")
    public Propeller getPropellerById(
            @PathVariable int id
    ) {
        return propellerService.getPropellerById(id);
    }

    @GetMapping(value = "/propeller", params = {"modelPrefix"})
    public List<Propeller> getPropellersByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return propellerService.getPropellersByModelStartingWith(modelPrefix);
    }
}