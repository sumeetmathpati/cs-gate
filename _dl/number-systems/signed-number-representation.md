---
title:  "Signed Number Representation"
description: "Signed Number Representation"
child_of: Number Systems
nav_order: 3
mathjax: true
---

- We've seen in previous article how to represent numbers in binary, but what about negetive numvers? Here we shall see how to represent those numbers.
- In decimal system we use **+** and **-** sign to represent positive and negetive numbers respectively. Representation of these numbers is known as **signed numbers.**
- As we know digital devices uses binary number system in which we only have 0s and 1s; to represented sign of number, we have to use the same.
- There are various methods to represent signed numbers; different techniques have different advantages and disadvantages.

# Sign-Magnitude Representation

- In this technique, to represent sign of number we have to use an extra digit (or bit) called **sign bit**; and it's placed at the **MSB.**
    - **0 is used to represent positive number**, and
    - **1 is used to represent negetive number.**
- For **example**
    - To represent $5_{10}$ in binary we use 4-bit binary number $0101_2$
        - The 0 at msb represent it's a positive number.
        - It's magnitude (or value) is $$101_2 = 5_{10}$$
    - To represent $-5_{10}$ in binary we use 4-bit binary number $1101_2$.
        - The 1 at msb represent it's a positive number.
- Some sign magnitude representation:

| Binary | Decimal |
|--------|---------|
| 0000 | 0 |
| 0001 | 1 |
| 0010 | 2 |
| 0011 | 3 |
| 0100 | 4 |
| 0101 | 5 |
| 0110 | 6 |
| 0111 | 7 |
| 1000 | -0 |
| 1001 | -1 |
| 1010 | -2 |
| 1011 | -3 |
| 1100 | -4 |
| 1101 | -5 |
| 1110 | -6 |
| 1111 | -7 |

## Range

- As we have 4 bits; we have 16 numbers.
- The range is:
    - $-2^{n-1} + 1$ to $2^{n-1} - 1$
- But 0 is accuring twice.

## Problem

- We are using two different representations for representing zero, i.e. wasting 1 number.

# 1's Complement

- In binary number system is we replace 1s with 0s and 0s with 1s in a number then the new and previous numbers are **1's complement** of teach other.
- It the one number is positive; then other number will be negetive and vice versa.
- Like sign magnitude representation; in this method also
    - **0 is used to represent positive number**, and
    - **1 is used to represent negetive number.**
- **Example:**
    - $0101_2$ is $$+5_{10}$$
        - $1010_2$ is $$-5_{10}$$ in this representation.
- Some 1's complement representation:

| Binary | Decimal |
|--------|---------|
| 0000 | 0 |
| 0001 | 1 |
| 0010 | 2 |
| 0011 | 3 |
| 0100 | 4 |
| 0101 | 5 |
| 0110 | 6 |
| 0111 | 7 |
| 1000 | -7 |
| 1001 | -6 |
| 1010 | -5 |
| 1011 | -4 |
| 1100 | -3 |
| 1101 | -2 |
| 1110 | -1 |
| 1111 | -0 |

## Range

- As we have 4 bits; we have 16 numbers.
- The range is:
    - $-2^{n-1} + 1$ to $2^{n-1} - 1$
- But 0 is accuring twice.

## Problem

- Same as sign magnitude representation, we are using two different representations for representing zero, i.e. wasting 1 number.

# 2's Complement

- If we add 1 in 1's complement; we will get 2's complement.
- Exmaple, the 2's complement of $0101$ is:
    - $= 1010 + 1$
    - $= 1011$
- Like sign magnitude representation; in this method also
    - **0 is used to represent positive number**, and
    - **1 is used to represent negetive number.**
- This representation **removes the problem of multiple representation for 0.**
- Some examples of 2's complement numbers:

| Binary | Decimal |
|--------|---------|
| 0000 | 0 |
| 0001 | 1 |
| 0010 | 2 |
| 0011 | 3 |
| 0100 | 4 |
| 0101 | 5 |
| 0110 | 6 |
| 0111 | 7 |
| 1000 | -8 |
| 1001 | -7 |
| 1010 | -6 |
| 1011 | -5 |
| 1100 | -4 |
| 1101 | -3 |
| 1110 | -2 |
| 1111 | -1 |

## Range

- As we have 4 bits; we have 16 numbers.
- The range is:
    - $-2^{n-1}$ to $2^{n-1} - 1$
