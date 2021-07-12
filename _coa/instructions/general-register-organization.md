---
title: General Register Organization
description: "General Register Organization Instruction formats in computer organization."
child_of: Instructions
nav_order: 5
sub: true
---

- In **general register organization** organization we provide location of all the oprands explicitely. Hence it's also called **two or three address instruction format.** 
- This organization **also supports zero and one address instructions** if there is free space available after allocating two or three address instructions.
- CPUs can't perform ALU operations between two memory locations.
    - Hence one of the ALU oprand must be in register.
    - Another may be in register or in memory.
- Based on the number of registers in CPU, this architecture is divided in two types:
    - **Register to memory reference** architecture
    - **Register to register reference** architecture
    
# Register to Memory Reference Architecture

- In this organization we use **two address instructions.**
- This architectures support less number of registers.
- Here, 
    - First oprand is register.
    - Second oprand is memory or register.
    - Destination is same register as first oprand.

## Instruction Format 

- Instruction format for register to memory reference architecture.

![Two Address Insruction]({{ site.baseurl }}/assets/images/coa/general-register-instruction-format.png)

## Operations

### Data Transfer Operations

|Source|Destination|
|-|-|
|Register|Memory|
|Memory|Register|
|Register|Register|

#### MOV 

- Example, `MOV r0, r1`
    - It says transfer from r1 to r0.
    - Source is register.
    - Destination is register.
- Example, `MOV r0, [5000]`
    - It says transfer from [5000] to r0.
    - Source is memory location.
    - Destination is register.
- Example, `MOV [5000], r0`
    - It says transfer from r0 to memory location [5000].
    - Source is register.
    - Destination is memory location.

***

### ALU operations

|Source 1|Source 2| Destination|
|-|-|-|
|Register: r0| Memory / Register |Register: r0|

#### ADD

- Example `ADD r0, [5000]`
    - It says add value of memory location [5000] to to register r0 and store it to r0.
    - It's equal to `r0 <-- [5000] + r0`
- Example `ADD [1000], r0`
    - It's **NOT a valid** instruction in register to memory reference architecture.


# Register to Rgister Reference Architecture

- Here we use **three address instructions.**
- In previous register to memory reference architecture, the source register which was also a destination register was being ovewritten while performing ALU operations.
    - Example, in `ADD r0, r1` instruction, `r0` was being overwritten by `r0+r1`.
- To reomove this overwriting, we use another register as destination.
    - Now we write instruction as `ADD r3, r0, r1`
    - `r0` is source 1.
    - `r1` is source 2.
    - `r3` is destination.
- This architectures **support more number of registers.**
- In this architecture **ALU operation is done only on the registers.**

## Operations

## Data Transfer Operations 
- Data manipulation instructions are two oprand instrucitons.
- ALU instructions are three oprand instructions.

### ALU operations

|Source 1|Source 2| Destination|
|-|-|-|
|Register: r0|  Register |Register: r0|

#### ADD

- Example `ADD r0, [5000]`
    - It says add value of memory location [5000] to to register r0 and store it to r0.
    - It's equal to `r0 <-- [5000] + r0`
- Example `ADD [1000], r0`
    - It's **NOT a valid** instruction in register to memory reference architecture.

## Instruction Format 

- Instruction format for **register to register** reference architecture and **data transfer instruction.**

![Two Address Insruction]({{ site.baseurl }}/assets/images/coa/general-register-instruction-format.png)

- Instruction format for **register to register** reference architecture and **ALU instruction.**

![Three Address Insruction]({{ site.baseurl }}/assets/images/coa/general-register-three-address-instruction-format.png)

