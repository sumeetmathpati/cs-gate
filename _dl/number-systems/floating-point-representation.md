---
title:  "Floating Point Representation"
description: "Floating Point Representation"
child_of: Number Systems
nav_order: 4
mathjax: true
---

- The IEEE 754 is a standard for floating point representation.
- A floating-point number (or real number) can represent a **very large** (1.23×10^88) or a **very small** (1.23×10^-88) value. - It could also represent **very large negative number** (-1.23×10^88) and **very small negative number** (-1.23×10^88), as well as zero.
    - Decimal numbers use radix of 10 (F×10^E); while binary numbers use radix of 2 (F×2^E).

![Floating Point Representation]({{ site.baseurl }}/assets/images/dl-floating-point-representation-number-line.png)

- A floating-point number is typically expressed in the scientific notation, with a **fraction or mantissa (F)**, and an **exponent (E)** of a certain **radix (r)**, in the form of **F×r^E.**
    - Decimal numbers use radix of 10 (F×10^E); while binary numbers use radix of 2 (F×2^E).
- Representation of floating point number is not unique. For example, the number 55.66 can be represented as 5.566×10^1, 0.5566×10^2, 0.05566×10^3, and so on. 
- We need to **normalize** the mantissa, i.e we **keep only a single non-zero digit before the radix point.** 
    - For example, decimal number 123.4567 can be normalized as 1.234567×10^2; 
    - Binary number 1010.1011B can be normalized as 1.0101011B×2^3.

It is important to note that floating-point numbers suffer from loss of precision when represented with a fixed number of bits (e.g., 32-bit or 64-bit). This is because there are infinite number of real numbers (even within a small range of says 0.0 to 0.1). On the other hand, a n-bit binary pattern can represent a finite 2^n distinct numbers. Hence, not all the real numbers can be represented. The nearest approximation will be used instead, resulted in loss of accuracy.
{: .note}

- There are two representation schemes: 
    - **32-bit single-precision**, and 
    - **64-bit double-precision.**

# 32-bit Single-Precision Floating-Point Numbers

- In 32-bit single-precision floating-point representation:
    - The most significant bit is the sign bit (S), with 0 for positive numbers and 1 for negative numbers.
    - The following 8 bits represent exponent (E).
    - The remaining 23 bits represents mantissa (F).

![32 Bit Single Precision Floating Point Representation]({{ site.baseurl }}/assets/images/dl-32-bit-floating-point-representation.png)

- Lets take an example, suppose the binary pattern: $1 1000 0001 011 0000 0000 0000 0000 0000$, then
    - Sign bit: $1$, hence the number is **negetive.**
    - Exponent: $1000 0001$, and
    - Mantissa: $011 0000 0000 0000 0000 0000$
    - In the normalized form, the actual fraction is normalized with an implicit leading 1 in the form of 1.M . 
        - In this example, the actual fraction is 1.011 0000 0000 0000 0000 0000 = $1 + 1×2^{-2} + 1×2^{-3} = 1.375_{10}$.