---
title: Asympotic Notations
description: "Asympotic Notations in algorithm."
child_of: Algorithm Analysis
nav_order: 2
---

# Big-Oh (O) 

- $f(n) = O(g(n))$
    - iff ∃ +ve constants c and n0 such that
        - 0 <= f(n) <= c * g(n), ∀ n >= n0
    - Where c > 0 and n0 > 1

**Note:** C can be a fraction.
{: .note}

# Big-omega (Ώ) 

- $f(n) = Ώ(g(n))$
    - iff ∃ +ve constants c and n0 such that
        - 0 <= c * g(n) f(n), ∀ n >= n0
    - Where c > 0 and n0 > 1
