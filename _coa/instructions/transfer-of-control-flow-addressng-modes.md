---
title: Transfer of Control Addressing Modes
description: "Memory addressing modes in computer organization."
child_of: Instructions
nav_order: 9
sub: true
---

- Under *transfer of control addressing modes*, we have two addressing modes.

# PC Relative Addressing Mode

- It's also called *position independent* addressing mode.
- Here the target address will be **within the segment.**
- The target we get is in the form of offset with respect to PC.
- The offset can be negetive of positive.
- Exmple
    - Current value of PC = 1000, and we get target address = -30.
    - Then our effective target address is 970.
- **EA = PC + Address field value**
- **PC = PC + Relative value**
- This addressing mode will work only in intrasegment instructions i.e. jumping within same segment.

# Base Register Addressing Mode

- Unlike PC relative addressing mode; this addressing mode can be used to intersegment jumping.
- Here **target address can be in different segment.**
- This method is useful for position independent code (example subprogram).
- As in PC relative mode we were adding offset vlaue into PC. Here we use another register called *baser register* instead of PC and obtain *effective address* adding *base register* value to *address field* value. 
- The *base register* contains the base address of the segment.
- **EA = Base register + Address field value**
- **PC = Base register + Relative value**

In the case of process relocation; no need to change the instructions of the process for above two addressing mode.
{: .info}

# Questions

## Q1

An instruction is stored at location 300 with it's address part is stored at location 301. The address field has value 400. A processor register contains value 150. Evalueate the effective address for following addressing modes:

**Solution:**

PC will be 302.

|Addressing modes|Effective address|
|-|-|
|Direct|400|
|Immediate|301|
|Relative(predecrement)|302+400 = 701|
|Register indirect|150|

## Q2

A relative branch mode type instruction is stored in memory location 300. The branch is made to an instruction 450.

1. What should be the value of relative address field of an instruction?
2. Determine the value of PC before instruction fetch, after the fetch and after the execution phase?

**Solution:**

||PC|
|-|-|
|Before fetch|300|
|After fetch|301|
|After execution phase|450|