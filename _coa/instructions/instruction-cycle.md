---
title: Instruction Cycle
description: "Instruction cycle in computer organization."
child_of: Instructions
nav_order: 1
---

- To execute any instruction, CPU uses some steps, then it again uses same steps to execute next instructions, this cycle is called instruction cycle.
- Instruction cycle consists of two subcycles.
    - **Fetch Cycle**
    - **Execution Cycle**
        - Here we execute the fetched instruction.
 

# Instruction Fetch
   
- Instructions of a program we want to execute are stored in memory in binary form.
- In instruction fetch we **transfer those instructions from memory to CPU** so that CPU can know what to do.
- The instruction to be fetched is decide by **program counter** (PC).
    - At the end of instruciton fetch, PC is incremented by *step size* (instruction size) to point next instruction address.
    - The **step size** depends on length of instruction.
- The fetched instruction is stored in **IR** (instruction register).

# Instruction Execute

- This subcycle has 5 steps:
    - **Oprand fetch:**
    - **Execute instruction:**
    - **Write back result**
    - **Instruction decode:**
    - **Effective address calculation**

- In this phase, we **execute the fetched instruction.**
- Before executing, we have to know the operation associated with instruction.
    - I.e. the **fetched instruction from the memroy has only bits representing opcode and oprand.**
    - We have to know the operation associated with those opcode bits.
    - Example opcode bits 1001 may represent ADD, 1010 may represent MOV etc.

IF, ID and IE these three are mendatory phased out of all 6 phases.
{: .note}