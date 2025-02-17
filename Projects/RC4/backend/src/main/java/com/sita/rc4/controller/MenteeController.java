package com.sita.rc4.controller;

import com.sita.rc4.model.Mentee;
import com.sita.rc4.repository.MenteeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/mentees")
public class MenteeController {
    @Autowired
    private MenteeRepository menteeRepository;

    @PostMapping
    public Mentee createMentee(@RequestBody Mentee mentee) {
        return menteeRepository.save(mentee);
    }
}