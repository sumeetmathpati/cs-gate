---
title: Data Manipulation Instructions
description: "Memory addressing modes in computer organization."
child_of: Instructions
nav_order: 12
sub: true
mathjax: true
---

- We have logical operations like AND, OR, NOT, XOR, CMP etc.

# CMP

- Using this instruction, we compare data of two registers.
- We do this using subtraction operations.
- After the operation, the result is maintained in two flags
    - **Carry flag**
    - **Zero flag**
- Here three cases are possible:

## Both Numbers are same

- If both the numbers are same,
    - **Zero flag is SET, Carry flag is RESET.**
- Example,
    - $$r_0 = 80_{10}$$, and $$r_1 = 80_{10}$$
    - Hence, $r_0 - r_1 = 01010000 - 01010000 = 00000000$
    - Hence zero flag is set.

***

## First Number is Greater

- If first number is greater,
    - **Both flags are reset.**
- Example,
    - $$r_0 = 80_{10}$$, and $$r_1 = 40_{10}$$
    - Hence, $r_0 - r_1 = 01010000 - 00101000 = 00101000$
    - Hence zero flag is set.

***

## Second Number is Greater

- If second number is greater,
    - **Carry flag is SET, Zero flag is RESET**
- Example,
    - $$r_0 = 80_{10}$$, and $$r_1 = 80_{10}$$
    - Hence, $r_0 - r_1 = 01010000 - 01010000 = 00000000$
    - Hence zero flag is set.

# Shift Operations

- Shifting will either be **right** of **left.**
- We have two types of shifting operations:
    - **Logical shift**
    - **Arithmetic shoft**

## Logical Shift

- In this method, we shift all the bits along with all sign bit.
- This kind of shifting used in serial data communication.

### Logical Left Shift

- We **shift all the bits leftwards,** MSB bit will get lost, and hence we **add 0 at the right side.**
- Example
    - `10000010` --LSR--> `00000100`

### Logical Right Shift

- We **shift all the bits rightwards,** LSB bit will get lost, and hence we **add 0 at the left side.**
- Example
    - `10000010` --RSR--> `01000001`

***

## Arithmetic Shift

- In this method, **we shift all the bits EXCEPT sign bit.**
- Here we preserve the sign bit.

### Arithmetic Left Shift

- We **shift all the bits (except sign bit) leftwards,** second bit (from left side) will get lost, and hence we **add 0 at the right side.**
- Example
    - `10000010` --ASR--> `10000100`

### Arithmetic Right Shift

- We **shift all the bits (except sign bit) rightwards,** LSB bit will get lost, and hence we **add same bit as sign bit at the second bit (from the left side).**
- Example
    - `10000010` --ASR--> `11000001`

# Rotate Operations

- Rotating will either be **right** of **left.**
- Unlike shoft operations, bit don't get lost while rotation.

## Rotate Without Carry

### Rotate Left Without Carry

- We remove the MSB, and put it after LSB.
- Example
    - `10000010` --RL--> `00000101`

### Rotate Right Without Carry

- We remove the LSB, and put it before MSB.
- Example
    - `10000010` --RR--> `00000101`

***

## Rotate With Carry

### Rotate Left With Carry

- We **move the MSB to the carry flag, and move carry flag value to the LSB.**
- Example
    - `10000010` and `C=0` --RLWC--> `0000011` and `C=1`

### Rotate Right With Carry

- We **move the LSB to the carry flag, and move carry flag value to the MSB.**
- Example
    - `10000010` and `C=0` --RRWC--> `01000001` and `C=0`
