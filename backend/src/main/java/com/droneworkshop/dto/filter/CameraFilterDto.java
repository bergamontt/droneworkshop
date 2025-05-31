package com.droneworkshop.dto.filter;

import lombok.Data;

@Data
public class CameraFilterDto {
    private Integer minPrice;
    private Integer maxPrice;
    private String modelPrefix;
}