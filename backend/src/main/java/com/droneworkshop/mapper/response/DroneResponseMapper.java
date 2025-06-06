package com.droneworkshop.mapper.response;

import com.droneworkshop.dto.response.DroneResponseDto;
import com.droneworkshop.model.publication.Drone;

import java.util.Base64;

public class DroneResponseMapper {

    public static DroneResponseDto mapToResponseDTO(Drone drone) {
        if(drone == null) return null;

        DroneResponseDto dto = new DroneResponseDto();
        dto.setDroneId(drone.getDroneId());
        dto.setDroneName(drone.getDroneName());
        dto.setUser(drone.getUser());
        dto.setFrame(drone.getFrame());
        dto.setPropeller(drone.getPropeller());
        dto.setCamera(drone.getCamera());
        dto.setVtx(drone.getVtx());
        dto.setRx(drone.getRx());
        dto.setVtxAntenna(drone.getVtxAntenna());
        dto.setRxAntenna(drone.getRxAntenna());
        dto.setBattery(drone.getBattery());
        dto.setMotor(drone.getMotor());
        dto.setStack(drone.getStack());

        if (drone.getPhoto() != null) {
            String base64Image = Base64.getEncoder().encodeToString(drone.getPhoto());
            dto.setPhotoBase64("data:image/jpeg;base64," + base64Image);
        }

        return dto;
    }

}