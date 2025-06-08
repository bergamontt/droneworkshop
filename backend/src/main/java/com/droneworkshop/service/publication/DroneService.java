package com.droneworkshop.service.publication;

import com.droneworkshop.dto.filter.publication.DroneFilterDto;
import com.droneworkshop.dto.request.DroneRequestDto;
import com.droneworkshop.dto.response.DroneResponseDto;
import com.droneworkshop.mapper.request.DroneRequestMapper;
import com.droneworkshop.mapper.response.DroneResponseMapper;
import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.repository.publication.DroneRepository;
import com.droneworkshop.repository.publication.PublicationRepository;
import com.droneworkshop.service.authentification.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import static com.droneworkshop.specification.publication.DroneSpec.buildSpecification;

@Service
public class DroneService {
    private final DroneRepository droneRepository;
    private final DroneRequestMapper droneRequestMapper;
    private final PublicationRepository publicationRepository;
    private final UserService userService;

    public DroneService(
            DroneRepository droneRepository,
            DroneRequestMapper droneRequestMapper,
            UserService userService,
            PublicationRepository publicationRepository
    ) {
        this.droneRepository = droneRepository;
        this.droneRequestMapper = droneRequestMapper;
        this.userService = userService;
        this.publicationRepository = publicationRepository;
    }

    public DroneResponseDto getDroneById(Integer id) {
        Drone drone = droneRepository.findById(id).orElse(null);
        if (drone == null) {
            return null;
        }
        DroneResponseDto dto = DroneResponseMapper.mapToResponseDTO(drone);
        dto.setPublished(publicationRepository.existsByDroneDroneId(drone.getDroneId()));
        return dto;
    }

    public Page<DroneResponseDto> getAllDrones(DroneFilterDto filter, Pageable pageable) {
        Specification<Drone> spec = buildSpecification(filter);
        return droneRepository.findAll(DroneRepository.Specs.orderByDroneName(spec), pageable)
                .map(drone -> {
                    DroneResponseDto dto = DroneResponseMapper.mapToResponseDTO(drone);
                    dto.setPublished(publicationRepository.existsByDroneDroneId(drone.getDroneId()));
                    return dto;
                });
    }

    public DroneResponseDto createDrone(DroneRequestDto request) {
        Drone drone = new Drone();
        request.setUserId(userService.getCurrentUser().getUsername());
        droneRequestMapper.mapRequestToEntity(request, drone);
        Drone savedDrone = droneRepository.save(drone);
        DroneResponseDto dto = DroneResponseMapper.mapToResponseDTO(savedDrone);
        dto.setPublished(false);
        return dto;
    }

}