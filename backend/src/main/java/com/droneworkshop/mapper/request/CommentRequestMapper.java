package com.droneworkshop.mapper.request;

import com.droneworkshop.dto.request.CommentRequestDto;
import com.droneworkshop.model.publication.Comment;

import java.sql.Timestamp;

public class CommentRequestMapper {

    public static Comment mapRequestToEntity(CommentRequestDto request) {
        Comment comment = new Comment();
        comment.setPublicationId(request.getPublicationId());
        comment.setUsername(request.getUsername());
        comment.setDescription(request.getDescription());
        comment.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return comment;
    }

}