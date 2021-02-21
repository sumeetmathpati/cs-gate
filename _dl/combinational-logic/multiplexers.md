---
title:  "Multiplexers"
description: "Multiplexers tutorial"
child_of: Combinational Logic
nav_order: 6
mathjax: true
---

- A digital multiplexer is a **combinational circuit which selects binary information from one of many input lines and directs it to single output line.**
- The selection of one input line is done by **selction lines.**
- If there are $n$ selsect lines; then $2^n$ input lines can be controlled.
- For understanding purpose, let's see 4x1 multiplexer.

# 4x1 Multiplexer

- Here we have 4 inputs, as it's a 4-to-1 multiplexer.
- To control these 4 input lines, we need $log_2 \, 4$ selection lines.
    - Because with $n$ selsect lines; we can control $2^n$ input lines.
- We also may have enable pin. If it's set to 1 the nultiplexer will be on, else it will be off. 

![4x1 Multiplexer]({{ site.baseurl }}/assets/images/dl-4-to-1-mux.png)


## Implementation

- The inner implementation of 4x1 multipleer is given in following diagram.
    - We five three input to the 4 different AND gates.
        - Two inputs will be select lines.
        - One input will be one of the input line.
    - The select line inputs are complemented according to our need to get input line selected and outputed to the output line.

![4x1 Multiplexer]({{ site.baseurl }}/assets/images/dl-4-to-1-mux-function-table-characteristic-equation.png)

- According to above table and equation the following circuit will be constructed.

![4x1 Multiplexer]({{ site.baseurl }}/assets/images/dl-4-to-1-mux-circuit.png)

