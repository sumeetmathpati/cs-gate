---
title: Static Variables
description: "Static variables"
child_of: "C Programming"
nav_order: 4
---

- We know that global variables are allocated memory in compile time in *static/data* segment of memory, and local variables are sored in *stack*.
- By using keywork`static` in front of variable declaration, we tell compiler that *"allocate the memory for this variable in compile time in static area; even if it's local variable"*.

# Working oF `static` Variables

- Memory allocated at compile time, and stored in the data segment.
- If not initialized; then they have value 0.
- Hence, when a function is a program runs; and it has static variable; it do not redeclare it as it knows it's already declared in *data* section at compile time.