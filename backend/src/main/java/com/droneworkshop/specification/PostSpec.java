package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.PostFilterDto;
import com.droneworkshop.model.forum.Post;
import com.droneworkshop.repository.forum.PostRepository;
import org.springframework.data.jpa.domain.Specification;

public class PostSpec {
    public static Specification<Post> buildSpecification(PostFilterDto filter) {
        Specification<Post> spec = null;

        if (filter.getPostPrefix() != null && !filter.getPostPrefix().isEmpty()) {
            spec = PostRepository.Specs.byPostPrefix(filter.getPostPrefix());
        }

        if (filter.getUsername() != null && !filter.getUsername().isEmpty()) {
            spec = spec == null ? PostRepository.Specs.byUsername(filter.getUsername())
                    : spec.and(PostRepository.Specs.byUsername(filter.getUsername()));
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}