---
title: Dependency in Pipelining
description: "Pipelining dependencies in Computer Organization and Architecture."
child_of: CPU Organization
nav_order: 3
---

- In pipelining multiple instructions are executing (in different phases).
- There could be some dependencis between those executing instructions.
- There could be 3 kinds of dependencies in the pipelining:
	- **Structural dependency**
	- **Data dependency**
	- **Control dependency**
- Dependency creates **stall** in the pipelining.
	- Stall is an extra cycle without operation.
	- We don't input new instruction in pipeline during stall.

# Structural Dependency

- This dependency is present in the pipeline due to the **resource conflicts** i.e. more than one process in pipeline tries to access the resource.
- Resource can be a functional unit, memory or register.

## Example
- Let's take 4 stage pipelining.
	- See the first diagram in the picture below.
- We have stages IF, ID, EX, OS.
- IF and OS needs memory access to instruction fetch instruction and oprand store respectively.
- But as we can see that in cycle 4, instruction I1 and I4 are needed memory for OS and IF respectively.
- This is called resource conflict.
- Conflict is undesirable condition.
- To remove this undesirable condition, we need to keep one instruction in waiting until resource becomes available again.
	- This waiting creates stall in pipeline.
	- As we can see in the second diagram in picture below, we are waiting three sycles due to this structural dependency.

![Structural Dependency in Pipelining]({{ site.baseurl }}/assets/images/coa/structural-dependency.png)

***

## Removing Stall: Renaming

- The resource conflict is there because the data and instructions are in memory, and one instruction is trying to access the data and other is trying to fetch instruction.
- To remove the stall in pipeline we use the **renaming** technique.
- Renaming is the idea of dividing single memory into two independent modules named as **code memory** and **data memory**.
- After that instruction fetching will be done from (code memroy) and oprand storing will be done in (data memory) and no conflict will be there,

![Structural Dependency Renaming]({{ site.baseurl }}/assets/images/coa/structural-dependency-renaming.png)

***

# Data dependency

- Data dependency exists in adjecent instructions.
- We can say instruction S2 depends on instruction S1 when
	- [ I(S1) ∩ O(S2) ] ∪ [ O(S1) ∩ I(S2) ] ∪ [ O(S1) ∩ O(S2) ] ≠ ∅
- The three cases of dependency
	- **Flow (data) dependence:** 
		- O(S1) ∩ I (S2), 
		- S1 → S2 
		- S1 writes before something read by S2.
	- **Anti-dependence:** 
		- I(S1) ∩ O(S2), 
		- S1 → S2
		- S1 reads something before S2 overwrites it. 
	- **Output dependence:** 
		- O(S1) ∩ O(S2), 
		- S1 → S2 
		- First S1 will write and then S2 will write.

## Example

- I1 : ADD R1, R2, R3
- I2 : SUB R4, R1, R2
- When the above instructions are executed in a pipelined processor, then data dependency condition will occur, which means that I2 tries to read the data before I1 writes it, therefore, I2 incorrectly gets the old value from I1.

| INSTRUCTION / CYCLE |	1 | 2 | 3 | 4 |
|-|-|-|-|-|
| I1 | IF | ID | EX | DM |
|I2||IF|ID(Old value)|	EX|


## Solution: Oprand Forwording

- To minimize data dependency stalls in the pipeline, **operand forwarding** is used.

## Data hazards

- Hazard is delay.
- Data hazards occur when instructions that exhibit data dependence, modify data in different stages of a pipeline. 
- There are mainly three types of data hazards:
	- RAW (Read after Write) [Flow/True data dependency]
		- When instruction S2 reads the data before S1 writes it, hazard will be there.
	- WAR (Write after Read) [Anti-Data dependency]
		- When instruction S2 writed the data before S1 reads it, hazard will be there.
	- WAW (Write after Write) [Output data dependency]
		- When both try to write at the same time, hazard will be there.


***

# Control dependency

- This type of dependency occurs during the transfer of control instructions such as BRANCH, CALL, JMP, etc.
- On many instruction architectures, the processor will not know the target address of these instructions when it needs to insert the new instruction into the pipeline. 
- Due to this, unwanted instructions are fed to the pipeline. I.e. before decoding the instruction the new instruction is inserted into pipeline
	- Generally, the target address of the JMP instruction is known after ID stage only.

## Unconditional TOC

- Consider the following sequence of instructions in the program:
```
1000: I1
1002: I2 (JMP 2000)
1003: I3
.
.
2000: BI1
```
- **Desired output:** I1 -> I2 -> BI1
- **Current output:** I1 -> I2 -> I3 -> BI1
- If after decoding the instruction CPU finds out that it's a unconditional TOC instruction (in this case it's I2), then the instruction inserted after this is (in thsi case it's I3) unwanted instruction.
- To maintain the functionality of pipeline, we have to remove the inserted unwanted instruction.
	- The process of removing the unwanted instruction from pipeline is called **flush** or **free**.
	- **Flush** operation create stalls in pipeline.
- The number of stalls created in pipeline is called **branch penalty.**

## Conditional TOC

- Here we may or may not execute the branch instruction..
- Consider the following sequence of instructions in the program:
```
1000: I1
1001: I2 (JNZ r0, 2000)
1002: I3
.
.
2000: BI1
```
- **Desired output:** 
	- If condition is true
		- I1 -> I2 -> BI1
	- If condition is false
		- I1 -> I2 -> I3 -> I4

### Branch penalty

- As we see that the target address is available after the ID stage, so the number of stalls introduced in the pipeline is 1. 
- Suppose, the branch target address would have been present after the ALU stage, there would have been 2 stalls. 
- Generally, if the target address is present after the kth stage, then there will be (k – 1) stalls in the pipeline.
- Total number of stalls introduced in the pipeline due to branch instructions = **Branch frequency * Branch Penalty**

- NOTE: 
	- In RISC pipelining, the branch penalty is always 1.
		- Because the ID is second stage.
	