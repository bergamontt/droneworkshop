package com.droneworkshop.controller.publication;

import com.droneworkshop.model.publication.Comment;
import com.droneworkshop.service.publication.CommentService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/comment/{id}")
    public Comment getCommentById(
            @PathVariable Integer id
    ) {
        return commentService.getCommentById(id);
    }
}