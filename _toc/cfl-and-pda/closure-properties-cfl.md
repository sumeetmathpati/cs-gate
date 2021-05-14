---
title: Closure Properties of CFL
description: "Closure properties of CFL."
nav_order: 5
child_of: CFL & PDA
mathjax: true
---


|Operation|DCFL Clossed ?|NCFL Clossed ?|
|-|-|-|
|Union|No|Yes|
|Intersection|No|No|
|Intersection with regular|Yes|Yes|
|Concatenation|No|Yes|
|Complement|Yes|No|
|Set Difference|No|No|
|CFL - Regular|Yes|Yes|
|Regular - CFL|Yes|No|
|Homomorphism|No|Yes|
|Inverse Homomorphism|Yes|Yes|
|Subset|No|No|
|Kleene Closure|No|Yes|
|Positive Closure|||
|Reverse|||
|Prefix|Yes|Yes|
|Suffix|No|Yes|
|Quotient|No|No|
|CFL / Regular|Yes|Yes|




# Subset

## NCFL

- NCFLs are **NOT closed under subset operation.**
- **Example,**
    - $L1 = \\{a^n b^n c^m \| n, m > 0\\}$
    - $L2 = \\{a^n b^n c^n \| n > 0\\}$
    - L2 is subset of L1.
    - But L1 is NCFL and L2 is not.

***

## DCFL

- DCFLs are **NOT closed under subset operation.**
- **Example,**
    - $L1 = \\{a^n b^n c^m \| n, m > 0\\}$
    - $L2 = \\{a^n b^n c^n \| n > 0\\}$
    - L2 is subset of L1.
    - But L1 is DCFL and L2 is not.

# Union

## NCFL

- NCFLs are **closed under union operation.**
- **Example,**
    - $L_1 = \\{a^nb^n \| n \ge 1 \\}$
    - $L_2 = \\{c^md^m \| m \ge 1 \\}$

***

## DCFL

- DCFLs are **NOT closed under union operation.**
- **Example,**
    - $L_1 = \\{a^nb^n \| n \ge 1 \\}$
    - $L_2 = \\{c^md^m \| m \ge 1 \\}$

# Intersection

## NCFL

- NCFLs are **NOT closed under intersection operation.**
- **Example,**
    - $L_1 = \\{a^nb^nc^m \| n, m \ge 1 \\}$
    - $L_2 = \\{c^mb^nc^n \| n, m \ge 1 \\}$
    - $L_1 \cap L_2$ is may or may not NCFL.

***

## DCFL

- DCFLs are **NOT closed under intersection operation.**

# Intersection With Regular

- $CFL \cap Reguar = CFL$
- **Example,**
    - $L_1 = \\{a^nb^n\| n \ge 1 \\}$
    - $L_2 = \\{(a+b)^*\\}$
    - $L_1 \cap L_2$ is definitely CFL.$

**Note:** $X \cap Regular \ lagnaguage = X$, where $X$ is any formal language.
{: .note}

# Concatenation

## NCFL

 - NFLCs are **closed under concatenation.**

***

## DCFL

 - DCFLs are **NOT closed under concatenation operation.**
 - **Example,**
    - $L_1 = \\{ wcw^r \| w \in \\{a, b\\]^+ \\}$
    - $L_2 = (a + b)^+$
    - $L_1 . L_2 = \\{xwcw^R \| w, x \in \\{a, b \\}^+ \\} $

# Complement

## NCFL

- NCFLs are **NOT closed under complement operation.**

## DCFL

- DCFLs are **closed under complement operation.**

# Difference

## NCFL

- NCFLs are **NOT closed under difference operation.**

## DCFL

- NDCFLs are **NOT closed under difference operation.**

# Difference with Regular

## NCFL

- NCFLs are **closed under difference with regular language.**

## DCFL

- NDCFLs are **closed under difference with regular language.**

**Note:** $X - Regular \ lagnaguage = X$, where $X$ is any formal language.
{: .note}

# Regular - CFL

## Regular - NCFL

- **Not closed.**

## Regular - NCDCFLFL

- **Closed.**