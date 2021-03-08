---
title: DFA
description: "Deterministic Finite Automata."
nav_order: 2
child_of: Regular Languages and Finite Automata
sub: true
---

- If for every symbol of an alphabet there is an exactly one transition from every state of finite automata then such FA is called as DFA.
- DFA covers deterministic transitions for all valid and invalid strings in the given regular languages.
	- For all valid string, DFA reaches to the final state, and for all invalid string it reaches to the non-final state.

# Specifications of DFA

- DFA = (Q, ∑, δ, Q0, F) is a 5-tuple notation.
	- Q is a finite set of finite states.
	- ∑ is a finite set of input symbols.
	- δ is a set of transition functions for states and input of FA. **(Q x ∑ = Q)**
	- q0 is initial state or start state. q0 ∈ Q.
	- F is a set of final states of DFA (F ⊆ Q).

# Compound DFA

- If We have two DFAs*D1* and *D2*, we can have some operations defined over those DFAs.
- That operation could be:
	- **Union of DFAs** (D1 ∪ D2)
	- **Intersection of DFAs** (D1 ∩ D2)
	- **Subtraction of DFAs** (D1 - D2) or (D2 - D1)
- If number of states in DFA D1 and D2 are m and n respectively, then after performing the one of above operaions we get m*n states in result.
	- We take each state of first DFA and combine with each state of second DFA to create new states in resulting DFA.
- Inital state:
	- The initial state of compund FA is compund of initial states of the FAs which are being compinded.
- **Final states"**
	- Final states of compund FA depends upon the operation we ae performing.
	- Below we shall see the final states of different operations:
		- **Final states of (D1 ∪ D2)**
			- Make the states of (D1 ∪ D2) final, if final states of D1 or final states D2 contains any of the states.
		- **Final states of (D1 ∩ D2)**
			- Make the states of (D1 ∪ D2) final, if both, the final states of D1 AND final states D2 contains any of the states.
		- **Final states of (D1 - D2)**
			- Make the states of (D1 - D2) final, if the final states of D1 AND non-final states D2 contains any of the states.
		- **Final states of (D2 - D1)**
			- Make the states of (D2 - D1) final, if the final states of D2 AND non-final states D1 contains any of the states.
		


