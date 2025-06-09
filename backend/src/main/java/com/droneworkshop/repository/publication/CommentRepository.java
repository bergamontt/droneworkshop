package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.Comment;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CommentRepository extends JpaRepository<Comment, Integer>, JpaSpecificationExecutor<Comment> {

    interface Specs {
        static Specification<Comment> byPublicationId(Integer publicationId) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                return builder.equal(root.get("publicationId"), publicationId);
            };
        }

        static Specification<Comment> orderByTime(Specification<Comment> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.asc(root.get("createdAt")));
                return spec.toPredicate(root, query, builder);
            };
        }
    }

}