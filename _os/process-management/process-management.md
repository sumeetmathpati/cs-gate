---
title: Process Management
parent: true
nav_order: 3
---

- **Process is program under execution.**
- Some more definitions of process are:
    - Process is schedulable unit.
    - Process is executable unit/
    - Process is instance of program
- Process resides in **main memory.**
- To execute instructions in program, it should aquire processor.

***

# Attributes of Process

- The process have various attributes.
    - It's also called the **context of the process.**
- It's stored in **Process control block (PCB).**
- Each process has it's own PCB **stored in main memory.**

![Process Control Block]({{ site.baseurl }}/assets/images/os-pcb.png)

- Some of the process attributes are:
    - **PID**
        - Unique ID given to process by OS at the time of process creation.
        - Used to identify the process.
    - **Process state**
        - Process state denoted the current state of process.
    - **Program counter**
        - Program is a set of instructions.
        - PC stores the address of next instruction which will be executed When process will be schedules for execution.
            - Process may be new or was preemted before.
    - **Priority**
        - Value assigned to the process assigned by OS at the time of creation.
    - **Open files**
        - Files being used by the process.
    - **Open devices**
        - IO devices being used by the process.
    - **Registers**
        - Registers being used by the process.

***

# Operations on process

- **Creating**
- **Scheduling**
- **Dispatching**
- **Executing**
- **Terminating / killing**
- **Suspending**
- **Resuming**		

***

# Types of Process

- Process can be **CPU bound** or **IO bound**.
- If CPU requries more CPU execution time than IO operation; it's a CPU bounded process.
- If CPU reuires more IO execution time; it's a IO bound process.