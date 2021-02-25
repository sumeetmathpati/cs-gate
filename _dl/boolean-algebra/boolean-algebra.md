---
title:  "Boolean Algebra"
description: "Boolean Algebra tutorial."
parent: true
nav_order: 3
mathjax: true
---

- In 1854 George Boole introduces a systematic treatment of logic and for this purpose developed algebric system called **Boolean Algebra.**
- Boolean algebra is an algebric structure defined on a set of elements B with tewo binary operations $+$ nad $\times$.

# Ordinary vs Boolean Algebra

- Boolean algebra as only two symbols: $B = \\{0, 1\\}$.
- Boolean algebra has operators: 
    - $+$ (OR),  
    - $\times$ (AND), and 
    - ~ (NOT.)
- Distributive property of $+$ over $\times$ i.e. $x + (y \times z) = (x + y) \times (x + z)$, is valid in Boolean algebra; but not in ordinary algebra.
- Complement
    - In Boolean algebra, for every element $x \in B$, there exists an element $x' \in B$ (called complement of $x$) such that
        - $x + x' = 1$
        - $x \times x' = 0$
    - Complement doesn't exist in ordinary algebra.

# Properties of Operators

- We know that Boolean algebra has two operators which are $+$ and $\times$.
- These operatos satisfy following properties:

## Idempotent

- $x + x = a$
- $x \times x = x$

***

## Associative

- $a \times (b \times c) = (a \times b) \times c$
- $a + (b + c) = (a + b) + c$

***

## Closure

***

## Identity

- For $+$, 0 is an identity element.
- For $\times$, 1 is an identity element.

***

## Commutative

- $x + y = x + x$
- $x \times y = y \times x$

***

## Distribitive

- $x \times (y + z) = (x \times y) + (x \times z)$
- $x + (y \times z) = (x + y) \times (x + z)$

# Basic Theorems and Properties

## Postulates

- $x + 0 = x$
- $x \times 1 = x$ 
- $x + x' = 1$
- $x \times x' = 0$
- $x + x = x$
- $x \times x = x$
- $x + 1 = 1$
- $x \times 0 = 0$
- $(x')' = x$
- Commutative
        - $x + y = x + x$
        - $x \times y = y \times x$
- Distribituve
    - $x \times (y + z) = (x \times y) + (x \times z)$
    - $x + (y \times z) = (x + y) \times (x + z)$
- Associative
    - $x + (y + z) = (x + y) + z$
    - $x \times (y \times z) = (x \times y) \times z$
- DeMorgan
    - $(x + y)' = x'y'$
    - $(x \times y)' = x' + y'$
- Absorption
    - $x + xy = x$
    - $x(x + y) = x$

## Duality

- Example   
    - We knwo that $1 + 0 = 1$ is true or correct statement.
    - By the duality principle we can also say that, $0 \times 1 = 0$ this statement is also true.
- **Duality Principle** says that:
    - If we invert
        - **0 with 1**,  
        - **1 with 0**, 
        - **$\times$ with $+$**, and 
        - **$+$ with $\times$** from a boolean equation which is true
    - Then we will get new equation which will also be true.


# Operator Precedence

- The operator precedence for expression evaluatio is
    - Parentheses
    - NOT
    - AND
    - OR5