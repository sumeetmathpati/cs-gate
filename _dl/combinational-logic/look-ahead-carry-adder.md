---
title:  "Look Ahead Carry Adder"
description: "Look Ahead Carry Adder"
child_of: Combinational Logic
nav_order: 3
sub: true
mathjax: true
---

- This adder circuit used to remove second disadvantage of ripple adder which is the delay in calculating the sum.
    - In ripple an adder can calculate the result only after it gets the carry from previous adder.
- The idea of look ahead carry generator is to **look at the lower order bits and predict if a higher order carry is to be generated.**
- For that purpose it used two functions
    - **Carry generator (Gi)**
    - **Carry propogator (Pi)**
- Please revise the diagram of *Full adder using hald adder* in previous chapter, we shall be using that to implement this *look ahead carry generator*.

![4 Bit Ripple Carry Adder]({{ site.baseurl }}/assets/images/dl-4-bit-ripple-carry-adder.png)

# Structure

- We use full adders composed of two half adders.
- The carry output by first half adder is called **carry generator (Gi).**
- The sum output of first half adder is called **carry propogator (Pi).**

![4 Bit Ripple Carry Adder]({{ site.baseurl }}/assets/images/dl-look-ahead-carry-generator-circuit.png)

# Working

- We have following functions:
    - $P_i = A ⊕ B$
    - $G_i = A_i B_i$
    - $S_i = P_i ⊕ C_i$
    - $C_{i+1} = C_i + (P_i C_i)$
- To calculate the whether the carry generated of not we start putting the values in $i$.
    - $C_1 = G_0 + P_0 C_0$ ... $i=0$
    - $C_2 = G_1 + P_1 C_1$ ... $i=1$
    - $C_3 = G_1 + P_2 C_2$ ... $i=2$
- Replace the values and substitude the values we know at the start , and we don't have to wait for them.
    - $C_1 = G_0 + P_0 C_0$ ... we have these at start.
    - $C_2 = G_1 + P_1 (G_0 + P_0 C_0)$
    - $C_3 = G_1 + P_2 (G_1 + P_1 (G_0 + P_0 C_0)) ... i=2$    
- So, we have all the carri's ($C_1$, $C_2$, and $C_3$) at the start and hence all the full adders can calculate the result without waiting for any other full adder to finish.
