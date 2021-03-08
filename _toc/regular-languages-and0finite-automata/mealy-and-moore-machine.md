---
title: Mealy and Moore Machines
description: "Mealy and Moore Machines."
nav_order: 8
child_of: Regular Languages and Finite Automata
---
- Mealy and Moore machines are output generators.
- There are no final states in Mealy and Moore machines as these machines are not used for accepting/recognizing languages.
- Mealy and Moore are **deterministic finite state machines.**

# Mealy Machine

**If output symbol is associated with transition  (state and input) of machine then such automata is called as Mealy machine.**

- It covers the transitions for all the string over the given alphabets.
- For every input string, it generates and equivalent output string.
- If the length of input string is *n*, then the length of the output string is *n*.

## Specifications of Moore Machine

- DFA = (Q, ∑, ∆, δ, λ, q0) is a 6-tuple notation.
	- Q is a finite set of finite states.
	- ∑ is a finite set of input symbols.
    - ∆ is a finite set of output symbols.
	- δ is a set of transition functions for states and input of FA. **(Q x ∑ = Q)**
    - λ is a output function: **(λ: Q --> ∆)** (output associated with state).
	- q0 is initial state or start state. **q0 ∈ Q.**


# Moore Machine

**If output symbol is associated each state of finite state of machine then such automata is called as Moore machine.**

- It covers the transitions for all the string over the given alphabets.
- For every input string, it generates and equivalent output string.
- If the length of input string is *n*, then the length of the output string is *n+1*.
    - Moore machines generate the output associate with initial state without any input symbol.

## Specifications of Moore Machine

- DFA = (Q, ∑, ∆, δ, λ, q0) is a 6-tuple notation.
	- Q is a finite set of finite states.
	- ∑ is a finite set of input symbols.
    - ∆ is a finite set of output symbols.
	- δ is a set of transition functions for states and input of FA. **(Q x ∑ = Q)**
    - λ is a output function: **(λ: Q --> ∆)** (output associated with state).
	- q0 is initial state or start state. **q0 ∈ Q.**
