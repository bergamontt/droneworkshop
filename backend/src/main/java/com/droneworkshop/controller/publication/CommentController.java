package com.droneworkshop.controller.publication;

import com.droneworkshop.dto.filter.publication.CommentFilterDto;
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
            @ModelAttribute CommentFilterDto filter,
            Pageable pageable
    ) {
        return commentService.getCommentsByPublicationId(filter, pageable);
    }

    @PostMapping("/comment")
    public void createComment(
            @RequestBody CommentRequestDto request
    ) {
        System.out.println("Received CommentRequestDto: " + request);
        commentService.addComment(request);
    }

    @DeleteMapping("/comment/{id}")
    public void deleteCommentById(
            @PathVariable int id
    ) {
        commentService.deleteCommentById(id);
    }
}