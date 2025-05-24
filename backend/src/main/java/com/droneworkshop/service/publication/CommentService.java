package com.droneworkshop.service.publication;

import com.droneworkshop.model.publication.Comment;
import com.droneworkshop.repository.publication.CommentRepository;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment getCommentById(int id) {
        return commentRepository.findById(id).orElse(null);
    }
}