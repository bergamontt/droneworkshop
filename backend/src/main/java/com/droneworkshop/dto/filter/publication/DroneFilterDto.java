package com.droneworkshop.dto.filter.publication;

import lombok.Data;

@Data
public class DroneFilterDto {
    private String username;
    private String droneNamePrefix;
    private Boolean isPublished;
}