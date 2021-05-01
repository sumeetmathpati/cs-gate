---
title: DPDA & NPDA
description: "DPSA, NPDA, prefix property."
nav_order: 2
child_of: CFL & PDA
mathjax: true
---

- In DPDA number of languages accpeted by final state are more.
    - DCFL not having prefix property then it's not suitable for empty stack method with DPDA.
- In DPDA epsilon transitions are not allowed.


# Prefix Property

- A language does not have prefix property if the proper prefix of any string $\in$ language, is is present in language.
- Example
    - Following langauges do not satisfy the prefix property:
        - {a, ab}
        - {b, ba}
        - {a^nb^n, n >= 0}
    - Following languages satisfy the prefix property.
        - {a^nb^n, n >= 1}