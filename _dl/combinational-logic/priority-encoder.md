---
title:  "Priority Encoders"
description: "Priority tutorial"
child_of: Combinational Logic
nav_order: 11
mathjax: true
sub: true
---

- In some practical cases, more than one input line can be high. There we can't use simple encoders.
- In a priority enoder, more than one input line can be high at a time.
- A priority encoder is an encoder circuit that includes the priority function.
- The operation of priority encoder is such that; it more than one inputs are equal to 1 at the same time, the input having higher priority will take precedence.

# Example

- Let's say we have 4 input lines *I0*, *I1*, *I2* and *I3*
- Let's say our priorities are as follows:
    - I2 > I3 > I0 > I1

|I3|I2|I1|I0|O1|O0|
|-|-|-|-|-|-|
|0|0|x|0|0|0|
|0|0|1|0|0|1|
|x|1|x|x|1|0|
|1|0|d|d|1|1|