---
title: Regular Grammar
description: "Regular Grammar."
nav_order: 6
child_of: Regular Languages
---

- All the productions of regular grammar are either left linear or right linear productions.
- **A grammar is regular if it's either left linear of right linear.**

# Types of Grammars

## Linear Grammar

- Class of linear grammar are subset of context free grammars and superset of regular grammar.
- Each production of linear grammar appears as: V --> **T<sup>*</sup>VT<sup>*</sup> \| T<sup>*</sup>**
- Left hand side contains single variable or non-terminal.
- Right hand side contains at most one variable.
- **S --> aSb \| aS \| Sb \| a \| b** is linear grammar.

***

## Left Linear Grammar

- Class of left linear grammars are subset of linear grammars.
- Each production of left linear grammar appears as: **V --> VT<sup>*</sup> \| T<sup>*</sup>**, where V is a variable and T is terminal.
- **S --> Sa \| Sb \| a \| b** is left linear grammar and hence also a regular grammar.

***

## Right Linear Grammar

- Class of right linear grammars are subset of linear grammars.
- Each production of right linear grammar appears as: **V --> T<sup>*</sup>V \| T<sup>*</sup>**, where V is a variable and T is terminal.
- **S --> aS \| bS \| a \| b** is left linear grammar and hence also a regular grammar.

# Equivalence of Grammars

- Regular grammar, left linear grammar and right linear grammar are always possible to generate the string of given regular languages.
- **Regular grammars ≅ Left linear grammars ≅ Right linear grammars**
- All these three grammars generate same class of language called regular languages.

# Conversion from RLG to Finite Automata

# Conversion from Finite Automata to RLG

- Steps:
    - Initial state act as start symbol.
    - If **δ(A, a) = B**, then
        - A --> aB is production if B is not final state.
        - A --> aB | a is production if B is a final state.

# Closure Properties of Regular Grammar

# Closure properties of Regular languages

## Union

- Union of two regular languages is always a regular language.
- Regualr languages are **closed under union** operation but **not closed under infinite union** operation
 
## Intersection

- Regualr languages are **closed under intersection** operation but **not closed under infinite intersection** operation

## Concatenation

- Regualt languages are **closed** under concatenation operation.

## Complement

- Complement of regular language is **always regular.**

## Kleene closure

- Regular languages are **closed under Kleene's closure.**

## Kleene plus

- Regular languages are **closed under Kleene plus operation.**

## Subset

- Regular languages are **not closed under subset operation.**

## Reverse

- Regular languages are **closed under reverser operation.**

## Prefix

- Regular langugaes are **closed under prefix operation.**

## Suffix

- Regular languages are **closed under suffix operation.**

## Right quotient

- Regualr languages are **closed under right quotient operation.**

## Homomorphism

- Regular languages are **closed under homomorphism operation.**

## Invserse homomrphism

- Regular languages are **closed under inverse homomorphism.**

## Set difference

- Regular languages are **closed under the set differene operation.**