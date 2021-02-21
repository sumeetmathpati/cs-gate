---
title: Scheduling Algorithms
nav_order: 4
description: ""
child_of: Process Management
---

- Processes in ready state are ready to be executed.
	- **Short term scheduler** schedules processor from ready state to execution.
	- Hence it also called **CPU schedular.**
- Scheduling algorithm decide which process to schedule now.

***

# Goals of CPU scheduling algorithms

- CPU utilization and throughput should be maximum.
- Average turn aroung time and waiting time should be minimum.

***

# Scheduling Algorithms

If the criteria being used for selecting processes to schedule are match for more than one process then **priority given to the processes having minimum arrival time and then process having minimum PID.**
{: .note}

***

## 1. FCFS (First Come First Served)

- **Criteria:** Minimum arrival time.
- **Mode:** Non preemptive.
- There will be **no starvation.**
- **Observation:**
	- If the first process is CPU bound process, it creates huge average waiting time. It's **called convoy effect**

***

## 2. SJF (Shortest Job First)

- **Criteria:** Minimum burst time.
- **Mode:** Non preemptive.
- There will be an issue of **starvation.**

This is can't be implemented, as CPU can't be aware of burst time of process.
{: .note}

***

## 3. SRTF (Shortest Remaining Time First) 
IMP GATE
{: .label .label-green}

- **Criteria:** Minimum burst time.
- **Mode:** Preemptive.
- There will be an issue of **starvation.**

This is can't be implemented, as CPU can't be aware of burst time of process.
{: .note}

***

## 4. Priority based scheduling - Non preemptive

- **Criteria:** Priotity.
- **Mode:** Non preemptive.

***

## 5. Priority based scheduling - Preemptive

- **Criteria:** Priotity.
- **Mode:** Preemptive.
- There will be an issue of **starvation.**

***

## 6. LJF (longest job first)

- **Criteria:** Maximum burst time.
- **Mode:** Non preemptive.
- There will be an issue of **starvation.**

This is can't be implemented, as CPU can't be aware of burst time of process.
{: .note}

***

## 7. LRTF (Longest Remaining Time First)

- **Criteria:** Minimum burst time.
- **Mode:** Preemptive.
- There will be **no starvation.**

This is can't be implemented, as CPU can't be aware of burst time of process.
{: .note}

***

## 8. Round Robin 
IMP GATE
{: .label .label-green}
- **Criteria:** Time quantum.
- **Mode:** Preemptive.
- There will be **no starvation.**
- Many modern OS use this algorithm.
- **Observation:**
	- If we increase the time quantum
		- Context switches will descrease
		- response time will increase.

***

## 9. HRRN (Highest Response Ratio Next)

- **Criteria:** Highest response ratio.
- **Mode:** Non preemptive.
- **Response ration:** [(waiting time + burst time)] / Burst time
- This algorithm favours shorter jobs (like SRTF) but (unlike SRTF) also limits waiting time of longer jobs.
- There will be **no starvation.**

This is can't be implemented, as CPU can't be aware of burst time of process.
{: .note}

***

## 10. Multi level queue scheduling algorithm

- Here we have multiple ready queues.
- We place processes in different ready queue according to their priority.
- In top level ready queeu we have procecsess with highest priority. And in bottom level we have procesess wit least priority.
- We start executing from top level.
- There will be an issue of **starvation.**


***

## 11. Multi level feedback queue scheduling algorithm

- This algorithm solve the problem of starvation in previous algorithm.
- Here all the levels except last level has round robin algorithm. Last level has FCFS algorithm.
- Here all the procesess are places in first level.
	- If they get executed in given time quantumn, they terminate.
	- If they still haven't finished, they placed in next level and so on.
- There will be an issue of **starvation.**

***

# Ageing

- Ageing is a concept used to avoid the problem of starvation.
- If the age of the process increases, its priority should be increased.