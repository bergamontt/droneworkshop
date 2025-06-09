package com.droneworkshop.dto.request;

import lombok.Data;

@Data
public class CommentRequestDto {
    private String username;
    private Integer publicationId;
    private String description;
}