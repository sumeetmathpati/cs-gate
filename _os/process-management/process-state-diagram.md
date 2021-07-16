---
title: Process State Diagram
description: "Process state diagram. New state, ready state, suspended state, wait state, block state, and terminated state."
child_of: Process Management
nav_order: 1
---

![Process State Diagram]({{ site.baseurl }}/assets/images/os-process-state-diagram.png)

## New state

- Initially when process is in new state.
- In this state, process is **not yet in main memory.**
- In this state, process is **being created.**
- After successfully creating the process, it's placed in ready state.
- Getting process from new state to ready state is done by **long term scheduler**.

***

## Ready State

- When process is created it's **placed in main memory.**
- There can be more than one processes present in ready state waiting to get execution started. 
- One of the proecess is selected and scheduled for CPU and goes to running state.
- Getting process from ready state to running state is done by **short term scheduler**.

***

## Suspend Ready State

- When the resources (main memory) are not sufficient to manage the process in ready state, some of the processes are suspended and moved to suspend ready state **(in secondary memory).**
- The process is again placed into ready state when resources get available.
- Suspending and resuming process is done by **mid term scheduler.**

***

## Running State

- After the **process is scheduled**, it goes in ready state.
- It starts executing its instructions.
- There is only one process in running state.
- As we know when process is preempted (in case of multitasking OS) it again placed into ready state.

***

## Wait / Block State

- If process require IO time, it is places in the wait state.
- Unlike cpu execution, multiple processes can do IO execution / operation simultaneously.
- Hence **more than one process can exist in this state.**
- **After completing IO operations, process again goes to ready state.**

***

## Suspended Wait Block State

- When the resources (main memory) are not sufficient to manage the process in wait block state, some of the processes are suspended and moved to suspend wait block state **(in secondary memory).**
- The process is again placed into wait block state when resources get available.
- Suspending and resuming process is done by **mid term scheduler.**

***

## Terminated State

- If the running process completes it's execution, it's placed in termination state.  
- After termination, all the resources of process are deallocated.

***

