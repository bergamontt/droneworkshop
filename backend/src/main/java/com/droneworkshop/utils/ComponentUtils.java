package com.droneworkshop.utils;

import com.droneworkshop.model.component.Distributor;

import java.util.List;
import java.util.Objects;

public class ComponentUtils {
    public static Integer findStartingPrice(List<Distributor> distributors) {
        if (distributors == null || distributors.isEmpty()) {
            return null;
        }
        return distributors.stream()
                .map(Distributor::getPrice)
                .filter(Objects::nonNull)
                .min(Integer::compareTo)
                .orElse(null);
    }
}