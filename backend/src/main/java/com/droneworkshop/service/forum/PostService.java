package com.droneworkshop.service.forum;

import com.droneworkshop.dto.filter.forum.PostFilterDto;
import com.droneworkshop.model.forum.Post;
import com.droneworkshop.repository.forum.PostRepository;
import com.droneworkshop.service.authentification.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import static com.droneworkshop.specification.forum.PostSpec.buildSpecification;

@Service
public class PostService {
    private final PostRepository postRepository;

    private final UserService userService;

    public PostService(PostRepository postRepository, UserService userService) {
        this.postRepository = postRepository;
        this.userService = userService;
    }

    public int addPost(Post post) {
        post.setUser(userService.getCurrentUser());
        post.setTopicLowercase(post.getTopic().toLowerCase());
        postRepository.save(post);
        return post.getPostId();
    }

    public Post getPostById(int id) {
        return postRepository.findById(id).orElse(null);
    }

    public Page<Post> getFilteredPosts(PostFilterDto filter, Pageable pageable) {
        Specification<Post> spec = buildSpecification(filter);
        return postRepository.findAll(PostRepository.Specs.orderByTime(spec), pageable);
    }
}