package com.sita.rc4.controller;

import com.sita.rc4.service.RC4Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rc4")
public class RC4Controller {

    @Autowired
    private RC4Service rc4Service;

    @PostMapping("/encrypt")
    public String encrypt(@RequestParam String plaintext, @RequestParam String key) {
        return rc4Service.encrypt(plaintext, key);
    }

    @PostMapping("/decrypt")
    public String decrypt(@RequestParam String ciphertext, @RequestParam String key) {
        return rc4Service.decrypt(ciphertext, key);
    }
}