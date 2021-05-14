---
title: Permutation and Combination
nav_order: 2
description: "Permutation, combination, combinations, permutations."
child_of: Combinatorics
mathjax: true
---

# Permutation

- Permutation is **extension of the rule of product.**
- If we have $n$ objects and $r$ places and we have to find the number of ways we can arrange it, we can do it like
    - $n \times (n-1) \times (n-2) \times (n-3) ...(n-r)$

## Generalized Permutation Formula

$^nP_r = \frac{n!}{(n-r)!}$
{: .w3-xlarge .w3-center}

# Combination

- Combination is a selecting $r$ objects from $n$ objects.

## Permutation and Combination Relation

- When we find the permutation, order of elements matters.
- But in combinations, order of elements doesn't matter.
- One combination of $r$ objects can be represented as permutations in $r!$ ways.
- Example

|Permutation|Combination|
|-|-|
|a, b, c<br>a, c, c<br>b, a, c<br>b, c, a<br>c, a, c<br>c, c, a| a, b, c

- Hence we can get the combination after dividing the $^nP_r$ with $r!$

## Generalized Combination Formula

$^nCr \times r! = \frac{n!}{(n-r)!}$
{: .w3-xlarge .w3-center}

$^nCr = \frac{n!}{(n-r)!r!}$
{: .w3-xlarge .w3-center}
