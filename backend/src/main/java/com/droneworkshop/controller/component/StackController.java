package com.droneworkshop.controller.component;

import com.droneworkshop.model.component.Stack;
import com.droneworkshop.service.component.StackService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StackController {
    private final StackService stackService;

    public StackController(StackService stackService) {
        this.stackService = stackService;
    }

    @GetMapping("/stack")
    public List<Stack> getAllStacks() {
        return stackService.getAllStacks();
    }

    @GetMapping("/stack/{id}")
    public Stack getStackById(
            @PathVariable int id
    ) {
        return stackService.getStackById(id);
    }

    @GetMapping(value = "/stack", params = {"modelPrefix"})
    public List<Stack> getStacksByModelPrefix(
            @RequestParam String modelPrefix
    ) {
        return stackService.getStacksByModelStartingWith(modelPrefix);
    }
}