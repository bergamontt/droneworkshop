package com.droneworkshop.controller.forum;

import com.droneworkshop.dto.filter.ReplyFilterDto;
import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.service.forum.ReplyService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
public class ReplyController {
    private final ReplyService replyService;

    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    @GetMapping(value = "/reply")
    public Page<Reply> getAllReplies(@ModelAttribute ReplyFilterDto filter, Pageable pageable
    ) {
        return replyService.getFilteredReplies(filter, pageable);
    }

    @GetMapping("/reply/{id}")
    public Reply getReplyById(
            @PathVariable int id
    ) {
        return replyService.getReplyById(id);
    }
}