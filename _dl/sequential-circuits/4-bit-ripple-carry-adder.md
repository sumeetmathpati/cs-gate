---
title:  "4-bit Ripple Carry Adder"
description: "4-bit Ripple Carry Adder tutorial"
child_of: Combinational Logic
nav_order: 2
sub: true
mathjax: true
---

- It's a combinational circuit which can add two, 4-bit binary numbers.

# Structure

- To implement this, we have to connect **4 full adders** in cascading fasion. 
- We have three input pins to each full adder.
- Each bit of number passed to the each full adder.
    - Bits of same significane position in both numbers should be passed to the same full adder
    - Now each adder has one input unconnected.
- The carry output of full adder which has lesser significant bits as input is connected to the input pin of full adder which has higher significance bit as an input.
- A first full adder won't be having any input to it's carry input.

![4 Bit Ripple Carry Adder]({{ site.baseurl }}/assets/images/dl-4-bit-ripple-carry-adder.png)

# Disadvantages

- It can only perform addition operation, i.e. we cant perform operation like (a + (-b)) = (a - b).
- It has carry propogation delay.
    - Until the previous adder calculate the carry, the next adder can't calculate the result.
    - Hence to get the correct result all the adders must calculate the result one by one.
    - Hence if each adder performs one operation in one clock, we will require n clocks to perform addition of n bit number.

# Modify to Create Subtractor

- This modification is done to solce the first disadvantage given above.
- We modify this circuit with XOR gate to achieve subtractor functionality.
- Adding negetive number into a positive number is called subtraction, and negetive numbers are shown with 2'c complement.
    - 2's complement can be get by adding 1 to 1's complement of a number.

## Modification

- We've added XOR gate to the one of the input of the full adder.
- We are passing the bit of the number to be subtracted to the one of the inputs of XOR gate.
- Other input of XOR gates are shorted and connected to the carry of the first full adder $C_0$.

![4 Bit Ripple Carry Adder and Subtractor]({{ site.baseurl }}/assets/images/dl-4-bit-ripple-carry-adder-subtractor.png)

### Working

- This circuit works as adder when $C_0$ is 0. 
    - Because $a ⊕ 0 = a$, and hence the input bits of the numbers are directly passed as it is to the full adder.
- This circuit works as subtractor when $C_0$ is 1. 
    - Because we know that $a ⊕ 1 = a'$, therefore all bits will be complemented and we are adding 1 from $C_0$ pin.
    - Hence the second number will be added will get converted to it's 2's complement form.

Note that we do not explicitely convert the number to be subtracted in 2's complement, we just make $C_0$ 1 and circuit will donvert the number in 2's complement form.
{: .note}