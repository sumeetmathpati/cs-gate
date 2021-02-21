---
title: Stack Organization
description: "Instruction formats in computer organization."
child_of: Instructions
nav_order: 3
sub: true
---

- Here we are going to see the instruction format in stack machine.
- Here **we perform all the operations on the stack.**
- We have one stack pointer which points to the top element of the stack. All the operations will be performed on this element.

# Instruction Format

- **Stack acts as source as will as destination.**
- Hence, there will be **no oprand in instruction.**
- **Instruction contains only one field (opcode field).**
- Therefore it's also called **zero address instruction format.**

![Zero Address Insruction]({{ site.baseurl }}/assets/images/coa/stack-instruction-format.png)


# Operations

## Data Transfer Operations

### PUSH

- Source is accumulator.
- Destination is top of stack.

### POP

- Source is top of stack.
- Destination is accumulator.

|Source|Destination|
|-|-|
|Accumulator|Top of stack|
|Top of stack|Accumulator|

## ALU operations

- Let's take ADD operation. It's executed as
    - POP first value from stack.
    - POP first value from stack.
    - Perform add and PUSH the result

|Source 1|Source 2| Destination|
|-|-|-|
|Top of stack|Top of stack|Top of stack|
