package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.model.RXFilterDto;
import com.droneworkshop.model.component.RX;
import com.droneworkshop.service.component.RXService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class RXController {
    private final RXService rxService;

    public RXController(RXService rxService) {
        this.rxService = rxService;
    }

    @GetMapping(value = "/rx")
    public Page<RX> getAllRXs(
            @ModelAttribute RXFilterDto filter,
            Pageable pageable
    ) {
        return rxService.getFilteredRXs(filter, pageable);
    }

    @GetMapping("/rx/{id}")
    public RX getRXById(
            @PathVariable int id
    ) {
        return rxService.getRXById(id);
    }

    @GetMapping("/rx/manufacturers")
    public List<String> getRXManufacturers() {
        return rxService.getDistinctManufacturers();
    }

    @GetMapping("/rx/distributors")
    public List<String> getRXDistributors() {
        return rxService.getDistinctDistributorNames();
    }

}