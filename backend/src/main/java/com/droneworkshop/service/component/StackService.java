package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.StackFilterDto;
import com.droneworkshop.model.component.Stack;
import com.droneworkshop.repository.component.StackRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.StackSpec.buildSpecification;

@Service
public class StackService {
    private final StackRepository stackRepository;

    public StackService(StackRepository stackRepository) {
        this.stackRepository = stackRepository;
    }

    public Stack getStackById(int id) {
        return stackRepository.findById(id).orElse(null);
    }

    public Page<Stack> getFilteredStacks(StackFilterDto filter, Pageable pageable) {
        Specification<Stack> spec = buildSpecification(filter);
        return stackRepository.findAll(spec, pageable);
    }

}