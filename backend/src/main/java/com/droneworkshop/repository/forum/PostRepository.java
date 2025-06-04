package com.droneworkshop.repository.forum;

import com.droneworkshop.model.forum.Post;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PostRepository extends JpaRepository<Post, Integer>, JpaSpecificationExecutor<Post> {

    interface Specs {
        static Specification<Post> byPostPrefix(String postPrefix) {
            return (root, query, builder) -> {
                if (postPrefix == null || postPrefix.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.like(root.get("topic"), postPrefix + "%");
            };
        }

        static Specification<Post> byUsername(String username) {
            return (root, query, builder) -> {
                if (username == null || username.isEmpty()) {
                    return builder.conjunction();
                }
                return builder.equal(root.join("user").get("username"), username);
            };
        }

        static Specification<Post> orderByTime(Specification<Post> spec) {
            return (root, query, builder) -> {
                assert query != null;
                query.orderBy(builder.desc(root.get("createdAt")));
                return spec.toPredicate(root, query, builder);
            };
        }
    }
}