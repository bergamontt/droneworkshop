package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.VTXFilterDto;
import com.droneworkshop.model.component.VTX;
import com.droneworkshop.service.component.VTXService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class VTXController {
    private final VTXService vtxService;

    public VTXController(VTXService vtxService) {
        this.vtxService = vtxService;
    }

    @GetMapping(value = "/vtx")
    public Page<VTX> getAllStacks(
            @ModelAttribute VTXFilterDto filter,
            Pageable pageable
    ) {
        return vtxService.getFilteredVTXs(filter, pageable);
    }

    @GetMapping("/vtx/{id}")
    public VTX getVTXById(
            @PathVariable int id
    ) {
        return vtxService.getVTXById(id);
    }

}