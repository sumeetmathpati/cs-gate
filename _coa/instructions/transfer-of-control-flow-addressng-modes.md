---
title: Transfer of Control Addressing Modes
description: "Memory addressing modes in computer organization."
child_of: Instructions
nav_order: 9
sub: true
---

- When program has control structures (like if-else, loops, subprograms) we use **transfer of control instructions (TOC)** to jump to some non sequential location.
- For this we have three possible opcodes:
    - **Branch**
    - **Jump**
    - **Skip**
- We have two types of transfer of control instructions:
    - **Conditional**
    - **Unconditional**

- While executing any instruction, PC contains the address of enxt sequential instruction, but when instruction gets decoded and if it's a TOC instruction; the PC is replaces with target address of that TOC instruction.

# Unconditional Tranfer of Control

- In ths type, the **control is tranfered without checking any condition.**
- Example,
    - `JMP 1000`    
        - This is unconditional jump.
        - When this instruction encountered, flow control is passed to target location without checking any condition.
- We use`GOTO`, `HALT` or any other machine controlled instruction to implement unconditional TOC.

## HALT

- `HALT` instruction is unconditional TOC.
- It's **used to stop the program.**
- The program is stopped or halted by giving the same address (of `HALT` instruction) as a target address, so that the control doesn't go forward and continues at the same location.
- Example
```
1000
1001
1002: HALT
1002: HALT
1002: HALT
...
...
```

# Conditional Transfer of Control

- In ths type, the **control is tranfered depending on some condition.**
- When the condition is true, the control is transfered; else next sequential instruction is executed.
    - If the condition is true, the content of PC is replaced with target address.
- Condition is checked with respect to the previous instruction.
- Used in implementation of:
    - Conditional selection
        - Example `IF-ELSE` statements.
    - Subprograms   
        - Example functions.
- Example,
    - `JNZ 2000`
        - Here we jump to location 2000 if the result by the previous instruction is NOT zero.
        - If the zero flag is set by an instruction; then it's result is zero.
- Condition TOC is further divided into two types:
    - **Direct TOC**
    - **Indirect TOC**

## Direct TOC

- In this, the target address is present in instruction.

***

## Indirect TOC

- Here, the target address is not present in instruction itself.

***

|TOC|Unconditional|Conditional|
|Direct|`JMP <addr>`, `CALL <addr>`, `GOTO`, `HALT`|`JNZ <addr>`, IF-ELSE, loops, `CALL Z`, `CALL NZ`
|Indirect|`RET`|`RET Z`, `RET NZ`, `RET C`, `RET NZ'C`|

# Addressing Modes

- Under TOC, we have two addressing modes.

## Relative or PC Relative Addressing Mode

- Here the target address will be **within the segment.**
- The target we get is in the form of offset with respect to PC.
- The offset can be negetive of positive.
- Exmple
    - Current value of PC = 1000, and we get target address = -30.
    - Then our effective target address is 970.
- **EA = PC + Address field value**
- **PC = PC + Relative value**

## Base Register Addressing Mode

- Here **target address can be in different segment.**
- This method is useful for position independent code (example subprogram).
- In this mode effective address is obtained by adding base register value to address field value. 
- **EA= Base register + Address field value**
- **PC= Base register + Relative value**