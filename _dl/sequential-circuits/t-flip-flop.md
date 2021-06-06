---
title: T Flip Flop
child_of:  "Sequential Circuits"
description: "T Flip Flop"
nav_order: 5
mathjax: true
---

# Block Diagram 

![T Flip Flop]({{ site.baseurl }}/assets/images/dl/t-ff.png)

# Analyzing JK Flip Flop

## Truth Table 

|J|Qn|Qn+1|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|

## Characteristic Equation

- **Qn+1 = T XOR Qn**

## Function Table

|T|Qn+1|
|-|-|
|0|Qn|
|1|Qn'|

## Excitation Table

Unlike TT; in escitation table we find out what input at control pins we have give to get desired output.

|Qn|Qn+1|T|
|-|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|0|

## State Diagram

- Moore machine representation of SR FF.

![T Flip Flop State Diagram]({{ site.baseurl }}/assets/images/dl/t-state-diagram.png)

