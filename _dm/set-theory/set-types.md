---
title: Set Types
child_of: Set Theory
description: "Set Types in set theory."
nav_order: 1
---

# NULL or empty set

- Sign is ∅
- A null set has no elements.
- Representation
	- A = ∅
	- A = {}
- Cardinality of null set is 0.
- **Null set is subset of every set.**
- Some notes
    - **A ∪ ∅ = A**
    - **A ∩ ∅ = ∅**
    - **A * ∅ = ∅**
    - **{∅} = { { } } ≠ ∅**

# Singleton set

- It constains ony one element.
- Example
	- A = [3]
	- A = { x \| x ∈ N, x^3 = 27 }
	- { { } }


# Equal Sets

- Two sets are **equal** sets, if 
	- **Both have same number of elements,** and
	- **Both have same elements.**
- **Examples:**
    - If
        - A = {1, 2, 3}
        - B = {1, 3, 2}
        - C = {1, 2, 2, 3}
    - Then
        - A, B and C are equal sets. 

# Equivalent Sets

- Two sets are **equivalent**, it both have **same number of elements.**
- Example
    - If
        - A = {1, 2, 3, 4, 5}
        - B = {x \| x is a vowel}
    - Then
        - A and B are equivalent.
- All equal sets are equialent.

# Subset and Superset

- Set A is a **subset** of B is **all the elements in A are present in B.**
	- And B is a **superset** of A.
- **Notation:**
	- Subset: **A ⊆ B**
	- Superset: **B ⊆ B**
- **Every set is a subset of itself.**
- Example
    - If 
        - A = {1, 2, 3}
        - B = {1, 2, 3, 4}
        - C = {1, 2, 3}
    - Then 
        - A ⊆ B
        - A ⊆ C
        - C ⊆ A


# Proper Subset and Proper Superset

- Set A is a **proper subset** of B if all the elements in A are present in B and A ≠ B.
	- And B will be the **proper superset.**
- **Notation:**
	- Subset: **A ⊂ B**
	- Superset: **B ⊃ B**

# Finite Set

- It constains the **finite number of elements.**
- We can do one to one mapping of the elements with the natural numbers and stop at specific place.


# Infinite Set

## Countably Infinite Set

- In this set we can do one to one mapping of the elements with the natural numbers.
- Even though counting all the elements could take forever, but we can reach to specific element at any time.
- Example
	- Set of integers.

***

## Uncountably Infinite Set

- In set where we can't do one to one mappingof the elements with natural numbers is called uncoutably infinite set.
- Here we can't reach to any specific place after counting for some time
- Example
	- Set of real numbers
	- In the interval, say [0, 1] there are infinite numbers we can't map them with natural numbers.


# Overlapping Sets

- Two sets are said to be overlapping sets, if they have **at least one common element.**
- **Example**
    - A = {1, 2, 3}
    - B = {3, 4, 5, 6}

# Disjoint Sets

- Two sets are disjoint sets, if they **don't have any common element.**

# Power Set

- A power set of a set A is a **set of all subsets** of set A.
- Example
	- A = {1, 2, 3}
	- P(A) = {∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}
- If \|A\| = n, then\|P(A)\| = 2^n

# Universal set

- A set which is a superset of all the sets under consideration is called universal set.
- Typically denoted by 'U' or 'S'.

# Multiset

- It's a generelized concept of set.
- It's a collection of unordered elements, where **any element can occur mlutiple or infinite times.**

