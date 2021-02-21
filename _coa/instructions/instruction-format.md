---
title: Instruction Format
description: "Instruction formats in computer organization."
child_of: Instructions
nav_order: 2
---

- Instructions in our program are just collection of bits, represening the **oprand or opcode.**
    - Opcode specifies the opration performed by CPU,
    - oprand specifies the storage location (register of main meomry) on which operation will be performed.
    - CPU only needs these two things to perform any operation.
- Here in instruction formats **we are going to see the way in which opcode and oprands are arranged inside the one instruction.**
- **Objective:**
    - Learn how many bits opcode take.
    - How many oprands are there in instruction.
    - How many bits each oprand consumes.
    - Know which oprand act as source and which acts as destination.
    - Know about program counter (PC) and instruction register (IR).

# Opcode Bits

- If our system or CPU supports n different types operations, we can represent each of them uniquely with log n bits.
    - Example, if out CPU supports 8 operations we need 3 bits to represent each of them.
- Hence 3 bits in the instruction will be consumed to represent the operation.

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
