---
title: Performace Evaluation of Processor
description: "Performace Evaluation of Processor in Computer Organization and Architecture."
child_of: CPU Organization
nav_order: 5
---

- We can define the performance on the basis of one of the following:
	- **Execution time**
		- Time required to execute a task.
		- Performance is inversly proportional to the execution time.
	- **Throughput**
		- It's a number of tasks executed in per unit of time.
		- Performace if directly proportional to throughput time.
		

# Performance gain

- It can be identified with speedup factor
- **Speedup factor** 
	- n = performance of 'x' / performance of 'y'
	- n = (1 / execution time of 'x') / (1 / execution time of 'y')
	- **n = (execution time of 'y') / (execution time of 'x')**
		- It means x is n time faster than y.

# Calculation of CPU time / execution time

- The **program execution time can be calculated based on the clock frequencey.**
- All the processor activities are controlled on the clock pulse.
- To calculate CPU or execution time, we need
	- **Cycles**
		- Cycle is defined as raising edge to raising edge or falling edge to falling edge or raising edge transition.
	- **Cycle time**
		- Cycle time is depen upon clock frequency.
		- Cycle time is inverse of frequncy.
			- (1 / frequency)


## Program execution time
 
- Seconds require to execute the program.
- = Instruction count * clock cycles per instruction * cycle time
- = **IC * CPI * CT**