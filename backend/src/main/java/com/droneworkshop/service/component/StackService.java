package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Stack;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StackService {
    private final StackService stackService;

    public StackService(StackService stackService) {
        this.stackService = stackService;
    }

    public Stack getStackById(int id) {
        return stackService.getStackById(id);
    }

    public List<Stack> getAllStacks() {
        return stackService.getAllStacks();
    }
}