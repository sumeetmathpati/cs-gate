---
title: Chomsky Hierarchy
description: "Chomsky Hierarchy."
nav_order: 2
child_of: Grammars
mathjax: true
---

- All the grammars are composed of production rules.
- Production rules are in the form of *X --> Y*.
    - *X* should contain at least single variable.
- In Chomsky hierarchy, grammars are divided into 4 types.
- **Type 3 ⊆ Type 2 ⊆ Type 1 ⊆ Type 0**
- **Regular langauges ⊆ Context free languages ⊆ Context sensitive languages ⊆ Recursive enumerable languages.**

![Chomsky Classification]({{ site.baseurl }}/assets/images/toc/chomsky-hierarchy.png)

# Type 0 

- Also called **unrestricted grammar.**
- $X \to Y$
    - $X$ is $(V \cup T)^* V (V \cup T)^*$
    - $Y$ is $(V \cup T)^*$
- As we can see there is no restriction on the left and right hans side of the production (except that LHS should contain at least single variable which is for all grammars).

# Type 1

- Also called **context sensitive grammar.**
- Its also a *type-0* grammar.
- $X \to Y$
    - $\|X\| \le \|Y\|$
- As we can see that there is a restriction on the LHS.

# Type 2

- Also called **context free grammar.**
- It's also a *type-1* grammar.
- $X \to Y$
    - $\|X\| = 1$
- As we can see there is a stronger condition on the LHS that *type-2* grammar.

# Type 3

- It's also called **regular grammars.**
- It's also a *type-2* grammar.
- $X \to Y$
    - $\|X\| = V$
    - $\|Y\| = VT \| T$ (left linear grammar) **OR** $\|Y\| = TV \| T$ (right linear grammar).

***

# Linear Grammar

*It's not a type of chomsky hierarchy, it's just a type of grammar which some specific tyep of productions.*

- Class of linear grammar are subset of context free grammars and superset of regular grammar.
- Each production of linear grammar appears as: V --> **T<sup>*</sup>VT<sup>*</sup> \| T<sup>*</sup>**
- Left hand side contains single variable or non-terminal.
- Right hand side contains at most one variable.
- **S --> aSb \| aS \| Sb \| a \| b** is linear grammar.


## Left Linear Grammar

- Class of left linear grammars are subset of linear grammars.
- Each production of left linear grammar appears as: **V --> VT<sup>*</sup> \| T<sup>*</sup>**, where V is a variable and T is terminal.
- **S --> Sa \| Sb \| a \| b** is left linear grammar and hence **also a regular grammar.**

***

## Middle Linear Grammar

- Class of left linear grammars are subset of linear grammars.
- Each production of left linear grammar appears as: **V --> T<sup>*</sup>V T<sup>*</sup>\| T<sup>*</sup>**, where V is a variable and T is terminal.
- **S --> aSb \| a \| b** is middle linear grammar but **NOT a regular grammar.**

## Right Linear Grammar

- Class of right linear grammars are subset of linear grammars.
- Each production of right linear grammar appears as: **V --> T<sup>*</sup>V \| T<sup>*</sup>**, where V is a variable and T is terminal.
- **S --> aS \| bS \| a \| b** is left linear grammar and hence **also a regular grammar.**

Regular grammars are only generate left or right linear grammar and not middle linear grammar.
{: .note}