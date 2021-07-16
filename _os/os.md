---
title: Operating System
description: "Operating system. GATE Operating system."
permalink: /operating-system/
nav_order: 1
---

- OS is an **interface between user and computer hardware.**    
- OS works as **resource allocator resource and manager**
    - **Resource can be hardware or software.**
- OS makes accessing the resources (like memory, CPU, IO) easy for programmers.
- We use different system calls provided by OS as an interface to interact with resources.
    - Example, We use `printf()` function in C, which calls `write()` function call provided by OS.

# Resources

## HW Resources [COA]

We discuss more about hardware resources in COA.


- CPU
- Registers
- IO devices
- Memory

## SW  [OS]

We discuss more about software resources in OS.

- Semaphore
- Pipes
- Device drivers
- Files

# Goals of OS

- Convenience
- Efficient
- Reliable
- Portable

# Software

- Software is a set of program whicn are composed of instructions working towards a specific goal.

## Application Software

- Characteristics of these software are user friendly.
- Example, MS Word, Notepad etc.

## System Software [IMP]

- Characteristics of these software are system friendly i.e. interacts with hardware system.
- Example, OS, Compiler etc.

In GATE we are going to study system software.
{: .note}

# Syllabus

- OS overall mark weightage is 8-10.

|Topic|GATE weightage|
|-|-|
|Introduction|1-2|
|CPU scheduling [IMP]|2-4|
|Syncronization and IPC [IMP]|2-4|
|Deadlock|1-2|
|Memory management [IMP]|2-4|
|File system|1-2|
|Threads|1-2|