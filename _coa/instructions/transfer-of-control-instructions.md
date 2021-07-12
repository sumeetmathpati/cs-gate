---
title: Transfer of Control Instructions
description: "Transfer of Control instructions in computer organization."
child_of: Instructions
nav_order: 13
sub: true
mathjax: true
---

- CPU execute the instructions from our program sequentially.
- But sometimes (unditionally or unconditionally) we don't want the sequential behavious and want to jump on some non-sequential memory location.
- When program has control structures (like if-else, loops, subprograms) we use **transfer of control instructions (TOC)** to jump to some non sequential location.


# Working

- PC automatically increment to execute the instructions sequentially. 
- If we want to jump, we can place our intended address or *target address* in PC which is a *effective address* of our intended location.
- And the next instruction that's going to execute is our *target location.*

# Conditional and Unconditional Branch

## Unconditional Branch

- The unconditional jump instruction is such that; the control of execution will be passed to our intended instruction **without checking any condition** and we can't do sequential execution in any case.
    - PC value will be always updated with *target address.*
- It's higher level implementation is `goto` instruction in C language.

### HALT

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

***

## Conditional Branch

- In conditional jump instructions, we jump to the *target address* only when some condition is satisfied.
    - This condition generally should be satisfied by the previous instruction of the conditional branch instruction.
- PC will be chaged to the target address only if the condition is satisfied, else it's incremented by 1.
- Examples, 
    - `JNZ`: Jump only if flag value is NOT equal to 0 after the execution of the previous instruction.
    - `JZ`: Jump only if flag value is equal to 0 after the execution of the previous instruction.

# Direct and Indirect TOC

- In direct TOC, the target address is present in instruction.
- In indirect TOC, the target address is not present in instruction itself.

# Execuion of Branch Instruction

1. CPU fetches the instruction.
2. CPU decodes the instruction and then only it gets to know that it's a conditional instruction.
3. CPU calculates a *effective address* in this case it will be a *target address.*
4. In execution phase CPU will check the condition.
    - If the condition is true; then the *target address* (`PC = target addr.`) is copied to the PC.
    - Else no changes will be done.

In case of unconditional branch; CPU will update the target addr. to the PC without checking condition.
{: .note}

# Execution of Function Call Instruction

1. CPU fetches the instruction.
2. CPU decodes the instruction and then only it gets to know that it's a function call instruction.
    - Suppose address of currently executin ginstruction is 1000 and the PC value is 1002.
3. Store the PC value (in this case `1002`) to the stack (access the stack using `SP`).
4. Set PC = target address, and from now on the instruction  inside the function will start executing.
5. At the end function will have return instruction. After reading *return* CPU pops value we've stored at the stack and store it into the PC.  

Both *branching* and *function call* instructions have to jump; the only difference is, in case of *function call*, we have to push and pop the PC value.
{: .info}

***

|TOC|Unconditional|Conditional|
|Direct|`JMP <addr>`, `CALL <addr>`, `GOTO`, `HALT`|`JNZ <addr>`, IF-ELSE, loops, `CALL Z`, `CALL NZ`
|Indirect|`RET`|`RET Z`, `RET NZ`, `RET C`, `RET NZ'C`|

