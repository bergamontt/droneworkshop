package com.droneworkshop.dto.filter.model;

import lombok.Data;

import java.util.List;

@Data
public class MotorFilterDto {
    private Integer minPrice;
    private Integer maxPrice;
    private String modelPrefix;
    private List<String> manufacturerNames;
    private List<String> distributorNames;
}