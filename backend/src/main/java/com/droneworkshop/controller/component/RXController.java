package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.RX;
import com.droneworkshop.service.component.RXService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RXController {
    private final RXService rxService;

    public RXController(RXService rxService) {
        this.rxService = rxService;
    }

    @GetMapping(value = "/rx", params = {"page", "size"})
    public Page<RX> getAllRXs(
            Pageable pageable
    ) {
        return rxService.getAllRXs(pageable);
    }

    @GetMapping("/rx/{id}")
    public RX getRXById(
            @PathVariable int id
    ) {
        return rxService.getRXById(id);
    }

    @GetMapping(value = "/rx", params = {"modelPrefix"})
    public List<RX> getRXsByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return rxService.getRXsByModelStartingWith(modelPrefix);
    }
}