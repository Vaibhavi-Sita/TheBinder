package com.sita.rc4.repository;

import com.sita.rc4.model.Mentee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenteeRepository extends JpaRepository<Mentee, Long> {
}