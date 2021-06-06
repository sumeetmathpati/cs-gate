---
title: Latch
child_of:  "Sequential Circuits"
description: "Latch"
nav_order: 1
mathjax: true
---

- Latch (or latching) means, holding something so that it doesn't change.
- Latches are basic building blocks of flip-flops.
- Latches are **capable of holding single bit.**
- Latches are level sensitive devices.
    - I.e. latches can be operated with signal levels.

# Latch Circuit

- We can construct latch with *NAND* and *NOR* gates.

![NAND Latch Nor Latch]({{ site.baseurl }}/assets/images/dl/nand-nor-latch.png)

Note the **R** and **S** control lines; both are different in case of different latch circuits.
{: .note}

## Input Output

- As we know latches are storage elements, both the input and output is *Q*.
- We have another output `Q'` which will give exactly complemented output the *Q*.
- *R* and *S* are control inputs.
    - *R* stands for **reset**.
    - *S* stands for **set**.

We can check if the circuit is working correctly by check both (*Q* and *Q'*) outputs. If both the outputs are complemented; then we can assume the circuit is working properly. If both the outputs are same; then there is some problem in circuit.
{: .info}

## Truth Table

### NOR Latch

|S|R|Qn|Qn+1|Behaviour|
|-|-|-|-|-|
|0|0|0|0|Memory|
|0|0|1|1|Memory|
|0|1|0|0|Reset|
|0|1|1|0|Reset|
|1|0|0|1|Set|
|1|0|1|1|Set|
|1|1|0|0|Invalid|
|1|1|1|0|Invalid|

- If we give high input in *R*, the *Q* will be set to high.
- If we give high input in *S*, the *Q* will be set to low.

### NAND Latch

|S|R|Qn|Qn+1|Behaviour|
|-|-|-|-|-|
|0|0|0|0|Invalid|
|0|0|1|1|Invalid|
|0|1|0|1|Set|
|0|1|1|1|Set|
|1|0|0|0|Reset|
|1|0|1|0|Reset|
|1|1|0|0|Memory|
|1|1|1|0|Memory|

- If we give high input in *S*, the *Q* will be set to high.
- If we give high input in *R*, the *Q* will be set to low.