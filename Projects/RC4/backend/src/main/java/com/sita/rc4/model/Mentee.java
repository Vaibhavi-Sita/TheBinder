package com.sita.rc4.model;
import com.sita.rc4.service.StringListConverter;
import jakarta.persistence.*;

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

    @Convert(converter = StringListConverter.class)
    private List<String> maritalStatus; // Stored as JSON string

    private String major;
    private String nationality;
    private String permissionForGroupChat;
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
    private String receiveGLMNotifications;
    private String hopeToGain;
    private String biggestConcern;

    @Convert(converter = StringListConverter.class)
    private List<String> mentorPreferenceAge; // Stored as JSON string

    @Convert(converter = StringListConverter.class)
    private List<String> mentorPreferenceGender; // Stored as JSON string

    private String commentsQuestions;
    private String initialHere;
    private String agreeToTerms;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public String getAge() { return age; }
    public void setAge(String age) { this.age = age; }
    public String getProgram() { return program; }
    public void setProgram(String program) { this.program = program; }
    public List<String> getMaritalStatus() { return maritalStatus; }
    public void setMaritalStatus(List<String> maritalStatus) { this.maritalStatus = maritalStatus; }
    public String getMajor() { return major; }
    public void setMajor(String major) { this.major = major; }
    public String getNationality() { return nationality; }
    public void setNationality(String nationality) { this.nationality = nationality; }
    public String getPermissionForGroupChat() { return permissionForGroupChat; }
    public void setPermissionForGroupChat(String permissionForGroupChat) { this.permissionForGroupChat = permissionForGroupChat; }
    public String getLanguagesSpoken() { return languagesSpoken; }
    public void setLanguagesSpoken(String languagesSpoken) { this.languagesSpoken = languagesSpoken; }
    public String getHobbiesInterests() { return hobbiesInterests; }
    public void setHobbiesInterests(String hobbiesInterests) { this.hobbiesInterests = hobbiesInterests; }
    public String getWeChat() { return weChat; }
    public void setWeChat(String weChat) { this.weChat = weChat; }
    public String getInstagram() { return instagram; }
    public void setInstagram(String instagram) { this.instagram = instagram; }
    public String getFacebook() { return facebook; }
    public void setFacebook(String facebook) { this.facebook = facebook; }
    public String getStreet() { return street; }
    public void setStreet(String street) { this.street = street; }
    public String getStreet2() { return street2; }
    public void setStreet2(String street2) { this.street2 = street2; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    public String getZipCode() { return zipCode; }
    public void setZipCode(String zipCode) { this.zipCode = zipCode; }
    public String getCellPhone() { return cellPhone; }
    public void setCellPhone(String cellPhone) { this.cellPhone = cellPhone; }
    public String getHomePhone() { return homePhone; }
    public void setHomePhone(String homePhone) { this.homePhone = homePhone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPsuEmail() { return psuEmail; }
    public void setPsuEmail(String psuEmail) { this.psuEmail = psuEmail; }
    public String getReceiveGLMNotifications() { return receiveGLMNotifications; }
    public void setReceiveGLMNotifications(String receiveGLMNotifications) { this.receiveGLMNotifications = receiveGLMNotifications; }
    public String getHopeToGain() { return hopeToGain; }
    public void setHopeToGain(String hopeToGain) { this.hopeToGain = hopeToGain; }
    public String getBiggestConcern() { return biggestConcern; }
    public void setBiggestConcern(String biggestConcern) { this.biggestConcern = biggestConcern; }
    public List<String> getMentorPreferenceAge() { return mentorPreferenceAge; }
    public void setMentorPreferenceAge(List<String> mentorPreferenceAge) { this.mentorPreferenceAge = mentorPreferenceAge; }
    public List<String> getMentorPreferenceGender() { return mentorPreferenceGender; }
    public void setMentorPreferenceGender(List<String> mentorPreferenceGender) { this.mentorPreferenceGender = mentorPreferenceGender; }
    public String getCommentsQuestions() { return commentsQuestions; }
    public void setCommentsQuestions(String commentsQuestions) { this.commentsQuestions = commentsQuestions; }
    public String getInitialHere() { return initialHere; }
    public void setInitialHere(String initialHere) { this.initialHere = initialHere; }
    public String getAgreeToTerms() { return agreeToTerms; }
    public void setAgreeToTerms(String agreeToTerms) { this.agreeToTerms = agreeToTerms; }
}