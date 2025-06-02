package com.droneworkshop.repository.forum;

import com.droneworkshop.model.forum.Reply;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ReplyRepository extends JpaRepository<Reply, Integer>, JpaSpecificationExecutor<Reply> {
    interface Specs {
        static Specification<Reply> byPostId(Integer postId) {
            return (root, query, builder) -> {
                assert query != null;
                query.distinct(true);
                return builder.equal(root.get("post").get("postId"), postId);
            };
        }

        static Specification<Reply> orderByTime(Specification<Reply> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.asc(root.get("createdAt")));
                return spec.toPredicate(root, query, builder);
            };
        }
    }
}