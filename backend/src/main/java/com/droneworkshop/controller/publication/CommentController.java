package com.droneworkshop.controller.publication;

import com.droneworkshop.dto.request.CommentRequestDto;
import com.droneworkshop.model.publication.Comment;
import com.droneworkshop.service.publication.CommentService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(value = "/comment")
    public Page<Comment> getCommentsByPublicationId(
            @ModelAttribute Integer publicationId,
            Pageable pageable
    ) {
        return commentService.getCommentsByPublicationId(publicationId, pageable);
    }

    @PostMapping("/comment")
    public Comment createComment(
            @ModelAttribute CommentRequestDto request
    ) {
        return commentService.addComment(request);
    }

}