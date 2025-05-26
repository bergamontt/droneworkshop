package com.droneworkshop.model.tutorial;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Tutorial_category")
public class TutorialCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;

    @Column(nullable = false, length = 50)
    private String categoryName;

    @Column(nullable = false, length = 200)
    private String description;
}
