---
title: Computer Organization and Architecture
description: "Computer organization and architecture tutorial, System bus"
nav_order: 1
permalink: /computer-organization-architecture/
---

# System Bus

- System bus is used in our computer to connect all the different parts (like memory, CPU, IO).
- System bus is composed of three sub buses:
    - **Data bus:**
        - Data bus is biderectional.
    - **Address bus:**
        - Address bus is unidirectional (from CPU to other components)
    - **Control bus:**

# CPU Registers

Registers is a small memory present in CPU.

## General Purpose

- These registers can be use for general purpose work (like as a temporary storage in arithmetic operations).

***

## Special Purpose

- Some examples of special purpose registers are:

### Accumulator (AC)

- Used to store the result of ALU or sometimes to store one of the oprand.
- Some architectures where AC is used as input to ALU
    - AC based arhitecture.
    - Register based architecture.
    - Register-memory based architecture.
    - Complex system architecture
    - Stack based architecture.

### Program counter (PC)

- Stores addres of next instruction to be executed.

### Instruction register (IR)

- Stores the instruction to be executed.

### Stack pointer (SP)

- Every process has stack part.
- This register has address of the top element on that stack.

### Flag register / Program status word (PSW)

- Stores the status of the ALU result.
- Status like if result is zero, if it has generated carry or not, sign of the result etc.
- Used to implement conditional execution.

### Memory address register (MAR)

- Used to send transfer address from CPU to memory, in situations when CPU wants to read of write data to that memory address.

### Memory data/buffer register (MDR/MBR)

- Used to send the data to the memory and to recieve data from the memory.

# Memory Cell Size

- A memory can be byte addressable or word addressable.

If in questions addressing type os not mentioned; assume byte addresable by default.
{: .note}

## Byte Addressable

- In this mechanism; we can store 1 byte at a one address.

## Word Addressable

- In this mechanism; we can store 1 word at a one address.
- Word size is not fixed, it can be anything (2 bytes, 4 bytes etc.).

# Micro Operations

- This are the operations can performed on the CPU registers, example `R1 <- R2`
- Symbolic notation to describe the micro operation is *Register Transfer Language.*
- Micro operations are small operations which are part of a larger operation we've mentioned in opcide part of instruction.
- **Minimum time needed to perform 1 micro operation is called 1 CPU cycle time.**
    - One micro operation can take more than one CPU cycle also, but minimum is 1 CPU cycle.

## RTL

|Name|Example|Description|
|-|-|-|
|Register transfer|`R1 <- R2`|Move data from `R2` to `R1`. <br> R2 remains as it is, <br>R1 is updated.|
|Comma| `R2 <- R1, PC <- PC + 1`|Sometimes tw0 micro operations can be done simultaneously. These two micro operations are saperated by comma.|
|Memory transfer<br>(Memory read)|`R <- M[1000]`,<br>`R <- M[MAR]`|Get data from memory to CPU.|
|Memory transfer<br>(Memory write)|`R -> M[1000]`,<br>`R -> M[MAR]`|Store data from CPU to memory.|