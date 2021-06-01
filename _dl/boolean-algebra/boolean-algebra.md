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

- $x + x = x$
- $x \times x = x$

***

## Associative

- $a \times (b \times c) = (a \times b) \times c$
- $a + (b + c) = (a + b) + c$

***

## Identity

- $a + 0 = a$
    - For $+$, 0 is an identity element.
- $a \times 1 = a$
    - For $\times$, 1 is an identity element.


***

## Commutative

- $x + y = x + x$
- $x \times y = y \times x$

***

## Distribitive

- $x \times (y + z) = (x \times y) + (x \times z)$
- $x + (y \times z) = (x + y) \times (x + z)$

## De Morgan's Law

- $(a+b)' = a' \times b'$
- $(a \times b)' = a' + b'$

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


# Operator Precedence

- The operator precedence for expression evaluatio is
    - Parentheses
    - NOT
    - AND
    - OR5
