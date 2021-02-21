---
title: Properties of Relations
description: "Properties of relations."
child_of: Relations
nav_order: 1
mathjax: true
---

- Certain important types of binary relation can be characterized by properties they have. 

# Reflexive and Irreflexive

## Reflexive relation

- A set R is said to be reflexive set of set A if **(a, a) ∈ R, ∀a ∈ A.**
- In reflexive set, **other elements can also present.**
- 

||A|B|C|
|A|**(A, A)** (must present)|(A, B)|(A, C)|
|B|(B, A)|**(B, B)** (must present)|(B, C)|
|C|(C, A)|(C, B)|**(C, C)** (must present)|

### Number of reflexive relations on a set

- $N^2$ ... Number of elements in cartesian product.
	- **$N$ ... Number of diagonal elements.**
		- Has to have. 
		- No other option.
	- **$N^2 - N$ ... Number of non diagonal elements.**
		- No matter if present of not.
		- We have options to have them or not.
- **Number of reflexive relations we can have = $2^{N^2 - N}$**

### Example 1

Let **A = {a, b, c}**

- R = ∅
	- Not a reflexive relation.
- R = A $\times$ A
	- Reflexive relation.
- R = {(a, a), (b, b), (c, c)}
	- Reflexive relation.
- R = {(a, a), (b, b), (c, c), (a, b), (b, c)}
	- Reflexive relation.
- R = {(a, a), (a, b), (b, a), (b, b)}
	- Not a reflexive relation.
- R = {(a, b), (b, c), (a, c)}
	- Not a reflexive relation.

### Example 2
	
**The <= relation R on the set A = {1, 2, 3}**

- R = {(1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3)}
- It is reflexive because <1, 1>, <2, 2>, <3, 3> are in this relation.

***

## Irreflexive relation

- A set R is said to be a irreflexive set of set A if **(a, a) ∉ R , ∀a ∈ A.**
	- Not a single reflexive pair should be in a set.

A relation may not be reflexive and irreflexive. Example relation **R = {(1, 1), (1, 2), (2, 3)}** on set **A = {1, 2, 3}** is neither reflexive nor irreflexive.
{: .note}

||A|B|C|
|A|**(A, A)** (must not present)|(A, B) (don't matter)|(A, C) (don't matter)|
|B|(B, A) (don't matter)|**(B, B)** (must not present)|(B, C) (don't matter)|
|C|(C, A) (don't matter)|(C, B) (don't matter)|**(C, C)** (must not present)|

### Number of reflexive relations on a set

- $N^2$ ... Number of elements in cartesian product.
	- **N ... Number of diagonal elements.**
		- Must not present. 
		- No other option.
	- **$N^2 - N$ ... Number of non diagonal elements.**
		- No matter if present of not.
		- We have options to have them or not.
- **Number of irreflexive relations we can have = $2^{N^2 - N}$**

### Example 1

Let **A = {a, b, c}**

- R = ∅
	- It's a irreflexive relation.
- R = A $\times$ A
	- Not a irreflexive relation.
- R = {(a, a), (b, b), (c, c)}
	- Not a irreflexive relation.
- R = {(a, a), (b, b), (c, c), (a, b), (b, c)}
	- Not a irreflexive relation.
- R = {(a, b), (b, a), (a, a), (b, b)}
	- Not a irreflexive relation.
- R = {(a, b), (b, c), (a, c)}
	- It's a irreflexive relation.

### Example 2

- The relation < (or >) on the set of integers {1, 2, 3} is irreflexive. 
    - In fact it is irreflexive for any set of numbers.

# Symmetric, Antisymmetric and Asymmetric

## Symmetric

- A relation R is said to be symmetric of a set A if 
	- **∀ a, b ∈ A,**
		- **If (b, a) ∈ R**
		- **Then (a, b) ∈ R.**
- For an example, let's take relation **'is married to'**:
	- If Alice is married to Bob,
	- Then Bob is married to Alice.

### Number of symmetric relations on a set

- $N^2$ ... Number of elements in cartesian product.
	- **N ... Number of diagonal elements i.e. reflexive elements.**
		- No matter if present of not.
		- We have options to have them or not.
	- **$N^2 - N$ ... Number of non diagonal elements.**
		- Here, out of all non diagonal elements, if (a, b) is there, there must be (b, a)
			- We have to choose for pairs.
			- If one of them is present, other also must be present.
			- If one ir not present, other also must not be present.
			- No matter if pair present of not.
			- We have options to have them or not.
- **Number of symmetric relations we can have = $2^n * 2^{(n^2-n)/2}$**

## Antisymmetric

- A relation R is said to be symmetric of a set A if 
	- ∀ a, b ∈ A,  
		- If (b, a) ∈ R  , (a, b) ∈ R 
		- then a = b.
- In short, **symmetric pairs should not be in a relation but reflexive pairs are allowed.**

### Number of antisymmetric relations on a set

- $N^2$ ... Number of elements in cartesian product.
	- **N ... Number of diagonal elements i.e. reflexive elements.**
		- No matter if present of not.
		- We have options to have them or not.
	- **$N^2 - N$ ... Number of non diagonal elements.**
		- Here, we have to decide for pairs (like in previous one).
			- Hence, we have $(N^2-N)/2$
			- We have 3 options
				- Both are not present
				- First present and second is not.
				- Second present and first is not.
- **Number of irreflexive relations we can have = $2^n * 3^{(n^2-n)/2}$**

## Asymmetric relation

- A relation R on a set A is called asymmetric if no (b, a) ∈ R when (a, b) ∈ R.
- No symmetric pair is allowed in relation.

### Number of antisymmetric relations on a set

- $N^2$ ... Number of elements in cartesian product.
	- **N ... Number of diagonal elements i.e. reflexive elements.**
		- We don't want it in our relation.
		- We have no other option.
	- **$N^2 - N$ ... Number of non diagonal elements.**
		- Here, we have to decide for pairs (like in previous one).
			- Hence, we have $(N^2-N)/2$
			- **We have 3 options**
				- Both are not present
				- First present and second is not.
				- Second present and first is not.
- **Number of irreflexive relations we can have = $3^{(n^2-n)/2}$**

# Transitive relation

- A relation R on a set set A is called transitive,
	- **If (a, b) ∈ R AND (b, c) ∈ R,**
	- **Then (a, c) ∈ R**

## Example

Let **A = {a, b, c}**

- R = {(a, b), (b, a), (a, a), (b, b)}
	- Transitive relation.
- R = {(a, a), (b, b), (c, c)}
	- Transitive relation.
- R = {(a, b)}
	- Transitive relation.
- R = {(a, b), (a, c)}
	- Transitive relation.
- R = {(a, b), (c, b)}
	- Transitive relation
- R = {(a, b), (b, c), (a, c), (a, a)}
	- Transitive relation.
- R = {(c, a), (b, c)}
	- Not a transitive relation.