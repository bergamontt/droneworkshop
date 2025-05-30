package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Frame;
import com.droneworkshop.service.component.FrameService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FrameController {
    private final FrameService frameService;

    public FrameController(FrameService frameService) {
        this.frameService = frameService;
    }

    @GetMapping(value = "/frame", params = {"page", "size"})
    public Page<Frame> getAllFrames(
            Pageable pageable
    ) {
        return frameService.getAllFrames(pageable);
    }

    @GetMapping("/frame/{id}")
    public Frame getFrameById(
            @PathVariable int id
    ) {
        return frameService.getFrameById(id);
    }

    @GetMapping(value = "/frame", params = {"modelPrefix"})
    public List<Frame> getFramesByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return frameService.getFramesByModelStartingWith(modelPrefix);
    }
}