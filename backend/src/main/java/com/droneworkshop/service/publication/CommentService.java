package com.droneworkshop.service.publication;

import com.droneworkshop.dto.request.CommentRequestDto;
import com.droneworkshop.mapper.request.CommentRequestMapper;
import com.droneworkshop.model.publication.Comment;
import com.droneworkshop.repository.publication.CommentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    public Page<Comment> getCommentsByPublicationId(int publicationId, Pageable pageable) {
        return commentRepository.findCommentsByPublicationId(publicationId, pageable);
    }

    public Comment addComment(CommentRequestDto request) {
        Comment comment = CommentRequestMapper.mapRequestToEntity(request);
        return commentRepository.save(comment);
    }

}