---
title: Addressing Modes
description: "Memory addressing modes in computer organization."
child_of: Instructions
nav_order: 7
---

- We specify **oprands** in instruction, example in `ADD r1, [1000]` instruction we are specifying add operation on two oprands.
- These oprands can be specified in different ways called **addressing modes.**
- Hence to specify the mode in which oprand address is specified, instruction contains the addressing mode information (for each oprand) and hence it can fetch data accoding to that addressing mode.

|opcode|mode 1|mode 2|oprand 1|oprand 2|

- The effective address is the actual address where required object is present.

# Symbolic Notations

- `I` or `#` is used to represent the immediate data in immediate addressimg mode.
- Register names are used to indicate register addressing modes.
- `[]` is used to represent memory addresses in direct addressing mode.
- `@` or `()` are used to indicate indirect addressing mode.
- Index register names are used to indicate indexed addressing mode.

# Effective Address

- Address of oprand in a computation-type instruction or in a target-address of a branch-type instruction.