package com.droneworkshop.controller.forum;

import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.service.forum.ReplyService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReplyController {
    private final ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    @GetMapping(value = "/reply", params = {"postId"})
    public List<Reply> getRepliesByPostId(
            @RequestParam int postId
    ) {
        return replyService.getRepliesByPostId(postId);
    }

    @GetMapping("/reply/{id}")
    public Reply getReplyById(
            @PathVariable int id
    ) {
        return replyService.getReplyById(id);
    }
}