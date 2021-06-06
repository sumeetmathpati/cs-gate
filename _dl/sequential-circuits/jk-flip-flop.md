---
title: JK Flip Flop
child_of:  "Sequential Circuits"
description: "JK Flip Flop"
nav_order: 4
mathjax: true
---

# Block Diagram 

![JK Flip Flop]({{ site.baseurl }}/assets/images/dl/jk-ff-block.png)

# Analyzing JK Flip Flop

## Truth Table 

|J|K|Qn|Qn+1|
|-|-|-|-|
|0|0|0|0|
|0|0|1|1|
|0|1|0|0|
|0|1|1|0|
|1|0|0|1|
|1|0|1|1|
|1|1|0|1|
|1|1|1|0|

## Characteristic Equation

- **Qn+1 = J Qn' + K' Qn**

## Function Table

|J|K|Qn+1|
|-|-|-|
|0|0|Qn|
|0|1|0|
|1|0|1|
|1|1|Qn'|

## Excitation Table

Unlike TT; in escitation table we find out what input at control pins we have give to get desired output.

|Qn|Qn+1|J|K|
|-|-|-|-|
|0|0|0|X|
|0|1|1|X|
|1|0|X|1|
|1|1|x|0|

## State Diagram

- Moore machine representation of SR FF.

![JK Flip Flop State Diagram]({{ site.baseurl }}/assets/images/dl/jk-state-diagram.png)

