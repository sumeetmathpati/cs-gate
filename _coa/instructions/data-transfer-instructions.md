---
title: Data Transfer Instructions
description: "Memory addressing modes in computer organization."
child_of: Instructions
nav_order: 11
sub: true
---


- We transfer data from source to destination without changing the data.
- Here the constraint is, source may or may not have storage capability, but destination must have storae (otherwise where else we store the data)
    - Example, immediate data in the instruction (example `ADD r0, #1`) do not have storage capability the the destination has storage to store the data.
- There are different types of data transfer operations.

# Move Operation (MOV):

- It's a general purpose data transfer operation.
- Data can be transfered between:

|Source|Destination|
|-|-|
|Register|Register|
|Register|Memory|
|Memory|Register| 

***

# Load and Store

- These are memory related data transfer operations.

***

# Push and POP

- These are stack related data transfer operations.

***

# In and OUT

- These are input and output related data transfer oeprations.

