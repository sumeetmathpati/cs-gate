---
title: Optimization
description: "Code optimization"
nav_order: 6
parent: true
---

- Code optimization is a phase in which compiler redices the time and space required by target machine by **removing some unnecessary code.**
- There are two types of optimizations performed by compilers:
    - **Machine independent** [FOR GATE]
        - Optimization on *three address code.*
    - **Machine dependent**
        - Optimization on target code like assembly language.
- Optimization algorithms are **NP-hard.**
- Machine independent optimization is done in following steps:
    - Create Basic Blocks.
    - Create control flow graph.
    - Go inside each block and perform optimization, it's called *local optimization.*

# Basic Blocks

- Basic blocks are TAC having single entry and single entry property.
    - Basic block is composed of instructions
    - Once entered into *basic block*, exit is only at the end (not possible to exit in middle).

# Basic Block Construction Algorithm

- Basic blocks constructed on leader statements.
- Following statements are **leader statements:**
    - First statement is leader statement
    - Target of *goto* (conditional / unconditional) is leader statement.
    - Statement immediately followed by *goto* (conditional / unconditional) is leader statement.
- **One block is consists of statements from one leader statement to another leader statement.**
    - One block should consist of only 1 leader statement.

## Example

{% highlight bf linenos%}
print
i = 1
t1 = i * 4
t2 = a[t1]
t3 = 4 * i
t4 = b[t3]
t5 = t2 * t1
t6 = prod * t1
prod = t6
if i < 20 goto 3
    stop
{% endhighlight %}

- In above TAC, leader statement line numbers are:
    - Line number 1
    - line number 3
    - line number 11
- Therefore the blocks from above TAC are:  
    - We have three leader statements; hence we will have three blocks.

|`print`<br>`i = 1`|
|`t1 = i * 4`<br>`t2 = a[t1]`<br>`t3 = 4 * i`<br>`t4 = b[t3]`<br>`t5 = t2 * t1`<br>`t6 = prod * t1`<br>`prod = t6`<br>`if i < 20 goto 3`
|`stop`|


# Constrol Flow Graph

- Unsing *basic blocks*, we construct a control flow graph.

## Example

- Take three blocks from above example, for those three blocks; we can construct following *control flow graph.*
    - In this control flow graph, we have 
        - Three blocks,
        - We have 5 edges,
        - 5 Nodes (newly added *start* and *end* nodes)

![Control Flow Graph]({{ site.baseurl }}/assets/images/cd/control-flow-example.png)
