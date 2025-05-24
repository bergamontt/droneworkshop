package com.droneworkshop.repository.forum;

import com.droneworkshop.model.forum.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {
}
