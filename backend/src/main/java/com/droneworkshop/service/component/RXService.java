package com.droneworkshop.service.component;

import com.droneworkshop.model.component.RX;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RXService {
    private final RXService rxService;

    public RXService(RXService rxService) {
        this.rxService = rxService;
    }

    public RX getRXById(int id) {
        return rxService.getRXById(id);
    }

    public List<RX> getAllRXs() {
        return rxService.getAllRXs();
    }
}