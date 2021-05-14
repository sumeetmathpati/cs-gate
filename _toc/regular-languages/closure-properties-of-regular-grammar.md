---
title: Closure Properties of Regular Languages
description: "Closure Properties of Regular Languages."
nav_order: 1
child_of: Regular Languages
mathjax: true
---


|Operation|Clossed ?|
|-|-|
|Union|Yes|
|Infinite Union|No|
|Intersection|Yes|
|Infinite Intersection|Yes|
|Concatenation|Yes|
|Kleene Closure|Yes|
|Positive Closure|Yes|
|Subset|No|
|Reverse|Yes|
|Prefix|Yes|
|Suffix|Yes|
|Quotient|Yes|
|Homomorphism|Yes|
|Inverse Homomorphism|Yes|
|Set Difference|Yes|

# Union

- Regualr languages are **closed under union** operation. 
- Union of two regular languages is always a regular language.
- **Example,**
    - **L1 = a(a+b)<sup>*</sup>** and **L2 = b(a+b)<sup>*</sup>**
        - L1 ∪ L2 = a(a+b)<sup>\*</sup> + b(a+b) = (a+b)(a+b)<sup>\*</sup> = (a+b)<sup>*</sup> is a regular languagage.

## Infinite Union

- Regualr languages are **NOT CLOSED under infinite union** operation.
- Infinite union of two regular languages may or may not be regular.
- **Examples,**
    - **L1 = a(a+b)<sup>*</sup>** and **L2 = b(a+b)<sup>*</sup>**
        - **(a+b)<sup>\*</sup> ∪ L1 ∪ L2**

# Intersection

- Regualr languages are **closed under intersection** operation.
- **Examples,**
    - $L1 = (a+b)^\*$ and $L2 = b(a+b)^\*$
        - $L1 \cap L2 = b(a+b)^\*$


## Inifite Intersection

- Regualr languages are **NOT CLOSED under infinite intersection** operation.
- Infinite intersection of RLs is may or may not be regular.
- **Examples,**
    - $\\{\\} \cap L1 \cap L2... = \phi$
        - It's regular
    - $(\sum - a^0b^0) \cap (\sum - a^1b^1) \cap (\sum - a^2b^2) ... = (\sum - a^nb^n)$
        - It's not regular.

# Concatenation

- Regualt languages are **closed** under concatenation operation.

# Complement

- Complement of regular language is **always regular.**

# Kleene closure

- Regular languages are **closed under Kleene's closure.**

# Kleene plus

- Regular languages are **closed under Kleene plus operation.**

# Subset

- Regular languages are **not closed under subset operation.**

# Reverse

- Regular languages are **closed under reverser operation.**

# Prefix

- Regular langugaes are **closed under prefix operation.**

# Suffix

- Regular languages are **closed under suffix operation.**

# quotient

- Regular languages are **closed under quotient operation.**
- Automata of L1 \ L2 is L1 automata but there may be changes in final state.

# Homomorphism

- Regular languages are **closed under homomorphism operation.**

# Invserse homomrphism

- Regular languages are **closed under inverse homomorphism.**

# Set difference

- Regular languages are **closed under the set differene operation.**