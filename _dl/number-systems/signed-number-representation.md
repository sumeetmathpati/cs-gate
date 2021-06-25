---
title:  "Signed Number Representation"
description: "Signed Number Representation"
child_of: Number Systems
nav_order: 3
mathjax: true
---

- A signed number has two components of information
    - A magnitude or absolute value.
    - A sign of that magnitude example, +ve or -ve.
- In computers; we represent everything (be it text, image, audio, video etc) in binary form. Hence **we represent the sign and it's magnitude also in the binary form.**
- A common convensition is to use 
    - **0 in MSB for +ve numbers.**
    - **1 in MSB for -ve numbers.**

# Sign-Magnitude Representation

- In this technique, to represent sign of number we have to use an extra digit (or bit) called **sign bit**; and it's placed at the **MSB.**
- For **example**
    - To represent $5_{10}$ in binary we use 4-bit binary number $0101_2$
        - The 0 at msb represent it's a positive number.
        - It's magnitude (or value) is $$101_2 = 5_{10}$$
    - To represent $-5_{10}$ in binary we use 4-bit binary number $1101_2$.

- Some numbers in sign magnitude representation:

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

- The range is:
    - $-2^{n-1} + 1$ to $2^{n-1} - 1$

## Advantages

- Easy to write as it's a **weighted code.**

## Problem

- We are using two different representations for representing zero, and hence wasting 1 number.

# Complementes of a Number

- Complements are used to simplify the *subtraction operation* and for *logical operations.*
- There are two types of complements for each base *r* system.
    - The *radix* complement (r's complement)
    - The diminished radix complement (r-1's complement)

## Diminished Radix Complement

- Given that a number *N* in base *r* having *n* digits, the *(r-1)'s* complement of *N* or it's diminised radix complement will be $(r^n - 1) - N$.
- For example, the diminished radix complement can be for
    - Octal number by subtracting each digit from 7.
    - Hexadecimal number by subtracting each digit from 15.
    - Binary number by subtracting each digit from 1.
    - Decimal number by subtracting each digit from 9.
    - And so on...

***

## 1's Complement

- For binary numbers *r = 2* and *r - 1 = 1*, so the complement of *N* is $(2^n - 1) - N$.
- **For example,**
    - N = 4, n = 3
    - Hence -3 
    - $= (2^3 - 1) - 4$ 
    - $= 7_10 - 4_10$
    - $= 3_10$
    - $= 011_2$

One short trick is, replace 1s with 0s and 0s with 1s in a number then the new and previous numbers are **1's complement** of teach other.
{: .info}


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

### Range

- As we have 4 bits; we have 16 numbers.
- The range is:
    - $-2^{n-1} + 1$ to $2^{n-1} - 1$
- But 0 is accuring twice.

### How to Read

- If the number if positive (i.e. MSB is 0) then read as it is.
- If the number if negetive (i.e. MSB is 1) take it's complement and say it's a negetive number.
    - Example, $n = 101_2$
    - $n_c = 010_2 = 2_10$
    - Therefore the numer is -2.

### How to Write

= If a number if +ve; then write it as of the sign magnitude representation.
- If a number is -ve; then take it's complement.

### Problem

- Same as sign magnitude representation, we are using two different representations for representing zero, i.e. wasting 1 number.

***

## 2's Complement

- If we add 1 in 1's complement; we will get 2's complement.
- Exmaple, the 2's complement of $0101$ is:
    - $= 1010 + 1$
    - $= 1011$
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

### How to Read

- If the number if positive (i.e. MSB is 0) then read as it is.
- If a number is -ve; then take subtract 1 from it (so that it will be in 1's complement form) and then take 1's complement and then we say it's a -ve number.

### How to Write

= If a number if +ve; then write it as of the sign magnitude representation.

### Range

- As we have 4 bits; we have 16 numbers.
- The range is:
    - $-2^{n-1}$ to $2^{n-1} - 1$

### Advantages

- No wastage of a number.
- Easy to do arithmetic operations.
- It's weighted code.
Most popular representation.