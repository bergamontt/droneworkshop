package com.droneworkshop.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class DroneRequestDto {
    private String droneName;
    private MultipartFile photo;
    private String userId;
    private Integer frameId;
    private Integer propellerId;
    private Integer cameraId;
    private Integer vtxId;
    private Integer rxId;
    private Integer vtxAntennaId;
    private Integer rxAntennaId;
    private Integer batteryId;
    private Integer motorId;
    private Integer stackId;
}
