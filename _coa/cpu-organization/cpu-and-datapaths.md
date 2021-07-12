---
title: CPU & Datapaths
description: "CPU, Datapaths, control unit, control signals"
child_of: CPU Organization
nav_order: 1
---

# ALU

- ALU in CPU can perform various types of operations.
- ALU takes at most two inputs, store the data in some register, updates the flags as per the results.
- As opcode tells CPU what operations to perform, CPU tells ALU what operation to do using some signals (we can call is *function code*).

![ALU]({{ site.baseurl }}/assets/images/coa/alu.png)

# Datapaths

- CPU is composed of different modules who collectively work to get work done. These are called functional units. Functional units contain, *cpu registers*, *ALU*, *cache*, *control unit*, *flags*, *CPU clock*, *memory management unit*, etc.
- We have to connect all these functional units so that they can work with each other, the circuit which connects all these components is called *data paths.*

![CPU's Internal Circuit]({{ site.baseurl }}/assets/images/coa/cpu-internals.png)

- As we can see, every memory device recieves a control signal `IN` or `OUT`. This is to control the memory these devices to send and recieve data from the bus.
	- If we want a memory device *A* to send the to memory device *B*, we send control signal `Out` to the *A* and *In` signal to the *B*.

All the control signals are sent by only a *control unit* in CPU, and no other device can send a control signals.
{: .info}

# Datapaths for Different Micro-oprations

## Instruction Fetch

- To fetch the instruction from memory; CPU need to perform following micro-operations.
	1. MAR <-- PC
	2. MBR <-- M[MAR]
	3. IR <-- MDR, PC <-- PC + 1

In step 3, we are performing two micro-operations simultaneously. We can perform two operations in one cycle (parallely) only if there is not common path used and no common components are used in those two parallel operations.
{: .note}

- Let's see how data paths are used to perform micro-operations. The paths which are used are shown in green color.

### MAR <-- PC

![PC to MAR]({{ site.baseurl }}/assets/images/coa/data-path-ex1.png)

### MBR <– M[MAR]

![PC to MAR]({{ site.baseurl }}/assets/images/coa/data-path-ex2.png)

### IR <-- MDR, PC <-- PC + 1

![PC to MAR]({{ site.baseurl }}/assets/images/coa/data-path-ex3.png)
