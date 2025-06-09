package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    Page<Comment> findCommentsByPublicationId(int publicationId, Pageable pageable);
}