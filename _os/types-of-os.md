---
title: Types of Operating Systems
nav_order: 2
---

# The Batch OS

- When computer starts batch of jobs are given to the computer.
- The task of OS is to schedule these jobs to the CPU.
- Unit first job is finishing its execution completely that is (CPU time + IO time) OS will not schedule another joc on CPU.
- Example, IBM OS/2.

## Spooling

- The batch OS is also called spooling OS.
- Spooling is **used where reciever is slow and sender is fast.**
- SPOOL is temporary buffer where we store jobs.
- Example, printer uses spooling to store printing jobs.

## Problems

- When a job is executing, IO operations CPU will be idle, and hence CPU throughput will decrease
- But in batch OS, no other job can be scheduled to the CPU until previous job is completely finished.

***

# Uniprogramming OS

- In this OS, we can bring only one program from secondary storage to memory to run.
- As there is only 1 progrmain main memory, there is no need to scheduling algorithm.
- Example of uniprogramming OS is DOC.
- The difference between batch and uniprogramming OS is, in batch OS we used to have punch cards and card reader. We have to manually put cards to run them. But in uniprogramming OS, we has software OS in which programs were written in a files on secondary memory.

***

# Multiprogramming OS

- As name suggests, **in memory we will have more than one jobs.**
- Here the OS has to schedule one of the job to the CPU.
- Unlike Batch OS, here another job can be cheduled to CPU if previous job is executing IO operations.
    - CPU utilization is more and hence **throughput will increase.**
- Example Linux, Windows.

***

# Multitasking OS

- It's an extension to multiprogramming OS.
- Jobs will be scheduled in a time sharing mode and hence **it's also called time sharing OS.**
- In an multiprogramming OS one job can take CPU time as long as it wants, other job waiting for CPU have to wait. 
- Here, unlike multiprogramming OS, we share the CPU between all the procesess equally (using some algorithms).
- Example Linux, Windows.

*Preemption* means, forcefully deallocating/taking resources allocated to the process.
{: .info}

In multiprogramming we can have multiple processes in memory but can only run only one at a time and we can't preempt running process and get another process in CPU for execution. <br><br> In multitasking OS also we can run only one process at a time, but here we preempt/switch currently running process and bring another process into CPU. This gives that illusion of many processes running simultaneously.
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
