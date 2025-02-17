import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class DiffieHellman {

    private static boolean isPrime(BigInteger n) {
        if (n.compareTo(BigInteger.TWO) < 0) return false;
        if (n.compareTo(BigInteger.TWO) == 0) return true;
        if (n.mod(BigInteger.TWO).equals(BigInteger.ZERO)) return false;
        for (BigInteger i = BigInteger.valueOf(3); i.multiply(i).compareTo(n) <= 0; i = i.add(BigInteger.TWO)) {
            if (n.mod(i).equals(BigInteger.ZERO)) return false;
        }
        return true;
    }

    private static boolean isPrimitiveRoot(BigInteger g, BigInteger p) {
        BigInteger phi = p.subtract(BigInteger.ONE);
        List<BigInteger> factors = getPrimeFactors(phi);

        for (BigInteger factor : factors) {
            BigInteger exponent = phi.divide(factor);
            if (g.modPow(exponent, p).equals(BigInteger.ONE)) {
                return false;
            }
        }
        return true;
    }

    private static List<BigInteger> getPrimeFactors(BigInteger n) {
        List<BigInteger> factors = new ArrayList<>();
        BigInteger i = BigInteger.TWO;
        while (i.multiply(i).compareTo(n) <= 0) {
            if (n.mod(i).equals(BigInteger.ZERO)) {
                factors.add(i);
                while (n.mod(i).equals(BigInteger.ZERO)) {
                    n = n.divide(i);
                }
            }
            i = i.add(BigInteger.ONE);
        }
        if (n.compareTo(BigInteger.ONE) > 0) {
            factors.add(n);
        }
        return factors;
    }

    private static List<BigInteger> suggestPrimitiveRoots(BigInteger p) {
        List<BigInteger> primitiveRoots = new ArrayList<>();
        BigInteger phi = p.subtract(BigInteger.ONE);
        for (BigInteger g = BigInteger.TWO; g.compareTo(p) < 0; g = g.add(BigInteger.ONE)) {
            if (isPrimitiveRoot(g, p)) {
                primitiveRoots.add(g);
                if (primitiveRoots.size() >= 5) {
                    break;
                }
            }
        }
        return primitiveRoots;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        BigInteger P;
        while (true) {
            System.out.print("Enter a prime number (P): ");
            P = new BigInteger(scanner.nextLine());
            if (isPrime(P)) {
                break;
            } else {
                System.out.println("The number is not prime. Please enter a valid prime number.");
            }
        }

        BigInteger G;
        while (true) {
            System.out.print("Enter a base (G): ");
            G = new BigInteger(scanner.nextLine());

            if (isPrimitiveRoot(G, P)) {
                break;
            } else {
                System.out.println("G is not a primitive root of P.");
                List<BigInteger> suggestions = suggestPrimitiveRoots(P);
                System.out.println("Suggestions for G: " + suggestions);
                System.out.println("Please choose another G.");
            }
        }

        System.out.print("Enter Alice's private key (a): ");
        BigInteger a = new BigInteger(scanner.nextLine());

        System.out.print("Enter Bob's private key (b): ");
        BigInteger b = new BigInteger(scanner.nextLine());

        BigInteger A = G.modPow(a, P);
        BigInteger B = G.modPow(b, P);

        BigInteger secretAlice = B.modPow(a, P);
        BigInteger secretBob = A.modPow(b, P);

        System.out.println("\nPublicly Shared Values:");
        System.out.println("P (prime): " + P);
        System.out.println("G (base): " + G);

        System.out.println("\nComputed Public Keys:");
        System.out.println("Alice's public key (A): " + A);
        System.out.println("Bob's public key (B): " + B);

        System.out.println("\nShared Secret:");
        System.out.println("Alice's shared secret: " + secretAlice);
        System.out.println("Bob's shared secret: " + secretBob);

        if (secretAlice.equals(secretBob)) {
            System.out.println("\nSuccess! Both parties have the same shared secret.");
        } else {
            System.out.println("\nError! Shared secrets do not match.");
        }

        scanner.close();
    }
}