package com.droneworkshop.repository.publication;

import com.droneworkshop.model.publication.Publication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicationRepository extends JpaRepository<Publication, Integer> {
}
