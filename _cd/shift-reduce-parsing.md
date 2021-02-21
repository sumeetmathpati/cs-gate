---
title:  "Shift Reduce Parsing"
description: "Shift reduce parsing."
serial: 7
---

- It's one of the type of **bottom-up parsing**.
- Bottom up parsing starts from the leaf node and works in upward direction till it reaches the root node.
- In this type of parsing, we **apply production rules in reverse manner** to reach the start of symbol.
- A general form of shift reduce parser is **LR parser**.
- Every **LL(k) parser is LR(j)** parser **if j >= k**.
    - For example we can say that,
        - LL(0) is LR(0) = LR(1)
        - LL(1) is LR(1)
- The notation LR(k) parsers, the L stands for **left-to-right scanning** of the input stream; R stands for the construction of **right-most derivation in reverse**.

***

## Shift and Reduce

- It has this name because it contains two steps:
    - **Shift:**
        - In this step we shift the input pointer to the next input symbol, which is called the **shifted symbol**. 
        - We push this shifted symbol onto stack. 
        - The shifted symbol is treated as a single node of the parse tree.
    - **Reduce**
        - When the parser finds a complete grammar rule (RHS) and replaces it to (LHS), it is known as reduce-step. 
        -  If the handle is on top of the stack, its reduction by using appropriate production rule is done i.e. **RHS of production rule is popped out of stack and LHS of production rule is pushed onto the stack**.

***

## Types of Shoft Reduce parsers

There are four types of shift reduce parsers.

- LR(0)
- SLR(1)
- LALR(1)
- CLR(1)

### Powers of Parsers

LR(0) ⊆ SLR(1) ⊆ LALR(1) ⊆ CLR(1)
