package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Stack;
import com.droneworkshop.repository.component.StackRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StackService {
    private final StackRepository stackRepository;

    public StackService(StackRepository stackRepository) {
        this.stackRepository = stackRepository;
    }

    public Stack getStackById(int id) {
        return stackRepository.findById(id).orElse(null);
    }

    public Page<Stack> getAllStacks(Pageable pageable) {
        return stackRepository.findAll(pageable);
    }

    public List<Stack> getStacksByModelStartingWith(String modelPrefix) {
        return stackRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}