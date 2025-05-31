package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.AntennaFilterDto;
import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.service.component.AntennaService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/antenna/{id}")
    public Antenna getAntennaById(
            @PathVariable int id
    ) {
        return antennaService.getAntennaById(id);
    }

}