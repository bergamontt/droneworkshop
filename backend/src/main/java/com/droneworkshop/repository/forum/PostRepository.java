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
    }
}