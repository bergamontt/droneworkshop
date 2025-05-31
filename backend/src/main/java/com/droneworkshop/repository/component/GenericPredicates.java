package com.droneworkshop.repository.component;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;

public class GenericPredicates {
    public static Predicate getPricePredicate(
            Integer minPrice, Integer maxPrice, CriteriaBuilder builder, Path<Integer> price
    ) {
        if (minPrice == null && maxPrice == null) {
            return builder.conjunction();
        }
        if (minPrice != null && maxPrice != null) {
            return builder.between(price, minPrice, maxPrice);
        }
        if (minPrice != null) {
            return builder.greaterThanOrEqualTo(price, minPrice);
        }
        return builder.lessThanOrEqualTo(price, maxPrice);
    }
}