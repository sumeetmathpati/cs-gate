---
title: Sequential Control Flow Addressing Modes
description: "Sequential Control Flow Addressing Modes in computer organization."
child_of: Instructions
nav_order: 8
sub: true
---

- Here all the instructions are stored in sequence.
- Based on the where data is present, these modes are further divided into:
    - **Register based addressing modes**
    - **Memory based addressing modes**

# Register Based Addressing Modes

- We use these modes when the data is present in register.
- Therefore the effective address will be register name, example `r0`.
- Under thid category there is only one addressing mode, that is **register direct addressing mdoe.**

## Register Direct Addressing Mode

- This mode is used to access local data variables of a program.
- Example: `ADD r0, r1`
    - It says `r0 <-- r0 + r1`
    - We require three register references for this instruction.


# Memory Based Addressing Modes

- These addressing modes are used when the data is in main memory.
- Therefore the effective address will always be a memory location.

## Implicit or Implied Addressing Mode

- In this addressing modes, we don't have to mention the address.
- Opcode itself defines the memory location.
- The memory locatios is implied.
- Example
    - `PUSH r0`
        - Here the implied address is stack.
        - We push the data from register `r0` to stack.
        - We don't have to mention stack explicitely.
    - `STC`
        - It sets the carry flag.
    - `CLC`
        - It clears the carry flag.
- All the **zero address instructions** use implicit addressing modes.

***

## Immediate Addressing Mode

- Instead of giving memory location for data, **we provide data in instruction itself.**
- We mention data in address field of the instruction.
- To mension the data, we se `#` symbol.
- Example
    - `ADD r0, 23#`
        - Here we are adding 23 constant value to the register `r0`.
- The problem is, we have limit for constant or immediate values equal to the length of the address field.
    - The larger the address field, the larger the data we can pass.

***

## Direct / Absolute Addressing Mode

- Used to access the static variables of a program (which initialized only once) present in memory.
- We pass the address of memory location in address field of the instruction.
- Example
    - `ADD [5000], r0`
        - Here we are adding values stores in regsiter r0 and memory location 5000 and storing the result in memory location 5000.
        - We require 2 main memory references.
    - `ADD [5000], [4000]`
        - Here we require three memory references.

***

## Indirect Addressing Mode

- We know in memory based addressing modes, the data is in memory.
- But we can store the address of that memory location in register or memory.
- This addressig modes used to implement pointers.

### Register Indirect Addressing Mode

- If we store the address of memory location (where data is present) in another register, then it's called **register indirect addressing mode.**
- In instruction we provide the name of the register which contains the effective address of memory location where data is present.
- Hence we first need to access the register and then memory.
- Example
    - `ADD @r0, [5000]`
        - Above instruction represent that r0 has address of some memory location where we want to perform ADD operation.

![Register Indirect Addressing Mode]({{ site.baseurl }}/assets/images/coa/register-indirect-addressing-mode.png)


### Memory Indirect Addressing Mode

- If we store the address of memory location (where data is present) in another memory address, then it's called **memory indirect addressing mode.**
- In instruction we provide the address of memory location which contains the effective address of memory location where data is present.
- Hence we first need to memory which contains the address, and after that we again access the memory to access the data.
- Example
    - `ADD r0, @2000`
        - Above instruction says that memory location 2000 has address of another memory location which has data.

![Memory Indirect Addressing Mode]({{ site.baseurl }}/assets/images/coa/memory-indirect-addressing-mode.png)

***

## Indexed Addressing Mode

- This addressing mode is used to implement **array.**
- This addressing mode is also called **base indexed addressing mode.**
- Here we have two things to access elements
    - **Base address**
    - **Index number**
- Base address gives the starting address of the array.
- The index number gives the position of array element.
- We **add the base address and index number** to get the effective address of the element.
- Hence artithmetic computation is required to calculate the effective addres.
- The indec value is present in specific register, and base address is present in address field of register.
- Example
    - `ADD @5000, 20(r1)` where r1 is an index register.

***

## Auto Indexed Addressing Mode

- This addressing mode is used if we want to **access array sequentially.**
- To do this we need two things
    - **Starting address** of an array (to start accessing from first element)
    - **Ending address** of an array (to start accessing from last element)
