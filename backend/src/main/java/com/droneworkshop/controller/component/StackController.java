package com.droneworkshop.controller.component;

import com.droneworkshop.dto.filter.StackFilterDto;
import com.droneworkshop.model.component.Stack;
import com.droneworkshop.service.component.StackService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class StackController {
    private final StackService stackService;

    public StackController(StackService stackService) {
        this.stackService = stackService;
    }

    @GetMapping(value = "/stack")
    public Page<Stack> getAllStacks(
            @ModelAttribute StackFilterDto filter,
            Pageable pageable
    ) {
        return stackService.getFilteredStacks(filter, pageable);
    }

    @GetMapping("/stack/{id}")
    public Stack getStackById(
            @PathVariable int id
    ) {
        return stackService.getStackById(id);
    }

    @GetMapping("/stack/manufacturers")
    public List<String> getStackManufacturers() {
        return stackService.getDistinctManufacturers();
    }

    @GetMapping("/stack/distributors")
    public List<String> getStackDistributors() {
        return stackService.getDistinctDistributorNames();
    }

}