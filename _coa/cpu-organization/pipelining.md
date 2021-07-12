---
title: Pipelining
description: "Pipelining in Computer Organization and Architecture."
child_of: CPU Organization
nav_order: 6
---

# Flynn's Classification

- There are varioud ways to achieve parallel processing.
- The high performance architecture can be classified into four types according to the Flynn's classification:
	- **Single instruction, single data (SISD).**
	- **Single instruction, multiple data (SIMD).**
	- **Multiple instruction, single data (MISD).**
	- **Multiple instruction, multiple data (MIMD).** 

## SISD

- Here a single processor is used to perform operations on single data.
- System don't have any internal parallel processing.
- Parallel processing in this case may be achieved by means of multiple functional units.

***

## SIMD

- Here single instruction performs operations on multiple data items **at the same time.**
- We use multiple processing units which recieve same instruction and operate on different items of data.

***

## MISD

- This type of architecture **not yet implemented.**
- Because multiple instrucitons can't perform operations on same data.

***

## MIMD

- Here **multiple processors** are present in system.
- Multiple instructions perform operations on the different data items.
- Most multiprocessor and multi­computer systems can be classified in this category.

# Pipelining

- To increase the processing speed of a single CPU, we implement pipelining.
- A pipeline can be visualized as **a collection of processing segments** (like Oprand fetch, Instruction execute etc.) through which binary information flows.
- Here we **accept the new input at one end before previously accepted input apperes as output at other end.**
	- This means new instructions are executed along with the old inputs.
- We execute multiple instructions in differen segments of pipeline.
- Hence pipelining allows **overlapping execution.**
- Between each segment of pipeling, there is an **register** to store the output of pipeline.
- The successful characteristic of pipelining is,
	- In every new cycle, new input must be inserted into the pipeline.
	- **Therefore CPI = 1**
	- It means 100% efficiency.

Whenever there is a successful pipelining is used (or given in question) we use cycle per instruction (CPI) = 1
{: .note}

## Designing of pipelining

- It has a single pipe. The two ends of pipe takes INPUT and produce OUTPUT.
- Between these two ends multiple segments are interconnected based on the functionality of pipelining.
	- Segments like IF, ID, OF, OE, OS.
- Between each stage, we use interface registers to store intermediate results.
- Common clock is applied to all the pipes.
- Number of cycles required to complete K segments/stages with n inputs pipelining are
	- (k + (n - 1))

![Pipielined and Non Pipelined Architecture]({{ site.baseurl }}/assets/images/coa/pipelining-architecture.png)

## Performance evaluation of pipelining execution

- The following parameters serve as criterion to estimate the performance of pipelined execution:
	- Speedup
	- Efficiency
	- Throughput
- For K segment / staged pipelining,
- With clock cycle time Tp,
- With n tasks


- **NOTE:**
	- **Phase time (time takes by a segment) = Tp**
		- = Phase delay + Latch delay
		- Two cases are possible
			-  Case-01: All the stages offer same delay
				- **Cycle time = Delay offered by one stage including the delay due to its register.**
			- Case-02: All the stages do not offer same delay
				- **Cycle time = Maximum delay offered by any stage including the delay due to its register**
	- **Instruction execution duration (all phases) = Tn**

![2020_12_28 5_14 PM Office Lens.jpg](:/e2378cd4b8274c38bcf8b26b52cfaec3)

### Frequency

- = 1 / Phase duration or cycle time

### Execution time of non pipelined architecture 

- n * Tn

### Execution time of pipelined architecture 

- (k + n - 1) Tp

### Speedup

- (Performance of pipelined processor) / (performance of non pipelined processor)
- = (1 / Execution time of pipelined processor) / (1 / Execution time of non pipelined processor)
- **= Execution time of non pipelined processor / Execution time of pipelined processor**
- (n * Tn) / (K + n - 1) * Tp 

#### When number of inputs / tasks are large

- When n is very large, then (k + (n - 1)) approaches to the n.
- Hence for very large input 
- 	**speedup factor** 
	- **= (n * Tn) / (n * Tp)**
	- **= Tn / Tp**

### Efficiency

- The efficiency of pipelined execution is calculated as:
	- **(Speedup) / (Number of stages)**

### Throughput

- Throughput is defined as number of instructions executed per unit time:
	- **(Number of instructions executed) / (Total time taken)**



## Hypothetical pipeline

- In this pipeline all the stages maintain same amount of the delay to complete the operation.


## Types of pipelining

### Linear pipelining [GATE]

- Used to perform only on functionality

### Non linear pipelining
### Syncronous pipelining
### Asyncronous pipelining

























