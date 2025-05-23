package com.droneworkshop.model.tutorial;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Tutorial_category")
public class TutorialCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categoryId;

    @Column(nullable = false, length = 24)
    private String categoryName;

    @Column(nullable = false, length = 100)
    private String description;
}
