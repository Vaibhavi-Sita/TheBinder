package com.sita.rc4.service;

import org.springframework.stereotype.Service;

@Service
public class RC4Service {

    public String encrypt(String plaintext, String key) {
        return rc4(plaintext, key);
    }

    public String decrypt(String ciphertext, String key) {
        return rc4(ciphertext, key);
    }

    private String rc4(String input, String key) {
        int[] S = new int[256];
        int[] T = new int[256];

        // Key scheduling algorithm
        for (int i = 0; i < 256; i++) {
            S[i] = i;
            T[i] = key.charAt(i % key.length());
        }

        int j = 0;
        for (int i = 0; i < 256; i++) {
            j = (j + S[i] + T[i]) % 256;
            // Swap S[i] and S[j]
            int temp = S[i];
            S[i] = S[j];
            S[j] = temp;
        }

        // Pseudo-random generation algorithm
        int i = 0;
        j = 0;
        StringBuilder output = new StringBuilder();
        for (int k = 0; k < input.length(); k++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            // Swap S[i] and S[j]
            int temp = S[i];
            S[i] = S[j];
            S[j] = temp;
            int t = (S[i] + S[j]) % 256;
            int keyStreamByte = S[t];
            output.append((char) (input.charAt(k) ^ keyStreamByte));
        }

        return output.toString();
    }
}