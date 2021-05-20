---
title:  "4) LALR(1) Parser"
description: "LALR(1) Parser,"
nav_order: 8
child_of: Syntax Analysis
sub: true
mathjax: true
---

- It's similar to CLR, but here we try to reduce the table size
- Here, after creatting LR(1) item DFA, before constructing table; we merge the similar states.

# Merging

- In LR(1) DFA, any states having same LR(0) part and different lookahead part, then merge them into single state.

# Conflicts

- RR and SR conflicts are same as CLR, but here we have to check for conflicts after merging.

# Problems with LALR(1)

## RR Conlfict

- We know that CLR is more powerful than LALR(1), but why?
    - This is because, LALR(1) can have RR conflicts after merging even if there was no conflict in those two states before merging.
    - Hence CLR(1) can recognize more grammars than LALR(1).

![LALR RR Conflict]({{ site.baseurl }}/assets/images/cd/lalr1-rr-conflict.png)

***

## SR Conlfict

- If the CLR(1) does not have SR conflict before merging, then there will be no SR conflict after merging.

![LALR SR Conflict]({{ site.baseurl }}/assets/images/cd/lalr1-sr-conflict.png)

Hence, **Every LALR(1) grammar is CLR(1) but not vice versa.**
{: .note}