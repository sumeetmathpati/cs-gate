---
title: SR Flip Flop
child_of:  "Sequential Circuits"
description: "SR Flip Flop"
nav_order: 2
mathjax: true
---

# Flip Floop And Latch Relation

- In latch circuits; we may get values at **R** or **S** changed unintentionally and may loose the value stored in the latch.
- So, we have to add some mechanism to pervent those changes and we can use those **R** and **S** pins according to our needs.
- Hence we add that mechanism with which we get an enable pin. We can change the values of **R** and **S** only when the value at enable is **high**.

![SR Flip Flop]({{ site.baseurl }}/assets/images/dl/sr-ff.png)

# Flip Flop Modes

- Flip flop works in two modes
    - **Transparent mode**
        - When the eanble line is high (enabled) the SR flip flop is in transparent mode.
    - **Latch mode**
        - When enable line is low (disabled) then the SR flip flop is in latched mode. The *S* and *R* pins won't recieve input and the data inside the FF will not change.

# Block Diagram 

![SR Flip Flop]({{ site.baseurl }}/assets/images/dl/sr-ff-block.png)

# Analyzing SR Flip Flop

## Truth Table 

|S|R|Qn|Qn+1|
|-|-|-|-|
|0|0|0|0|
|0|0|1|1|
|0|1|0|0|
|0|1|1|0|
|1|0|0|1|
|1|0|1|1|
|1|1|0|x|
|1|1|1|x|

## Characteristic Equation

- **Qn+1 = S + R'Qn**

## Function Table

|S|R|Qn+1|
|-|-|-|
|0|0|Qn|
|0|1|0|
|1|0|1|
|1|1|Invalid|

## Excitation Table

Unlike TT; in escitation table we find out what input at control pins we have give to get desired output.

|Qn|Qn+1|S|R|
|-|-|-|-|
|0|0|0|x|
|0|1|1|0|
|1|0|0|1|
|1|1|x|0|

## State Diagram

- Moore machine representation of SR FF.

![SR Flip Flop State Diagram]({{ site.baseurl }}/assets/images/dl/sr-state-diagram.png)

