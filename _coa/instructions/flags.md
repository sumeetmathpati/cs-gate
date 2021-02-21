---
title: Flags
description: "Flags in computer organization."
child_of: Instructions
nav_order: 6
---

- Flag is a flip-flop, whic stores the single bit information.
- Flags are stored in flag register.
- Flag has two states
    - Set: in this state it has value 1.
    - Reset: In this staate is has value 0.
- We have divided flags in two types:
    - Consitional flags
    - Control Flags
- There are total 9 flags used.
    - Out of these 6 are conditional flags and 3 are control flags.

# Conditional Flags

- These flags are set or reset **based on the result of ALU.**
- Each flag is associated with the condition.
    - **If the condition is true; then flasg is set else it's reset.**

## Carry Flag

- Condition: **There is a carry out of the MSB.** 
- This flag is used in unsigned arithmetic operations to represent range exceeding condition.
- Example
    - `1111 + 0001 = 0000`
        - Carry flag is set.
    - `0000 - 0001 = 1111`
        - Carry flag is set (due to borrow).
    - `0111 + 0001 = 1000`
        - Carry flag is reset.

## Auxilary Carry Flag

- Condition: **There is an carry from lower nibble to higher nibble.**
- This flag is used in BCD arithmetic operations.

## Parity Flag

- Condition: **ALU output contains even number of 1s.**
- This flag is used in serial data communication to check is the transmission is successful.

## Zero Flag

- Condition: **Accumulator contains 0**
- Used in control structure (conditions and loops) implementations.

## Overflow Flag

- Condition: 
    - **Two numbers with the sign bits off yields a result number with the sign bit on.** or
    - **If the sum of two numbers with the sign bits on yields a result number with the sign bit off.**
- Example
    - `0100 + 0100 = 1000`
        - Overflow flag is set.
    - `1000 + 1000 = 0000`
        - Overflow flag is set.

## Sign Flag

- Condition: **The MSB of ALU output is 1**

# Control Flags

- Based on the states of these flags, the execution sequence will be changed.

## Trap Flag

- Setting trap flag puts the microprocessor into single step mode for debugging.
- This flag is used for on-chip debugging. In single stepping, the microprocessor executes a instruction and enters into single step interrupt service routine (ISR).
- If trap **flag is set,**
    - the CPU automatically generates an internal interrupt after each instruction, allowing a program to be inspected as it executes instruction by instruction.
- If trap **flag is reset,**
    - no function is performed. 

## Interrupt Flag

- This flag is for interrupts.
- If interrupt **flag is set,**
    - the microprocessor will recognize interrupt requests from the peripherals.
- If interrupt **flag is reset,** 
    - the microprocessor will not recognize any interrupt requests and will ignore them.

## Direction Flag

- This flag is specifically used in string instructions.
- If directional **flag is set,**
    - then access the string data **from higher memory location towards lower memory location.**
- If directional **flag is reset**
    - then access the string data **from lower memory location towards higher memory location.**