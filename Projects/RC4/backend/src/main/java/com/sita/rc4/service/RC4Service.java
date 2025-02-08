package com.sita.rc4.service;

import org.springframework.stereotype.Service;
import java.util.Base64;

@Service
public class RC4Service {

    public String encrypt(String plaintext, String key) {
        byte[] encryptedBytes = rc4(plaintext.getBytes(), key.getBytes());
        return Base64.getEncoder().encodeToString(encryptedBytes); // Convert to Base64
    }

    public String decrypt(String base64Ciphertext, String key) {
        byte[] ciphertext = Base64.getDecoder().decode(base64Ciphertext); // Decode from Base64
        byte[] decryptedBytes = rc4(ciphertext, key.getBytes());
        return new String(decryptedBytes);
    }

    private byte[] rc4(byte[] input, byte[] key) {
        int[] S = new int[256];
        int i, j, t;

        // Key scheduling algorithm (KSA)
        for (i = 0; i < 256; i++) {
            S[i] = i;
        }

        j = 0;
        for (i = 0; i < 256; i++) {
            j = (j + S[i] + (key[i % key.length] & 0xFF)) & 0xFF;
            swap(S, i, j);
        }

        // Pseudo-random generation algorithm (PRGA)
        i = j = 0;
        byte[] output = new byte[input.length];

        for (int k = 0; k < input.length; k++) {
            i = (i + 1) & 0xFF;
            j = (j + S[i]) & 0xFF;
            swap(S, i, j);
            t = (S[i] + S[j]) & 0xFF;
            output[k] = (byte) (input[k] ^ S[t]); // XOR with keystream byte
        }

        return output;
    }

    private void swap(int[] S, int i, int j) {
        int temp = S[i];
        S[i] = S[j];
        S[j] = temp;
    }
}
