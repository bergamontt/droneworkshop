package com.droneworkshop.dto.filter;

import lombok.Data;

import java.util.List;

@Data
public class CameraFilterDto {
    private Integer minPrice;
    private Integer maxPrice;
    private String modelPrefix;
    private List<String> manufacturerNames;
    private List<String> distributorNames;
}