package com.droneworkshop.service.component;

import com.droneworkshop.model.component.Frame;
import com.droneworkshop.repository.component.FrameRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FrameService {
    private final FrameRepository frameRepository;

    public FrameService(FrameRepository frameRepository) {
        this.frameRepository = frameRepository;
    }

    public Frame getFrameById(int id) {
        return frameRepository.findById(id).orElse(null);
    }

    public List<Frame> getAllFrames() {
        return frameRepository.findAll();
    }

    public List<Frame> getFramesByModelStartingWith(String modelPrefix) {
        return frameRepository.findByModelStartingWithIgnoreCase(modelPrefix);
    }
}