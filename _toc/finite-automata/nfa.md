---
title: NFA
description: "NFA. Non deterministic finite automata."
nav_order: 4
child_of: "Finite Automata"
---
 
# Formal Definitions

- The NFA will have a following parameters

(Q, ∑, δ, qo, F)
{: .w3-xlarge .w3-center }

**Q** is a set of states.<br>
**∑** is a set of input symbols.<br>
**δ** is a transition function: Q*∑ -> 2<sup>Q.</sup><br>
**q0** is a initial state.<br>
**F** is a set of final states. F ⊆ Q.<br>
{: .w3-center}

While converting NFA of n states to DFA number of possible states in DFA can be 1, 2...2^n
{: .note}