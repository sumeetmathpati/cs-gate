---
title: ε-NFA
description: "Epsilon NFA, Non deterministic finite automata."
nav_order: 4
child_of: Regular Languages and Finite Automata
sub: true
---

- For every valid string there exist atleast one path from initial state to final state.
- **ε-NFA is similar to NFA, but it may include epsilon (ε) transactions i.e. transactions without any input.**
- NFA convers transitions for all valid string.
- **For every valid string, ε-NFA reaches to one of its final state with at least one path. For invalid string it may or may not contain path that reaches to non-final state.**

# Specifications of ε-NFA

- DFA = (Q, ∑, δ, Q0, F) is a 5-tuple notation.
	- Q is a finite set of finite states.
	- ∑ is a finite set of input symbols.
	- δ is a set of transition functions for states and input of FA. **(δ: Q x ∑ ∪ {ε} = 2<sup>Q</sup>)**
	- q0 is initial state or start state. q0 ∈ Q.
	- F is a set of final states of DFA (F ⊆ Q).

# Conversion from ε-NFA to NFA

## Steps 
- We will take the ε-closure for the starting state of NFA as a starting state of DFA.
- Find the states for each input symbol that can be traversed from the present. That means the union of transition value and their closures for each state of NFA present in the current state of DFA.
- If we found a new state, take it as current state and repeat step 2.
- Repeat Step 2 and Step 3 until there is no new state present in the transition table of DFA.
- Mark the states of DFA as a final state which contains the final state of NFA. 