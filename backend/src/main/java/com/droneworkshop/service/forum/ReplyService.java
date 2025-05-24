package com.droneworkshop.service.forum;

import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.repository.forum.ReplyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReplyService {
    private final ReplyRepository replyRepository;

    public ReplyService(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    public Reply getReplyById(int id) {
        return replyRepository.findById(id).orElse(null);
    }

    public List<Reply> getAllReplies() {
        return replyRepository.findAll();
    }
}