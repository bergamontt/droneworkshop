package com.droneworkshop.controller.forum;

import com.droneworkshop.dto.filter.forum.ReplyFilterDto;
import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.service.forum.ReplyService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reply")
public class ReplyController {
    private final ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    @PostMapping
    public void addReply(@RequestBody Reply reply) {
        replyService.addReply(reply);
    }

    @GetMapping
    public Page<Reply> getAllReplies(@ModelAttribute ReplyFilterDto filter, Pageable pageable
    ) {
        return replyService.getFilteredReplies(filter, pageable);
    }

    @GetMapping("/{id}")
    public Reply getReplyById(
            @PathVariable int id
    ) {
        return replyService.getReplyById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReplyById(
            @PathVariable int id
    ) {
        replyService.deleteReplyById(id);
    }
}