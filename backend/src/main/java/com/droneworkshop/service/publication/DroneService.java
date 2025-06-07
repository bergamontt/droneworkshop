package com.droneworkshop.service.publication;

import com.droneworkshop.dto.request.DroneRequestDto;
import com.droneworkshop.dto.response.DroneResponseDto;
import com.droneworkshop.mapper.request.DroneRequestMapper;
import com.droneworkshop.mapper.response.DroneResponseMapper;
import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.repository.publication.DroneRepository;
import com.droneworkshop.service.authentification.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DroneService {
    private final DroneRepository droneRepository;
    private final DroneRequestMapper droneRequestMapper;

    private final UserService userService;

    public DroneService(
            DroneRepository droneRepository,
            DroneRequestMapper droneRequestMapper,
            UserService userService
    ) {
        this.droneRepository = droneRepository;
        this.droneRequestMapper = droneRequestMapper;
        this.userService = userService;
    }

    public DroneResponseDto getDroneById(Integer id) {
        Drone drone = droneRepository.findById(id).orElse(null);
        return DroneResponseMapper.mapToResponseDTO(drone);
    }

    public Page<DroneResponseDto> getAllDrones(Pageable pageable) {
        return droneRepository.findAll(pageable)
                .map(DroneResponseMapper::mapToResponseDTO);
    }

    public DroneResponseDto createDrone(DroneRequestDto request) {
        Drone drone = new Drone();
        request.setUserId(userService.getCurrentUser().getUsername());
        droneRequestMapper.mapRequestToEntity(request, drone);
        Drone savedDrone = droneRepository.save(drone);
        return DroneResponseMapper.mapToResponseDTO(savedDrone);
    }

}