package com.droneworkshop.controller.forum;

import com.droneworkshop.dto.filter.forum.PostFilterDto;
import com.droneworkshop.model.forum.Post;
import com.droneworkshop.service.forum.PostService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/post")
    public int addPost(@RequestBody Post post) {
        return postService.addPost(post);
    }

    @GetMapping("/post")
    public Page<Post> getAllPosts(@ModelAttribute PostFilterDto filter, Pageable pageable) {
        return postService.getFilteredPosts(filter, pageable);
    }

    @GetMapping("post/{id}")
    public Post getPostById(
            @PathVariable int id
    ) {
        return postService.getPostById(id);
    }
}