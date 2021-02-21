---
title: Contiguous Memory Allocation
child_of: Memory Management
nav_order: 1
---

- Complete process is stored in memory in contiguous manner.

# Types

## Fixed Size Partitioning Scheme

- **Here number of partitions are fixed.**
- **Partition size may be different.**
- Each partition has **limit register** associated with it.
- **Each process can be only allocated in only one partition.**
	- Hence the maximum size of the process is limited by the maximum size of the partition.
- In worst cases, it also causes **internal fragmentation.**
- One partition can accomodate only one process.
- The **degree of multiprogramming** by the number of partitions in the memory.

## Variable Partitioning Scheme

- We use this to solve the problem of internal fragmentation in previous method.
- We create partitions as required by process.
- In worst cases, it can suffer from **external fragmentation.**
- We use **compaction** technique to solve external fragmentation
	- Moving all the processes towords the top or bottom of memory to make free available congious space.
	- It's undesirable because it has to interrupts all the running processes to move them.

# Partition Allocation Methods

- When more than one partition is freely available to accomodate a process, then decision making of allocating the process to a specific partition is done by partition allocation method.

## 1. First Fit

- Allocate the process to the first sufficient partition from the top of the memory

## 2. Best Fit

- Allocate the process to a partition which is smallest sufficient partition in the memory.
- To do this, we have to go through all the available partitions.

## 3. Worst Fit

- Allocate the process to the largest sufficient partition.
- To do this, we have to go through all the available partitions.

## 4. Next Fit

- It used first fit, but it startds from the last allocation point.