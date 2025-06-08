package com.droneworkshop.mapper.request;

import com.droneworkshop.model.publication.Drone;
import com.droneworkshop.model.publication.Publication;

import java.sql.Timestamp;

public class PublicationRequestMapper {

    public static Publication mapRequestToEntity(Drone drone) {
        Publication publication = new Publication();
        publication.setDrone(drone);
        publication.setNumOfViews(0);
        publication.setCreatedAt(new Timestamp(System.currentTimeMillis()));
        return publication;
    }

}