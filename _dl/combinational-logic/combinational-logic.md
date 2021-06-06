---
title:  "Combinational Logic"
description: "Combinational logic circuit"
parent: true
nav_order: 5
mathjax: true
---

- **When a logic gates are connected together to produce a specific output on certain combinations of input variables, with no memory involved; then the resulting circuit is called combinational circuit.**
- In combinational logic circuit, the **output of the circuit is determined by current combination of the inputs without regard to the previous inputs.**
    - Output is a function of input, i.e. Output = f(input).
- For $n$ boolean variables, there are $2^n$ possible input combinations; for each input combination; there is only one output.
- A combinational circuit with m outpus can be expressed with m boolean functions, each for one output variable. Each output function is expressed in terms of $n$ input variables.

# Usage

- Some examples of combinational circuits are adder, subtractor, MUX, DEMUX, encoder, edocder, code-converters etc.

- Combinational circuits are used in 
    - **ALUs**, 
        - Adders, subtractors, comparators etc.
    - **data transmission devices**, 
        - MUX, DEMUX, encoders, decoders etc.
    - **code converters**
        - Binary, BSD, Gery etc.
    - etc.

# Combinational Circuit Design Procedure

1. Problem statement.
2. Number of input and output variables.
3. Assign variable symbol to the input and output variables.
4. Truth table to determine the relationship between the input and outputs.
5. Obtin simplified boolean expression for each output.
6. Draw logic diagram.