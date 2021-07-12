---
title: Instruction Format
description: "Instruction formats in computer organization, instruction set architecture, ISA, Opcode, Oprand, What is opcode?, what is oprand?"
child_of: Instructions
nav_order: 2
---

- Any program written in high level langauge is converted to machine code which is in binary, because computer can only understand binary language.
- So all the operation in high level language gets converted to the isntructions our CPU can understand.
- Instrctions are group of bits from which out CPU can understand what it needs to do now.
- From these group of bits, some bits represent **opcode** and some represent **oprand.**
    - **Opcode specifies the opration performed by CPU,**
    - **Oprand specifies the storage location (register of main meomry) on which operation will be performed.**
    - CPU only needs these two things to perform any operation.
- Examples of some hypothetical instructions can be:
    - `ADD A, B`
        - `ADD` is opcode and `A` and `B` are oprands.
    - `INC B`
        - `INC` is opcode and `B`.
    - `POP`
        - `POP` is opcode and there is not oprand.
- Here in instruction formats **we are going to see the way in which opcode and oprands are arranged inside the one instruction.**

# Objectives

- Learn how many bits opcode take.
- How many oprands are there in instruction.
- How many bits each oprand consumes.
- Know which oprand act as source and which acts as destination.
- Know about program counter (PC) and instruction register (IR).

# Opcode and Oprand Bits

## Opcode 

- If our CPU supports *n* different types operations, we can represent each of them uniquely with *log n* bits.
    - Example, if our CPU supports 8 operations we need 3 bits to represent each of them.
- Hence 3 bits in the instruction will be consumed to represent the operation.
- **Minimum number of instructions (and hence opcodes) supported by CPU is 1.**

***

## Oprand

- Oprand bits are used to represent the memory address of register. H
- Hence we use oprands bits such that they can represent memory locations and registers uniquely.

# Instruction Set Architecture

- An ISA of an CPU is a set of all the instructions supported by it.
 

# Classification of CPU organizations

- CPU organizaions are classified in three types:
    - **Stack machine organization**
    - **Accumulator machine organization**
    - **General / register organization**
- Different organization uses different instruction format.

# Instruction decoding

- **Program counter (PC)** register is used to store the address of next instruction of the current executing instruction.
- After fetching the encoded instruction from memory we store it into **instruction register (IR).**
    - User cannot control the content of this register.
