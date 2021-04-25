---
title: Pumping Lemma
description: "Mealy and Moore Machines."
nav_order: 11
child_of: Finite Automata
mathjax: true
---

- **Pumping lemma is used to prove that the certain sets are not regular sets.**
    - If language is regular, it will satisfy the pumping lemma.

Note that different languages have different pumping lemmas, i.e. RL and CFL have different pumping lemmas.
{: .note}

- If there exists at least one string made from pumping which is not in L, then L is surely not regular.
- The opposite of above statement is not true, i.e if the string made from pumping is in L, then we can't guarantee that the L is regular.

# Lemma

- For every regular langugage there exists an integer n, such that for all z ∈ L with \|z\| >= n, there exists u, v, w ∈ ∑<sup>*</sup>, such that z = uvw, and
    - \|uv\| <= n
        - This means uv can cover whole string.
    - \|v\| >= 1
        - This means length of v can't be 0. This is because we have to take power of it.
    - For all i >= 0, u v<sup>i</sup> w
- In simple terms, if we pump (inserting any number of times) v in z, the new string also will be in L.

# Example

- Suppose we want to check is the language L is regular or not.
- Let's take any string in L
    - $z = a^kb^k$ 
- Divide z in three parts u, v, q
    - $u = a^{k-1}$
    - $v = a^k$
    - $w = b^k$
- Constraints on u, v, w
    

- Now if the L is regular, then the string $uv^iw$ should belong to the L for any value of $i$.