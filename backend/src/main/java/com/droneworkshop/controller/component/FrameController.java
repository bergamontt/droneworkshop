package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.FrameFilterDto;
import com.droneworkshop.model.component.Frame;
import com.droneworkshop.service.component.FrameService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FrameController {
    private final FrameService frameService;

    public FrameController(FrameService frameService) {
        this.frameService = frameService;
    }

    @GetMapping("/frame")
    public Page<Frame> getAllFrames(
            @ModelAttribute FrameFilterDto filter,
            Pageable pageable
    ) {
        return frameService.getFilteredFrames(filter, pageable);
    }

    @GetMapping("/frame/{id}")
    public Frame getFrameById(
            @PathVariable int id
    ) {
        return frameService.getFrameById(id);
    }

    @GetMapping("/frame/manufacturers")
    public List<String> getFrameManufacturers() {
        return frameService.getDistinctManufacturers();
    }

    @GetMapping("/frame/distributors")
    public List<String> getFrameDistributors() {
        return frameService.getDistinctManufacturers();
    }

}