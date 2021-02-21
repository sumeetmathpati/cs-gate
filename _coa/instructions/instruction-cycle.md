---
title: Instruction Cycle
description: "Instruction cycle in computer organization."
child_of: Instructions
nav_order: 1
---

- Instruction cycle describes the sequence of instruction execution.
- Instruction cycle consists of two subcycles
    - **Fetch Cycle**
        - Fetch instruction from memory.
    - **Execution Cycle**
        - Here we execute the fetched instruction.
 

# Instruction Fetch

- Instructions of a program we want to execute are stored in memory in binary form.
- In instruction fetch we **transfer those instructions from memory to CPU** so that CPU can know what to do.
- The instruction to be fetched is decide by **program counter** (PC).
    - The function of PC is to point to the starting address of instruction going to be executed next.
    - At the end of instruciton fetch, PC is incremented by step size (of instruction size) to point next instruction address.
- The **step size** depends on length of instruction.

# Instruction Execute

- In this phase, we **execute the fetched instruction.**
- Before executing, we have to know the operation associated with instruction.
    - I.e. the **fetched instruction from the memroy has only bits representing opcode and oprand.**
    - We have to know the operation associated with those opcode bits.
    - Example opcode bits 1001 may represent ADD, 1010 may represent MOV etc.