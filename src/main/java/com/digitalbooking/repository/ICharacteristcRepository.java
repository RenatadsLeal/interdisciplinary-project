package com.digitalbooking.repository;

import com.digitalbooking.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICharacteristcRepository extends JpaRepository<Image, Integer> {
}
