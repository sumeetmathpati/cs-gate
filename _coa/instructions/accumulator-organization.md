---
title: Accumulator Organization
description: "Accumulator Organization, one address instruction."
child_of: Instructions
nav_order: 4
sub: true
---

- Here, **out of two oprands in instruction, one default oprand is accumulator. Another oprand could be register or memory.**
- **Accumulator acts as source as will as destination.**
- One address machine **also supports zero address instructions** if there is free space available after allovating one address instructions.

# Instruction Format

- There is **opcode** and **only one oprand in instruction**, 
- Therefore it's also called **one address instruction format.**

![One Address Insruction]({{ site.baseurl }}/assets/images/coa/accumulator-instruction-format.png)


# Operations

## Data Transfer Operations

|Source|Destination|
|-|-|
|Accumulator|Memory|
|Memory|Accumulator|

### LOAD 

- Example, `LOAD [5000]`
    - It says load from memoy address 5000.
    - Source is memory.
    - Destination is accumulator.

### STORE

- Example, `STORE [5000]`
    - It says write to memory location 5000
    - Source is accumulator.
    - Destination is memory.

***

## ALU operations

|Source 1|Source 2| Destination|
|-|-|-|
|Accumulator|Memory / Register|Accumulator|

### ADD

- Example `ADD r0`
    - It says add value of register r0 to accumulator.
    - It's equal to `ACC <-- ACC + r0`
- Example `ADD [1000]`
    - It says add value of memory location 1000 to accumulator.
    - It's equal to `ACC <-- ACC + [1000]`


# Expand Opcode Technique

- This technique is used to support more instruction types if the memory is left.
- This is done in following steps:
    - **Step1:** Identify the highest instruction format supported.
    - **Step2:** Identify the possible number of operations.
    - **Step3:** Identify the free combinations after allocating the high order instructions.
    - **Step4:** Calculate the number of low order instructions by combining the address field with free combinations

# Questions

## Q1

- Suppose a hypothetical CPU which supports zero and one address instruction.
    - It 6 bits for complete instructions.
    - It has 4 bits for address.
    - There exists two one address instructions.
- **How many zero address instructions can be formed?**
- **Solution**
    - It will have 2 bits for opcode ... (6 - 4)
    - Highest instruction format supported: 1 address instruction.
    - Possible number of operations: 2^2 = 4 ... (because opcode size if 2 bits)
    - Fee combinations = 4 - 2 ... (we can have 4 instructions bu have only 2 instructions)
    - Number of low order instructions:
        - We have 2 free combinations and each combination has 4 bit address.
        - We dont need address for zero address instructions.
        - Therefore we can have 2 * 2^4 = **32 zero address instructions.**
    
## Q2

Consider a computer which supports 2 and 1 address instructions. Each instruction is of 6 bits and each address is of 2 bits. If there are 3 2-address instructions supported by computer, then maximum 2 address instructions supported by system is?

**Solution:** 4