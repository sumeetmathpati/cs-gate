---
title: NFA
description: "Non Deterministic Finite Automata."
nav_order: 3
child_of: Regular Languages and Finite Automata
sub: true
---

- For every valid string there exist atleast one path from initial state to final state.
- NFA convers transitions for all valid string.
- Unlike DFA, NFA need not to cover transitions for invalid strings.
- **For every valid string, NFA reaches to one of its final state with at least one path. For invalid string it may or may not contain path that reaches to non-final state.**

# Specifications of NFA

- DFA = (Q, ∑, δ, Q0, F) is a 5-tuple notation.
	- Q is a finite set of finite states.
	- ∑ is a finite set of input symbols.
	- δ is a set of transition functions for states and input of FA. **(δ: Q x ∑ = 2<sup>Q</sup>)**
	- q0 is initial state or start state. q0 ∈ Q.
	- F is a set of final states of DFA (F ⊆ Q).

# Comparison of NFA and DFA

- Both NFA and DFA accepts type-3 language of regular language.
- NFA and DFA have same expressive power and they are equivalent.
- Every DFA is NFA but, vice versa is not correct.
- Q x ∑ = Qis DFA transition function and Q x ∑ = 2<sup>Q</sup> is NFA transition function.
- Construction of NFA is easier than DFA for many problems.
- In NFA zero or more number of transitions may present for single input at any state, but in DFA there is exactly one transition of any input at a state.

# Conversion from NFA to DFA

- If there are *n* states in NFA, then minimum staes in its equivalent DFA is 1 and maximum are 2<sup>n</sup>.

## Steps of Conversion

- Initial state of DFA will be same of its equivalent NFA.

TODO