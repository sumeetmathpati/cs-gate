---
title: Pushdown Automata
description: "Pushdown automata."
nav_order: 1
child_of: CFL & PDA
mathjax: true
---

- PDAs accept the CFLs.
    - As CFLs are superset of RLs; PDAs also accept RLs.

**Note:** We have two types of PDAs. Non-deterministic (NPDA) and deterministic (DPDA). By default (when we say PDA) we are talking about NPDAs.
{: .note}

![PDA]({{ site.baseurl }}/assets/images/toc/pda.png)

# PDA Acceptance

- The string can be accepted by a PDA in two ways.
- Both methods have same accepting power.

## Acceptance By Final State

- If the string is valid; the PDA reaches the final state.

***

## Acceptance By Empty Stack

- If the string is valid; the stack will be empty.
- No final states are needed fot this method.
- The initial stack symbol also must not be present in the empty stack. 

# PDA Formal Definitions

- The DFA will have a following parameters

(Q, ∑, Γ, δ, qo, Z0, F)
{: .w3-xlarge .w3-center }

**Q** is a set of states.<br>
**∑** is a set of input symbols.<br>
**Γ** is a set of stack symbols.<br>
**δ** is a transition function.<br>
**q0** is a initial state. q0 ∈ ∑<br>
**Z0** is a initial top stack symbol. Z0 ∈ ¬<br>
**F** is a set of final states. F ⊆ Q.<br>
{: .w3-center}


- Transition functions:
    - DPDA: $Q \times (\sum \cup \{ \epsilon \}) \times \Gamma \to Q \times \Gamma^*$
    - DPDA: $Q \times (\sum \cup \{ \epsilon \}) \times \Gamma \to 2^Q \times \Gamma^*$
