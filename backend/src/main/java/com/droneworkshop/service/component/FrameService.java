package com.droneworkshop.service.component;

import com.droneworkshop.dto.filter.FrameFilterDto;
import com.droneworkshop.model.component.Frame;
import com.droneworkshop.repository.component.FrameRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.droneworkshop.specification.FrameSpec.buildSpecification;

@Service
public class FrameService {
    private final FrameRepository frameRepository;

    public FrameService(FrameRepository frameRepository) {
        this.frameRepository = frameRepository;
    }

    public Frame getFrameById(int id) {
        return frameRepository.findById(id).orElse(null);
    }

    public Page<Frame> getFilteredFrames(FrameFilterDto filter, Pageable pageable) {
        Specification<Frame> spec = buildSpecification(filter);
        return frameRepository.findAll(spec, pageable);
    }

}