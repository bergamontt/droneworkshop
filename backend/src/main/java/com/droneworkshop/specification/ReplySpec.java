package com.droneworkshop.specification;

import com.droneworkshop.dto.filter.ReplyFilterDto;
import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.repository.forum.ReplyRepository;
import org.springframework.data.jpa.domain.Specification;

public class ReplySpec {
    public static Specification<Reply> buildSpecification(ReplyFilterDto filter) {
        Specification<Reply> spec = null;

        if (filter.getPostId() != null) {
            spec = ReplyRepository.Specs.byPostId(filter.getPostId());
        }

        return spec != null ? spec : (root, query, builder) -> builder.conjunction();
    }
}