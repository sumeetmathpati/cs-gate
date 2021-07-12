---
title: Interrupts
description: "Transfer of Control instructions in computer organization."
child_of: Instructions
nav_order: 14
mathjax: true
---


- After each instruction cycle (after execution phase), cpu checks for interrupt.
    - Hence **we only can service the interrupt after the current instruction gets completely executed.**
- If we have an interrupt, we have to tranfer the control to the interrupt handler to service the interrupt.

IVT is a data structure that associates a **list of interrupt handlers** with a list of **interrupt requests.**
{: .note}

- When interrupt occurs, then the control is transfered to the target location or interrupt subprogram.
- This is done by:
    - **PUSH PC**
    - **Transfer control to IVT**
    - **POP PC**


# Types of Inerrupts

## Hardware Interrupts

- These interrupts are present at hardware pins of the processor.

***

## Software Interrupts

- Software interrupt is happens due to instructions.
- They are present in instruction set of processor.