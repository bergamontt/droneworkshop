package com.droneworkshop.service.publication;

import com.droneworkshop.dto.filter.publication.CommentFilterDto;
import com.droneworkshop.dto.request.CommentRequestDto;
import com.droneworkshop.mapper.request.CommentRequestMapper;
import com.droneworkshop.model.authentification.User;
import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.model.publication.Comment;
import com.droneworkshop.repository.publication.CommentRepository;
import com.droneworkshop.service.authentification.UserService;
import com.droneworkshop.specification.publication.CommentSpec;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final UserService userService;

    public CommentService(CommentRepository commentRepository, UserService userService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
    }

    public Comment getCommentById(int id) {
        return commentRepository.findById(id).orElse(null);
    }

    public Page<Comment> getCommentsByPublicationId(CommentFilterDto filter, Pageable pageable) {
        Specification<Comment> spec = CommentSpec.buildSpecification(filter);
        return commentRepository.findAll(CommentRepository.Specs.orderByTime(spec), pageable);
    }

    public void addComment(CommentRequestDto request) {
        Comment comment = CommentRequestMapper.mapRequestToEntity(request);
        commentRepository.save(comment);
    }

    public void deleteCommentById(int id) {
        User user = userService.getCurrentUser();
        Comment comment = commentRepository.findById(id).orElse(null);
        assert comment != null;
        assert comment.getUsername().equals(user.getUsername());
        commentRepository.delete(comment);
    }
}