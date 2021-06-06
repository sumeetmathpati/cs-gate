---
title:  "Adders"
description: "Adders half adder full adder tutorial"
child_of: Combinational Logic
nav_order: 1
mathjax: true
---

- An adder is a digital combinational circuit that performs addition of numbers.
- One of the application of combinational circuit is Arithmetic operations (arithmetic operations on two binary numbers example straight binary numbers, BCD numbers, Excess-three numbers etc.).

Note that arithmetic operations ane different from logic operations. Example in logic operation **1+1 = 1**; but in arithmetic operations **1+1 = 10.**
{: .info}

- The combination circuit that adds two single bits is called **half adder**; and the one that performs addition on three bits (two single bits and one carry) is called **full adder**.
    - Two half adders can be used to create full adder.

Note that a single adder can add only two (or 3 in case of full adder) bits, so if we want to add a number with *n* binary digits, we have to use n adders. <br>We shall see how to do that in coming chapters.
{: .info}

# Why Two Different Adders?

- We can add two bits at LSB with half adder.
- But while adding two bits, we can have carry from lower significant digit to higher significant digit.
- Hence in higher significant digit we need to add three bits: two bits at that position and one bit of carry from lower digit.
- Therefore at higher significant we may require full adder.
- Hence, we can't add complete number with half adders; to add complete binary number, we require full adders connected to each other.

# Half Adder

- Half adder **adds two bits.**
- The circuit has **two inputs** and **two outputs.**
    - Inputs are aunged **(x)** and addednt **(y).**
    - Outputs are sum **(S)** and carry **(C).**

## Truth Table

![Half Adder Truth Table]({{ site.baseurl }}/assets/images/dl-half-adder-truth-table.png)

- The simplified boolean expression can be obtained by looking at the truth table (or you can solve using K-map).
    - $S = x'y + y'x$
    - $C = xy$

***

## Circuit Diagram

![Half Adder Circuit Diagram]({{ site.baseurl }}/assets/images/dl-half-adder-circuit.png)

# Full Adder

- The problem in half adder is; if we get carry bit from lower digit, we can't add because then there will be 3 bits to add.
    - I.e. if we are adding two nth order bits, a full adder can also add carry from the addition of the digits at (n-1)th place.
- Full adder **adds three bits.**
- The circuit has **three inputs** and **two outputs.**
    - Inputs are **x**, **y**, and **z**.
        - x and y are two bits to be addes.
        - z is carry from lower significant position.
    - Outputs are sum bit **(S)** and carry bit **(C).**
        - We only need two bits; because the output of adding two three bits is within range 0 to 3 and to represent those three bits are enough.

## Truth Table

![Full Adder Truth Table]({{ site.baseurl }}/assets/images/dl-full-adder-truth-table.png)

***

## Simplified Expression

- When all the inputs are 0, the output is 0.
- The S output is 1; when one or all three inputs are 1.
- The C output is 1; when all the inputs are 1.

### K-map

![Half Adder Circuit Diagram]({{ site.baseurl }}/assets/images/dl-full-adder-expression.png)

- We've used k-maps for simplification.
- The implementation used the following expressions:
    - $S = x'y'z + x'yz' + xy'z' + xyz$
        - $= x'(y'z + yz') + x(y'z' + yz)$
        - $= x'(y ⊕ z) + x(y ⊙ z)$
        - $= x'(y ⊕ z) + x(y ⊕ z)'$
        - $= x ⊕ y ⊕ z$
    - $C = xy + xz + yz$

***

## Circuit Diagram

![Full Adder Circuit Diagram]({{ site.baseurl }}/assets/images/dl-full-adder-circuit.png)

- Full adder using two half adders.

![Full Adder With Two Half Adders]({{ site.baseurl }}/assets/images/dl-full-adder-with-half-adder-circuit.png)

# Adder Implementations

## 4-bit Ripple Carry Adder

- It's a combinational circuit which can add two, 4-bit binary numbers.

### Structure

- To implement this, we have to connect **4 full adders** in cascading fasion. 
- We have three input pins to each full adder.
- Each bit of number passed to the each full adder.
    - Bits of same significane position in both numbers should be passed to the same full adder
    - Now each adder has one input unconnected.
- The carry output of full adder which has lesser significant bits as input is connected to the input pin of full adder which has higher significance bit as an input.
- A first full adder won't be having any input to it's carry input.

![4 Bit Ripple Carry Adder]({{ site.baseurl }}/assets/images/dl-4-bit-ripple-carry-adder.png)

### Disadvantages

- It can **only perform addition operation,** i.e. we cant perform operation like (a + (-b)) = (a - b).
- **It has carry propogation delay.**
    - Until the previous adder calculate the carry, the next adder can't calculate the result.
    - Hence to get the correct result all the adders must calculate the result one by one.
    - Hence if each adder performs one operation in one clock, we will require n clocks to perform addition of n bit number.