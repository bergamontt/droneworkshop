package com.droneworkshop.model.tutorial;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer tutorialId;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private TutorialCategory category;

    @Column(nullable = false, length = 100)
    private String tutorialLink;
}
