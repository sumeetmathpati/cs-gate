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