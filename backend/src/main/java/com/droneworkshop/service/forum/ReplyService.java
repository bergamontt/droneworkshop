package com.droneworkshop.service.forum;

import com.droneworkshop.dto.filter.ReplyFilterDto;
import com.droneworkshop.model.forum.Reply;
import com.droneworkshop.repository.forum.ReplyRepository;
import com.droneworkshop.service.authentification.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import static com.droneworkshop.specification.ReplySpec.buildSpecification;

@Service
public class ReplyService {
    private final ReplyRepository replyRepository;

    private final UserService userService;

    public ReplyService(ReplyRepository replyRepository, UserService userService) {
        this.replyRepository = replyRepository;
        this.userService = userService;
    }

    public void addReply(Reply reply) {
        if(reply.getPost() == null) {
            throw new RuntimeException("Post does not exist");
        }
        reply.setUser(userService.getCurrentUser());
        replyRepository.save(reply);
    }

    public Reply getReplyById(int id) {
        return replyRepository.findById(id).orElse(null);
    }

    public Page<Reply> getFilteredReplies(ReplyFilterDto filter, Pageable pageable) {
        Specification<Reply> spec = buildSpecification(filter);
        return replyRepository.findAll(ReplyRepository.Specs.orderByTime(spec), pageable);
    }
}