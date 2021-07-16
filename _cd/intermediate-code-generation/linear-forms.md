---
title: Linear Forms
description: "Three address code, postfix code"
nav_order: 2
child_of: Intermediate Code Generation
---

# Three Address Code

- In thrree address code, every high level language statement is represented using atmost 3 addresses.

## Types of Three Address Statements

- **Assignment statement:** x := y OP z
- **Assignment statement:** x := OP z
- **Copy statement:** x := z
- **Unconditional jump:** goto L
- **Conditional jump:** if x relop y goto L
- **Stack operations:** Push/Pop
