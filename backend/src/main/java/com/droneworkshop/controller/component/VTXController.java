package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.VTX;
import com.droneworkshop.service.component.VTXService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VTXController {
    private final VTXService vtxService;

    public VTXController(VTXService vtxService) {
        this.vtxService = vtxService;
    }

    @GetMapping(value = "/vtx", params = {"page", "size"})
    public Page<VTX> getAllStacks(
            Pageable pageable
    ) {
        return vtxService.getAllVTXs(pageable);
    }

    @GetMapping("/vtx/{id}")
    public VTX getVTXById(
            @PathVariable int id
    ) {
        return vtxService.getVTXById(id);
    }

    @GetMapping(value = "/vtx", params = {"modelPrefix"})
    public List<VTX> getVTXsByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return vtxService.getVTXsByModelStartingWith(modelPrefix);
    }
}