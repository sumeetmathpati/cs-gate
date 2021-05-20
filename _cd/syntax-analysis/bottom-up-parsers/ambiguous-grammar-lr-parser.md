---
title:  "Handling Ambiguous Grammar in LR Parsing"
description: "Operator precedence Parser"
nav_order: 10
child_of: Syntax Analysis
sub: true
mathjax: true
---

- We know that ambiguous grammars cause conflicts in the LR prasers.
- Handling of the ambiguous grammar in LR parsing is:
    - When we have SR or RR conflicts, we can remove one of the action.
    - The way of deciding which action to remove is called handling of ambiguous grammars.
- Conflicts in a pasing table are resolved using precedence and associativity of the operators.