package com.droneworkshop.controller.forum;

import com.droneworkshop.dto.filter.PostFilterDto;
import com.droneworkshop.model.authentification.User;
import com.droneworkshop.model.forum.Post;
import com.droneworkshop.service.forum.PostService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public int addPost(@RequestBody Post post) {
        return postService.addPost(post);
    }

    @GetMapping
    public Page<Post> getAllPosts(@ModelAttribute PostFilterDto filter, Pageable pageable) {
        return postService.getFilteredPosts(filter, pageable);
    }

    @GetMapping("/{id}")
    public Post getPostById(
            @PathVariable int id
    ) {
        return postService.getPostById(id);
    }
}