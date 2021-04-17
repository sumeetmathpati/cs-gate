---
title: DFA Minimization
description: "DFA minimization."
nav_order: 2
child_of: "Finite Automata"
sub: true
---
 
# Equivalent States

- If on a same input symbol a transition from two different states goes to either final state or non-final state (should be same for both the sates) then those states are called equal states.
	- For δ(q0, x), δ(q1, y) 
		- If x, y ∈ F or x, y ∉ F
		- Then q0 and q1 are equivalent states.