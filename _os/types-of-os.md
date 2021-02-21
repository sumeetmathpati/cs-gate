---
title: Types of Operating Systems
nav_order: 2
---

# The Batch OS

- When computer starts batch of jobs are given to the computer.
- The task of OS is to schedule these jobs to the CPU.
- Example, IBM OS/2.

## Problems

- When a job is executing IO operations CPU will be idle.
- But in batch OS, no other job can be schedules to the CPU until previous job is completely finished.

***

# Multiprogramming OS

- As name suggests, **in memory we will have more than one jobs.**
- Here the OS has to schedule one of the job to the CPU.
- Here unlike Batch OS another job can be cheduled to CPU if previous job is executing IO operations.
- Example Linux, Windows.

***

# Multitasking OS

- It's an extension to multiprogramming OS.
- Jobs will be scheduled in a time sharing mode.
- In an multiprogramming OS one job can take CPU time as long as it wants, other job waiting for CPU have to wait. 
- Here unlike multiprogramming OS, we share the CPU between all the procesess equally (using some algorithms).
- Example Linux, Windows.

In multiprogramming we can have multiple processes in memory but can only run only one at a time and we can't preempt running process and get another process in CPU for execution. <br><br> In multitasking OS, we can preempt currently running process and bring another process into CPU. This gives that illusion of many processes running simultaneously.
{: .note}

***

# Multiprocessor OS / Parallel systems

- At a time  multiple processes can run i.e. each on different CPU.
- These systems are reliable, i.e. when a CPU fails another CPU can continue doing the work.

***

# Real time OS

## Hart RTOS

- Here minor delays are not accepted.
- Example, Satelite systems, messilie systems.

## Soft RTOS

- Here minor delays are accepted.
- Example, Banking sector.
