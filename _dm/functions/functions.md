---
title: Functions
parent: true
nav_order: 4
description: "Functions, discrete maths tutorial"
---

# Notion 
- **A function is something that associates each element of a set with an element of another set (which may or may not be the same as the first set).**
- The concept of function appears quite often even in nontechnical contexts. For example, a social security number uniquely identifies the person, the income tax rate varies depending on the income, the final letter grade for a course is often determined by test and exam scores, homeworks and projects, and so on. 
	- In all these cases to each member of a set (social security number, income, tuple of test and exam scores, homeworks and projects) some member of another set (person, tax rate, letter grade, respectively) is assigned. 
- **Definition**
	- A function f, from a set A to a set B is a relation from A to B that satisfies following condition:
		- for each element a in A, there is an element b in B such that (a, b) is in the relation, and
		- if (a, b) and (a, c) are in the relation, then b = c .

# Functions and relations

- Relation is a subset of cross product. But in relations aRb all the elements from the set a may or may not take part in relation.
- But in functions all the elements from set a must take part in relationship.
- **Functions is a special type of relation where each element from a first set takes part in relationship and relates with exactly one element from second set.**
	- A realation from a set A to set B is called function, if each element of A is mapped with single element of B.

# Terminologies

- The set A in the above definition is called the **domain** of the function and B its **codomain**.
- Thus, f is a function if it covers the domain (maps every element of the domain) and it is **single valued.**
- The relation given by f between a and b represented by the ordered pair  <a, b>  is denoted as  **f(a) = b** , and b is called the **image** of a under f, and it's denoted by f(x)
- The image of the domain under f is called the **range** of f .
- **Example**
	- Let f be the function from the set of natural numbers N to N that maps each natural number x to x^2 . Then the 
		- domain and codomain of this f are N, 
		- the image of, say 3, under this function is 9, and its 
		- range is the set of squares, i.e. { 0, 1, 4, 9, 16, ....} .

# Number of Possible Functions

- Domain has no other option than to take part in relationship.
- For every element in domain, we have x choices, where x is the number of elements in codimain
- Let 
	- \|A\| = m
	- \|B\| = n
- Hence number of functions possible 
	- **n^m**

# Composite Functions

- Function composition is an operation that takes two functions f and g to produce function h such that h(x) = g(f(x)).
    - In this operation function g is applied to the result of applying function f to x.