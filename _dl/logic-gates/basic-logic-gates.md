---
title:  "Basic Logic Gates"
description: "Logic Gates tutorial basic gates, and gate, or gate, not gate, xor gate, xnor gate, nor gate, nand gate"
child_of: Logic Gates
nav_order: 1
mathjax: true
---

Following are all the logic gates.

![32 Bit Single Precision Floating Point Representation]({{ site.baseurl }}/assets/images/dl-logic-gates.png)

# Basic Gates

- Basic gates satisfy:
    - Idempotent,
    - Assiciative, and
    - Commutative laws.

## NOT Gate

- Also known as inverter.
- It's an unary operator, and hence take only single input.

***

## AND Gate

- It can take two or more than two inputs.
- It's also known as logical multiplication.
- **The output is high if all the inputs are high.**

***

## OR Gate

- It can take two or more than two inputs.
- It's also known as logical addition.
- **The output is high, if any one input is high.**

# Universal Gates

- These gats can be used to construct any circuits.
- Universal gates **DO** satisfy:
    - Commutative laws
- Universal **DO NOT** satisfy following properties:
    - Idempotent
    - Associativity

## NOR Gate

- It's simply an **OR gate followed by NOT gate.**
- Output will be **high** if and only if **all the inputs are low.**


### Properties

- **NOR with itself:**
    - a NOT a = a'
- **NOR with 0:**
    - a NOR 0 = a'
- **NOR with complement:**
    - a NOR a' = 0
- **NOR with 1:**
    - a NOR 1 = 0
- **Associative**
    - It does not satisfy associative law
- **Commutative**
    - A NOR B = B NOR A

***

## NAND Gate

- It's simply an **AND gate followed by NOT gate.**
- Output will be **low** if and only if **all the inputs are low.**

### Properties

- **NOR with itself:**
    - a NAND a = a'
- **NOR with 0:**
    - a NAND 0 = 1
- **NOR with complement:**
    - a NAND a' = 1
- **NOR with 1:**
    - a NAND 1 = a'
- **Associative**
    - It does not satisfy associative law
- **Commutative**
    - A NAND B = B NOR A

# Special Purpose Gates

- These gates **DO** satisfy:
    - Commutative laws
    - Associative property
- Universal **DO NOT** satisfy following properties:
    - Idempotent

## XOR Gates

- Symbol: ⊕
- Output will be **high if both the inputs are different.**
- Generally if number of **1's or high inputs are odd, then output will be high.**
- XOR function **f = a.b' + a'.b**
- XOR = (XNOR)'

### Properties

- **XOR with itself:**
    - a XOR a = 0
- **XOR with 0:**
    - a XOR 0 = a
- **XOR with complement:**
    - a XOR a' = 1
- **XOR with 1:**
    - a XOR 1 = a'
- **Associative**
    - (A XOR (B XOR C)) = ((A XOR B) XOR C)
- **Commutative**
    - A XOR B = B XOR A 
***

## XNOR Gates

- Symbol: ⊙ 
- Output will be **high if both the inputs are same.**
- Generally if number of **0's or low inputs are even, then output will be high.**
- XNOR function **f = a.b + a'.b'**
- XNOR = (XOR)'

### Properties

- **XNOR with itself:**
    - a XNOR a = 1
- **XNOR with 0:**
    - a XNOR 0 = a'
- **XNOR with complement:**
    - a XNOR a' = 0
- **XNOR with 1:**
    - a XNOR 1 = a 
- **Associative**
    - (A XOR (B XOR C)) = ((A XOR B) XOR C)
- **Commutative**
    - A XOR B = B XOR A 

***

## XOR and XNOR Relation

- **a XNOR b**
    - = (a XOR b)' 
    - = a' XOR b 
    - = a XOR b' 
    - = (a' XOR b')' 
    - = a' XNOR b' 
    - = (a' XNOR b)'
    - = (a XNOR b')'
- **a XOR b**
    - = (a XNOR b)' 
    - = a' XNOR b
    - = a XNOR b'
    - = (a' XNOR b')'
    - = a' XOR b'
    - = (a' XOR b)'
    - = (a XOR b')'**

### Relation

- Suppose we have XOR gate, see figure A) in following picture.
- We will have three places to add NOT gate: 2\*INPUTS and 1\*OUTPUT, see figure B) in following picture.
- If we add **odd number of NOT gates** anywhere; it will be **XNOR gate.**
- If we add **even number of NOT gates** anywhere; it will be **XOR** gate again.

![XOR And XNOR Gate Relation]({{ site.baseurl }}/assets/images/dl-xor-xnor-relation.png)


