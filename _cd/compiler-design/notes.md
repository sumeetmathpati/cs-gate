---
title: Notes
description: "Compiler Design Tutorial"
nav_order: 999
---

- **LL(1) grammar**
    - A single production grammar is LL(1) grammar.
        - A single production grammar is a grammar in which every non-terminal have single production.
    - In production `A --> p | q | r |...`, first(p), first(q)... must be pairwise disjoint else grammar is not LL(1).
    - In production `A --> p | ε`, First(p) ∧ follow(A) = ∅.
    - Left recursive grammars are not LL(1).
    - Ambiguous grammars are NOT LL(1).
    - Common prefix grammars are NOT LL(1).
        - `S --> ab | abc | abcd` is not a LL(1) grammar.
