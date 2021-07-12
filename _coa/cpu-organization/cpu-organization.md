---
title: CPU Organization
parent: true
nav_order: 3
description: "CPU cycle, CPI, cycle per instruction, CPU frequency, CPU clock"
---

# Terminologies

## CPU Cycle

- *CPU cycle time* is a time required for CPU to perform a single micro operation (smallest unit of work).

## CPU Clock Rate

- *CPU cycle time* can be given in time or a *frequency/clock rate.*
- Clock rate or frequency is just a number of micro-operations performed in a second.
	- Example, if a cycle time is 1 micro second = then the click rate is 1MHz.

## Cycles Per Instruction

- To execute one instruction, CPU generally require more than 1 cycle.
- The **number of cycles required to execute a single instruction** is called *cycles per instruction* or CPI.
- Hence **instruction execution time = CPI * Cycle time**
- Hence, **time to execute n instructions :**
	**= n * CPI * Cycle time**
	**= (n * CPI) / Clock rate**

Different instruction of a CPU may require different number of cycle, hence CPI of a CPU is an average.
{: .info}

## MIPS

- MIPS stands for *million instructions per second.*
- MIPS is used becaue CPU can execute very large number of instructions in seconds. If would be very easy we we could tell them in millions.
- Example, if CPU can execute 1000000 instructions in a second, then we say CPU executes 1 MIPS.

# RISC AND CISC

- Bases on the tyep of isntructions et supported by processor, architectures are divided into two types
	- RISC
	- CISC

## RISC

- Supports more number of regiters.
- Supports less number of addressing modes.
- It supports fixed length instruction format.
- Clock cycle per instruction if 1.
- Supports successfull pipeline implementation.

***

## CISC

- Supports less number of regiters.
- Supports more number of addressing modes.
- It supports variable length instruction format.
- Supports unsuccessfull pipeline implementation.

***

|RISC|CISC|
|-|-|
|Less number of instructions are supported|More number of instructions are supported.|
|Fixed liength instructions.|Variable length instructions.|
|Simple instructions.|Complex instructions.|
|Simple and less number of addressing modes.|Complex and more number of addressing modes.|
|Easy to implement using hardwired control unit.|Difficult to implement using hardwired control unit.|