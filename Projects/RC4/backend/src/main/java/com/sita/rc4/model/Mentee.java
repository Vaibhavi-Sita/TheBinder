package com.sita.rc4.model;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Mentee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String studentId;
    private String gender;
    private String age;
    private String program;
    private String major;
    private String nationality;
    private String languagesSpoken;
    private String hobbiesInterests;
    private String weChat;
    private String instagram;
    private String facebook;
    private String street;
    private String street2;
    private String city;
    private String state;
    private String zipCode;
    private String cellPhone;
    private String homePhone;
    private String email;
    private String psuEmail;
    private String hopeToGain;
    private String biggestConcern;
    private String mentorPreferenceAge;
    private String mentorPreferenceGender;
    private String commentsQuestions;
    private String initialHere;
    private String agreeToTerms;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    // Add getters and setters for all fields
}
