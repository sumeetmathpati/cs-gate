---
title:  "Binary Codes"
description: "Binary codes."
child_of: Number Systems
nav_order: 8
mathjax: true
---

- Digital devices use (store and perform operations) data in binary format.
- Various coding techniques used to represent data. Until now we've seen binary numbers represented in straight binary digits.
- Coding can be done due to ease of use or ease of transmission or may be any other reasons.
- Data encoded in a format is only useful when we know the format in which it's encoded.

# BCD

- Also called 8-4-2-1 codes.
- Here we use 4 bits.
- **Range:**
    - 0 to 9 in decimal.
- We have 16 representations, but we are only using 10 numbers; 6 numbers we are wasting.
- On overflow, we add +6 to the result.
	- 7 in BCD is 0111 and 6 in BCS is 0110.
	- 7 + 6 in BCD is 0111 + 0110 = 1101 which is not in BCD format.
	- 1101 + 0110 (6) = 10011. 
	- Make group of 4 bits from right,  we get 1 and 0011 which is 1 and 3 in BCD. Hence 7 + 6 = 13.

# Excess 3 Codes

- 4 bit **unweighted code.**
- **BCD + 0011** gives escess 3 code.

# Grey Codes

- **Unweighted code**
- Also called unit distance code, cyclic code.
- Every consecutive decimal digit have 1 bit change in it's binary representation.
    - It's also called minimum error code because error between any two digits is single bit.

***

|Decimal|BCD|Excess-3|Grey Codes|
|-|-|-|-|
|0|0000|0011|0000|
|1|0001|0100|0001|
|2|0010|0101|0011|
|3|0011|0110|0010|
|4|0100|0111|0110|
|5|0101|1000|0111|
|6|0110|1001|0101|
|7|0111|1010|0100|
|8|1000|1011|1100|
|9|1001|1100|1101|