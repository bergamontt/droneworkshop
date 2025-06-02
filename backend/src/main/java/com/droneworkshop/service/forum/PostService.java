package com.droneworkshop.service.forum;

import com.droneworkshop.dto.filter.PostFilterDto;
import com.droneworkshop.model.forum.Post;
import com.droneworkshop.repository.forum.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import static com.droneworkshop.specification.PostSpec.buildSpecification;

@Service
public class PostService {
    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post getPostById(int id) {
        return postRepository.findById(id).orElse(null);
    }

    public Page<Post> getFilteredPosts(PostFilterDto filter, Pageable pageable) {
        Specification<Post> spec = buildSpecification(filter);
        return postRepository.findAll(PostRepository.Specs.orderByTime(spec), pageable);
    }
}