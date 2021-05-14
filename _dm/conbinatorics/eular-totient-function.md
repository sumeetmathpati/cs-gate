---
title: Eular Totient Function
nav_order: 3
description: "Eular totient function."
child_of: Combinatorics
mathjax: true
---

- Eular totoent of $n$ = $\varphi (n)$ = Count of relatively prime numbers $<= n$
- **Examples,**
    - $\varphi (4) = \|\\{1, 3\\}\| = 2$
    - $\varphi (3) = \|\\{1, 2\\}\| = 2$
    - $\varphi (12) = \|\\{1, 5, 7, 11\\}\| = 4$

# It's a Multiplicative Function

- $\varphi (mn) = \varphi(m) \times \varphi(n)$
    - Iff $m$ and $n$ both are prime numbers.

# Eular Totoent of Prime Number

- $\varphi (p) = (p-1)$
    - If $p$ is prime number.
- **Example,**
    - $\varphi (7) = \|\\{1, 2, 3, 4, 5, 6\\}\|$

# Calculating Eular Totient

## Eular Totient of Multiple of Prime

- Eular totient of $n = {1, 2, ...n} - {Coprimes \ of \ n}$

$\varphi (p^k) = p^k - \frac{p^k}{p}$
{: .w3-center .w3-xlarge}

- Because we have $p^k$ numbers.
- ANd for $p^k$ we will have $\frac{p^k}{p}$ co-primes.
    - Example, 49.
        - $\varphi (49) = 7 = \|\\{1, 7, 14, 21, 28, 35, 42 \\}\|$

## Eular Totient Other Numbers

- One thing to remember if **any positive integer can be represented as product of prime numers with different powers.**
    - I.e. $m = p^a, q^b, r^c, ...$
        - Where $p, q, r...$ are prime numbers.
        - Where $a, b, c...$ are constants $>= 0$.
    - **Example,**
        - $10 = 2^1 \times 5^1$
        - $4 = 2^2$
        - $11 = 11^1$
- Hence if we want to find the the $\varphi (m)$ where $m$ is any positive number,
    - Assume $m = p^a, q^b, r^c$
        - Where $p, q, r$ are prime numbers.
        - Where $a, b, c$ are constants $= 0$.
    - $\varphi (m) = \varphi (p^a, q^b, r^c)$
    - $= (p^a - \frac{p^a}{p}) \times (q^b - \frac{q^b}{q}) \times (r^c - \frac{r^c}{r})$
    - $= [p^a (1 - \frac{1}{p})] \times [q^b (1 - \frac{1}{q})] \times [r^c (1 - \frac{1}{r})]$
    - $= \frac{p^a \times q^b \times r^c \times [p - 1][q - 1][r - 1]}{p \times q \times r}$
    - $= \frac{m \times [p - 1][q - 1][r - 1]}{p \times q \times r}$

## Formula

$\varphi (m) = \frac{m \times [p - 1][q - 1][r - 1]}{p \times q \times r}$
{: .w3-xlarge .w3-center}

- Where $m = p^a, q^b, r^c$
    - Where $p, q, r$ are prime numbers.
    - Where $a, b, c$ are constants $>= 0$.