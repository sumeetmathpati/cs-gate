---
title: CPU Organization
parent: true
nav_order: 3
description: "CPU organization in computer organization"
---

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

# Performance Evaluation of Processor

- We can define the performance on the basis of one of the following:
	- **Execution time**
		- Time required to execute a task.
		- Performance is inversly proportional to the execution time.
	- **Throughput**
		- It's a number of tasks executed in per unit of time.
		- Performace if directly proportional to throughput time.
		

## Performance Gain

- It can be identified with speedup factor
- **Speedup factor** 
	- n = performance of 'x' / performance of 'y'
	- n = (1 / execution time of 'x') / (1 / execution time of 'y')
	- **n = (execution time of 'y') / (execution time of 'x')**
		- It means x is n time faster than y.

## Calculation of Execution Time

- The **program execution time can be calculated based on the clock frequencey.**
- All the processor activities are controlled on the clock pulse.
- To calculate execution time, we first need need
	- **Cycle time**
		- Cycle time is depen upon clock frequency.
		- Cycle time is inverse of frequncy.
			- (1 / frequency)


### Program execution time
 
- Time require to execute the program.
- = Instruction count * clock cycles per instruction * cycle time
- = **IC * CPI * CT**