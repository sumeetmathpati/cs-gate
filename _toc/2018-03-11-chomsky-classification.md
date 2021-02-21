---
title:  "Chomsky Classification of Grammar"
description: "Chomsky Classification of Grammar. Unrestricted grammar, context sensitive grammar, context free grammar, regular grammar. Turing machine, linear bound automata, push down automata, finite state automata."
serial: 3
---

- A grammar G is defined as a quadruple. `G = ( V, ∑ , P, S)`.
    - `V` is a non-empty finite set of **non-terminals** or variables.
    - `∑` is a non-empty finite set of **terminal symbols** such that `V ∩ ∑ = ∅.`
    - `S ∈ V`, is a special non-terminal (or variable) called the start symbol.
    - `P` is `( V ∪ ∑)* V ( V ∪ ∑)*` is a finite set of production rules.
- In Chomsky hierarchy, grammars are divided into 4 types:

## Unrestricted Grammar

- Also known as **type-0** grammar.
- Language defined by unrestricted grammar are accepted by **Turing machine**.

### Grammar production form:
- `α --> β`
    - `α` is `( V ∪ ∑)* V ( V ∪ ∑)*`
    - `β` is `( V ∪ ∑)*`

### Examples of Context Free Grammars

- `Sαβ –> β`
- `A –> S`

- As we can see we can have any combination of variable `V` and terminals `∑`, and we can have any combination of variables and terminals on the right hand side. Henc it's called **unrestricted grammar**.
    - We need to have at least one variable on left has side.

***

## Context sensitive Grammar

- Also known as **type-1** grammar.
- Language defined by context sensitive grammar are accepted by **Linear Bound automata**.

### Grammar production form
- `α --> β`
    - `α` is `( V ∪ ∑)* V ( V ∪ ∑)*`
    - `β` is `( V ∪ ∑)*`
    - `|α| <= |β|`
    - **It means that the number of symbols `α` is less than or equal to `β`.**

### Examples of Context Free Grammars

- `S –> A`
- `AB –> αS`
- `B –> αβγ`

***

## Context Free Grammar

- Also known as **type-1** grammar.
- Language defined by context sensitive grammar are accepted by **Push Down automata**.

### Grammar production form

- `α --> β`
    - `α` ∈ V (variables) 
    - `|α| = 1`
    - It means that length of the left hand side of the production should be 1.
***

## Regular Grammar

- Also known as **type-3** grammar.
- Language defined by regular grammar are accepted by **Finite State machine**.

### Grammar production form
- `α --> β`
    - `α` ∈ V (variables) 
    - β is $∑^* ∑^*V$
    - `|α| <= |β|`
    - **It means that the number of symbols `α` is less than or equal to `β`.**