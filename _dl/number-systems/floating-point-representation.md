---
title:  "Floating Point Representation"
description: "Floating Point Representation"
child_of: Number Systems
nav_order: 4
mathjax: true
---

- The IEEE 754 is a standard for floating point representation.
- A floating-point number (or real number) can represent a 
    - **very large positive numver** (1.23×10^88),
    - **very small positive number** (1.23×10^-88), 
    - **very large negative number** (-1.23×10^88), 
    - **very small negative number** (-1.23×10^88), 
    - as well as zero.

![Floating Point Representation]({{ site.baseurl }}/assets/images/dl-floating-point-representation-number-line.png)

- A floating-point number is typically expressed in the scientific notation, with a **fraction or mantissa (F)**, and an **exponent (E)** of a certain **radix (r)**, in the form of **F×r^E.**
    - Decimal numbers use radix of 10 (F×10^E); while binary numbers use radix of 2 (F×2^E).
- Representation of floating point number is not unique. For example, the number 55.66 can be represented as 5.566×10^1, 0.5566×10^2, 0.05566×10^3, and so on. 
- We need to **normalize** the mantissa, i.e we **keep only a single non-zero digit before the radix point.** 
    - For example, decimal number 123.4567 can be normalized as 1.234567×10^2; 
    - Binary number 1010.1011B can be normalized as 1.0101011B×2^3.

It is important to note that floating-point numbers suffer from loss of precision when represented with a fixed number of bits (e.g., 32-bit or 64-bit). This is because there are infinite number of real numbers (even within a small range of says 0.0 to 0.1). On the other hand, a n-bit binary pattern can represent a finite 2^n distinct numbers. Hence, not all the real numbers can be represented. The nearest approximation will be used instead, resulted in loss of accuracy.
{: .note}

- There are two commcon representation schemes: 
    - **32-bit single-precision**, and 
    - **64-bit double-precision.**

# Single-Precision Floating-Point Numbers

- In 32-bit single-precision floating-point representation:
    - The most significant bit is the sign bit (S), with 0 for positive numbers and 1 for negative numbers.
    - The following 8 bits represent exponent (E).
    - The remaining 23 bits represents mantissa (F).

![32 Bit Single Precision Floating Point Representation]({{ site.baseurl }}/assets/images/dl-32-bit-floating-point-representation.png)

## Note

|Sign(1)|Exponent(8)|Mantissa(23)|Value|
|-|-|-|-|
|0|00...0(E=0)|00...0(M=0)|0|
|1|00...0(E=0)|00...0(M=0)|-0|
|0|11...1(E=255)|00...0(M=0)|+Infinity|
|1|11...1(E=255)|00...0(M=0)|-Infinity|
|0/1|1<=E<=254|XX...X(M!=0)|Implicit normalized <br> number|
|0/1|00...0(E=0)|XX...X(M!=0)|Fractional number|
|0/1|11...1(E=255)|XX...X(M!=0)|Not valid number. <br> E=255 is reserved for infinity.|

## Example

- Suppose we have a number *-40.1*.
- The number is negetive, therefore the sign bit will be 1.
- *40.1* in binary = 101000.0001100110011... (0011 is recurring).
- After normalization it will become 1.010000001100110011...* 2^5

|1|Exponent|01000000110011001100110|

- Now, our true exponent is *5*.
    - But the biased exponent will be *5+127 = 132*. (Because BE = $2^{n-1} - 1$. -1 because 255 is reserved for the infinity.)

|1|10000100|01000000110011001100110|


