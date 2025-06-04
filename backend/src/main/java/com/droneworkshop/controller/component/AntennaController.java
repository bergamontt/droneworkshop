package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.AntennaFilterDto;
import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.service.component.AntennaService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.droneworkshop.model.component.AntennaType.RX;
import static com.droneworkshop.model.component.AntennaType.VTX;

@RestController
public class AntennaController {
    private final AntennaService antennaService;

    public AntennaController(AntennaService antennaService) {
        this.antennaService = antennaService;
    }

    @GetMapping("/antenna")
    public Page<Antenna> getFilteredAntennasPaged(
            @ModelAttribute AntennaFilterDto filter,
            Pageable pageable
    ) {
        return antennaService.getFilteredAntennas(filter, pageable);
    }

    @GetMapping("/antenna_rx")
    public Page<Antenna> getFilteredRXAntennasPaged(
            @ModelAttribute AntennaFilterDto filter,
            Pageable pageable
    ) {
        filter.setAntennaType(RX);
        return antennaService.getFilteredAntennas(filter, pageable);
    }

    @GetMapping("/antenna_vtx")
    public Page<Antenna> getFilteredVTXAntennasPaged(
            @ModelAttribute AntennaFilterDto filter,
            Pageable pageable
    ) {
        filter.setAntennaType(VTX);
        return antennaService.getFilteredAntennas(filter, pageable);
    }

    @GetMapping("/antenna/{id}")
    public Antenna getAntennaById(
            @PathVariable int id
    ) {
        return antennaService.getAntennaById(id);
    }

    @GetMapping("/antenna/manufacturers")
    public List<String> getAntennaManufacturers() {
        return antennaService.getDistinctManufacturers();
    }

    @GetMapping("/antenna/distributors")
    public List<String> getAntennaDistributors() {
        return antennaService.getDistinctDistributorNames();
    }

}