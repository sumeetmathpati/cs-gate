---
title:  "Binary Number System"
description: "Binary Number system tutorial."
child_of: Number Systems
nav_order: 1
mathjax: true
---

- Binary number system has **base 2 and hence uses only two symbols (0 and 1).** these are knows as **bits** (short for binary digits).
- In this number system weight is in power of 2.
- A group of four bits is known as nibble and a group of 8 bits is knwon as byte.

# Representation

- Like all the number systems; binary number is also a weighted sum of (digits + weight at position) for all digits.

## Positional Weights

- Given belo are positional weights for different positions, example for position 3; the weight is 8.

|...|3|2|1|0|-1|-2|...|
|-|-|-|-|-|-|-|-|-|-|-|
|...|2^3 = 8 | 2^2 = 4 | 2^1 = 2 | 2^0 = 1 | 2^{-1} = .5 |2^{-2} = .25|...|

***

## Number Representation

- In the binary number system (like any other number system) number is represented by **sum of (digit at position * weight for position); for all the positions.**
- See the examples in conversion.
- Binary numbers and their corresponding decinal numbers.

|B3|B2|B1|B0||D1|D0|
|-|-|-|-|-|-|-|
|0|0|0|0||0|0|
|0|0|0|1||0|1|
|0|0|1|0||0|2|
|0|0|1|1||0|3|
|0|1|0|0||0|4|
|0|1|0|1||0|5|
|0|1|1|0||0|6|
|0|1|1|1||0|7|
|1|0|0|0||0|8|
|1|0|0|1||0|9|
|1|0|1|0||1|0|
|1|0|1|1||1|1|
|1|1|0|0||1|2|
|1|1|0|1||1|3|
|1|1|1|0||1|4|
|1|1|1|1||1|5|



# Conversion

## Binary to Decimal

- Any binary number can be converted to respective decimal number using the weights assigned to each position (see the second table above).

### Examples

- $11111_2$
    - $(1 \times 2^4) + (1 \times 2^3) + (1 \times 2^2) + (1 \times 2^1) + (1 \times 2^0)$
    - $= 16 + 8 + 4 + 2 + 1$
    - $= 31_{10}$
- $110101_2$
    - $(1 \times 2^5) + (1 \times 2^4) + (0 \times 2^3) + (1 \times 2^2) + (0 \times 2^1) + (1 \times 2^0)$
    - $= 32 + 16 + 0 + 4 + 0 + 1$
    - $= 53_{10}$
- $101101.10101_2$
    - $(1 \times 2^5) + (1 \times 2^4) + (1 \times 2^3) + (1 \times 2^2) + (0 \times 2^1) + (1 \times 2^0) + (1 \times 2^{-1}) + (0 \times 2^{-2}) + (1 \times 2^{-3}) + (0 \times 2^{-4}) + (1 \times 2^{-5})$
    - $32 + 0 + 8 + 4 + 0$
    - $45_{10}$
- $0.10101_2$
    - $(1 \times 2^{-1}) + (0 \times 2^{-2}) + (1 \times 2^{-3}) + (0 \times 2^{-4}) + (1 \times 2^{-5})$
    - $= $.5 + 0 + .125 + 0 + .03125$
    - $0.65625_{10}$

***

***

## Decimal to Binary 

- Any decimal number can be converted to binary number.
- As binary numbers contains only two digits (0 and 1) and decimal contains 10; 
    - **For integers we can to divide the decimal number by 2** so that we only get number 0 and 1 as reminder. And those reminders are our binary digits at the left side of decimal point.
    - **For fractional part, conversion is done by continuous multiplication by 2;** we keep track of integer part of the answer. And those integers are our binary digits at the right side of decimal point.

***

# Binary Arithmetic



