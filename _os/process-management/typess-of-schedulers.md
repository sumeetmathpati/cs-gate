---
title: Types of schedular
nav_order: 2
description: "Types of CPU schedulers. Long term scheduler, mid term scheduler and short term scheduler."
child_of: Process Management
---

# Long term schedular

- This brings process from new state to ready state.
- Hence it **increases the degree of multiprogramming.**

If long term schedular brings only CPU bound procesess in memory, CPU utilization increases and throughput descreases. <br><br>
If long terms cedular brings only IO bound procesess in memory, CPU utilization descreases and throughput increases. <br><br>
Hence instaed of increasing LTS **controls** the degree of multiprogramming. <br><br>
Hence long term schedular has to bring best combination of CPU and IO bound process.
{: .note}

***

# Mid term schedular

- This brings process from ready or wait/block state to suspend sate and vice versa. 
- It's also called **swapping.**
- It descreases the **descreases the degree of multiprogramming.**

Note that when mid term resumed the process it doesn't increae the degree of multiprogramming because if only resumes the process when any process leaves the main memory and hence number of processes in main memory remains same.
{: .info}

***

# Short term schedular

- This schedules the process from ready state to running state.

