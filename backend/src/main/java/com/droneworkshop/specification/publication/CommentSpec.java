package com.droneworkshop.specification.publication;

import com.droneworkshop.dto.filter.publication.CommentFilterDto;
import com.droneworkshop.model.publication.Comment;
import com.droneworkshop.repository.publication.CommentRepository;
import org.springframework.data.jpa.domain.Specification;

public class CommentSpec {
    public static Specification<Comment> buildSpecification(CommentFilterDto filter) {
        Specification<Comment> spec = null;

        if (filter.getPublicationId() != null) {
            spec = CommentRepository.Specs.byPublicationId(filter.getPublicationId());
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}