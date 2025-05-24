package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Antenna;
import com.droneworkshop.service.component.AntennaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AntennaController {
    private final AntennaService antennaService;

    public AntennaController(AntennaService antennaService) {
        this.antennaService = antennaService;
    }

    @GetMapping("/antenna")
    public List<Antenna> getAllAntennas() {
        return antennaService.getAllAntennas();
    }

    @GetMapping("/antenna/{id}")
    public Antenna getAntennaById(
            @PathVariable int id
    ) {
        return antennaService.getAntennaById(id);
    }

    @GetMapping(value = "/antenna", params = {"modelPrefix"})
    public List<Antenna> getAntennasByModelStartingWith(
            @RequestParam String modelPrefix
    ) {
        return antennaService.getAntennasByModelStartingWith(modelPrefix);
    }
}