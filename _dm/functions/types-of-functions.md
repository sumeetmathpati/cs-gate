---
title: Types of Functions
description: "Functions, discrete maths tutorial"
nav_order: 1
child_of: Functions
mathjax: true
---

# Injective / One-to-One

-  A function f is said to be one-to-one (injective) , if and only if whenever 
	-  **f(x) = f(y) , x = y .**
-  The element in second set should have only one incoming edge.
-  **Example**
	-  The function f(x) = x^2 from the set of natural numbers N to N is a one-to-one function. 
	-  Note that f(x) = x^2 is not one-to-one if it is from the set of integers(negative as well as non-negative) to N , because for example f(1) = f(-1) = 1 .
-  In injective functions **|A| <= |B|**.

## Number of injective functions

- Let f: A-> B
- |A| = n
- |B| = m
- (m!) / (m-n)!


# Surjective / Onto Functions

- A function f from a set A to a set B is said to be onto(surjective) , if and only if 
	- for every element y of B , there is an element x in A.
- **Example**
	- The function f(x) = 2x from the set of natural numbers N to the set of non-negative even numbers E is an onto function. 
	- However, f(x) = 2x from the set of natural numbers N to N is not onto, because, for example, nothing in N can be mapped to 3 by this function.
- In surjective functions **|A| >= |B|**.

## Number of surjective functions

- TODO

# Bijective function

- A function is called a bijection , if it is **onto and one-to-one.**
- **Example** 
	- The function f(x) = 2x from the set of natural numbers N to the set of non-negative even numbers E is one-to-one and onto. 
	- Thus it is a bijection.

# Inverse function

- Let f be a **bijection** from a set A to a set B. 
	- Then the function g is called the inverse function of f, and it is denoted by $f^{-1}$ ,  if for every element y of B,  g(y) = x , where f(x) = y . Note that such an x is unique for each y because f is a bijection.
- If the function f is applied on x gives result y, then applying its inverse function on y will give us x.
- $f(x) = y$
- $f^{-1}(y) = x$