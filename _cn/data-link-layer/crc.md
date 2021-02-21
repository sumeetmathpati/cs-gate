---
title:  "CRC"
description: "CRC in data link layer."
child_of: Data Link Layer
nav_order: 8
---

- This method used in **data link layer.**
- Stands for cyclic redundancy code.
- The idea here is, **a sequence of redundant bits, called CRC code, is appended to the end of origional data so that the resulting data becomes exactly divisible by a predetermined binary number.**
- This data (with CRC appended) is sent to the reciever.
- Reciever divides the data with the same predetermined number.
- If there is **no reminder, then data is not currupted / error free.**
    - **Else, data has error.**

# CRC Generator

- It's used to generate that predetermined binary string which is used by
    - Sender to create CRC code to append at the end of origional data.
    - Reciever to check if the data is error free by division.

## Representation

- It can be given as a single binary string.
    - Example, 11011
- Or it can be given as generator polynomial
    - Example, $x^4+x^3+x+1 = 11011$

## Properties of Generator

- **If should not be divisible by x.**
    - This condition guarantees that all the burst errors of length equal to the length of polynomial are detected.
- **It should be divisible by x+1.**
    - This condition guarantees that all the burst errors affecting an odd number of bits are detected.

***

# Working

## At Sender's Side

- We **append n bits (at the end) to the origional data where n is one bit less than the number of bits in generator code.**
- We **divide this new string with generator code.**
- The **n bit reminder is called CRC**.
- **Replace last n bit of divident with the n bit CRC.**
- **Send this code to the reciever.**

## At Reciever's Side

- We get n bit CRC appended data from sender.
- **Divide this data with generator string.**
- If the **remonder is 0, then data is not currupted / error free.**
    - **Else, data has error.**

# Example

- The data = 11010010
- Generator polynomial = $x^3+x+1$ = 1011

## At Sender's side

- Append n bits to the data where n is one bit less than the number of bits in generator code.  
    - 11010110**000**
- Divide the new string with generator
