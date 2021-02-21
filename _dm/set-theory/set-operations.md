---
title: Set Operations
child_of: Set Theory
description: "Set Types in set theory."
nav_order: 2
---
# Union

- Union of sets A and B is a set of distinct elements belonging to a set A or a set B or both.
- Example
	- If
		- A = {1, 2, 3}
		- B = {2, 3, 4, 5}
	- Then 
		- A ∪ B = {1, 2, 3, 4 ,5, 6}

## Union of multiset

- A = {1, 1, 2}
- B = {1, 1, 2, 2, 3}
- A ∪ B = {1, 1, 2, 2, 3}

# Intersection

- Insersection of sets A and B is a set of elements belonging to both sets.
- Example
	- If
		- A = {1, 2, 3}
		- B = {2, 3, 4, 5}
	- Then 
		- A ∩ B = {2, 3}

## Intersection of multiset

- A = {1, 1, 2}
- B = {2, 2, 3}
- A ∩ B = \{2\}

# Set difference

- The set difference between A and B denoted by A-B is the set of all the elements in A which are not in B.

## Set difference in multiset

- A = {1, 1, 2}
- B = {2, 2, 3}
- A - B = {1, 1}

# Symmetric difference

- A symmetric difference between sets A and B is a **set of elements which are either in A or in B but not in both.**
- A ∆ B = (A-B) ∪ (B-A)
- A ∆ B = (A ∪ B) - (A ∩ B)


# Complement of a set

- A complement of a set A is a set of all elements in universal set which are not in a set A.
- Example
	- If 
		- A = {1, 2, 3}
		- U = {1, 2, 3, 4}
	- Then
		- A' = {4}

# Cartesian / cross product

- A cartesian product of two sets A and B is the set of all ordered pairs of elements form sets A and B.
- A x B = {(x, y) \| x ∈ A and y ∈ B}
- \|A x B\| = \|A\| x \|B\|