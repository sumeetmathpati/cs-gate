---
title: D Flip Flop
child_of:  "Sequential Circuits"
description: "T Flip Flop"
nav_order: 6
mathjax: true
---

# Block Diagram 

![D Flip Flop]({{ site.baseurl }}/assets/images/dl/d-ff.png)

# Analyzing JK Flip Flop

## Truth Table 

|D|Qn|Qn+1|
|-|-|-|
|0|1|0|
|0|0|0|
|1|1|1|
|1|0|1|

## Characteristic Equation

- **Qn+1 = D**

## Function Table

|D|Qn+1|
|-|-|
|0|0|
|1|1|

## Excitation Table

Unlike TT; in escitation table we find out what input at control pins we have give to get desired output.

|Qn|Qn+1|T|
|-|-|-|-|
|0|0|0|
|0|1|1|
|1|0|0|
|1|1|1|

## State Diagram

- Moore machine representation of SR FF.

![D Flip Flop State Diagram]({{ site.baseurl }}/assets/images/dl/d-state-diagram.png)

