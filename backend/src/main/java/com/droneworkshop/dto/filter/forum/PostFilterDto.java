package com.droneworkshop.dto.filter.forum;

import lombok.Data;

@Data
public class PostFilterDto {
    private String postPrefix;
    private String username;
}