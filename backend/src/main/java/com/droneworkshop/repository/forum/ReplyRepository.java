package com.droneworkshop.repository.forum;

import com.droneworkshop.model.forum.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {
    List<Reply> findRepliesByPostPostId(int postId);
}