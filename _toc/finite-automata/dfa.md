---
title: Deterministic Finite Automata
description: "Deterministic finite futomata."
nav_order: 1
child_of: "Finite Automata"
---
 
- It's a finite automata in which each state has transition for each symbol in a ∑.
- Each state should have exactly 1 transition for each symbol in ∑.

# Formal Definitions

- The DFA will have a following parameters

(Q, ∑, δ, qo, F)
{: .w3-xlarge .w3-center }

**Q** is a set of states.<br>
**∑** is a set of input symbols.<br>
**δ** is a transition function: Q*∑ -> Q.<br>
**q0** is a initial state.<br>
**F** is a set of final states. F ⊆ Q.<br>
{: .w3-center}

- In DFA, if all states are final, then it will accept ∑<sup>*</sup>.
 

# Complement of a DFA

- By interchaning final and non-final states, we can complement DFA.

# Binary Numbers Acceptance

- **r (mod n)**
	- **n is odd**
		- Then we require n number of states.
	- **n is even.**
		- n = 2^k
			- (k+1) states are requires.
		- n != 2^k
			- n/2 = odd
				- We require (n/2 + 1) states.
			- n/2 = even
				- 

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