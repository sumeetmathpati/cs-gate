---
title: Special Relations
description: "Equivalence relation and partial order set relations or posets."
child_of: Relations
nav_order: 2
mathjax: true
---

# Equivalance relation

- A relation R on a set A is equivalance relation if R is
	- **Reflexive**
	- **Symmetric**, and
	- **Transitive**
- For an example, Parallelness is an equivalence relation, because it's reflexive (all the lines are parallel to themselves), symmetric (If $l \|\| m$, then $m \|\| l$) and transitive (If $l \|\| m$ and $m \|\| n$ then $l \|\| n$).
- Other examples of equivalance relations
	- Being in a room.
	- Congruance of a triangle.
	- Equality.
	- Modular congruance.
- Equivalant objects are can be represented by a single symbol.
	- For example in modulare congruance, in (mode 12) numbers 1, 13, 25 are same and can be represented by integer 1 or any one of them. 

## Equivalance class

- For an equivalance relation R on a set A
	- The set of elements of A that are related to an element of A let b is called equivalance class of b and it's denoted by [b].
- $[a] = \\{b \| b \in A \, and \, (a, b) \in R\\}$
- For example equivalance relation of hours in clock, equivalance classes are
	- [1] = {1, 13, 25...} = {1 + 12n, n $\in$ N}
	- [2] = {2, 14, 26...} = {2 + 12n, n $\in$ N}
- **Equivalance class of any two elements of a set is either disjoint or identical.**
	- [a] = [b], or
	- [a] ∩ [b] = ∅
- A set is **partitioned** into enquivalance classes by equivalance relation on set.

### Example

- A = [1,2, 3, 4]
- R = {(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (1, 2), (2, 1), (4, 5), (5, 4)}
	- First, it's an equivalance relation.
- Equivalance classes.
	- [1] = {1, 2}
	- [2] = {2, 1}
	- [3] = {3}
	- [4] = {4, 5}
	- [5] = {5, 4}
- From above, we have 3 partitions
	- {1, 2}, {3}, {4, 5}


# Order relation

- **Idea**
	- Shoppers in a grocery store are served at a cashier on the first-come-first-served basis. When there are many people at cashiers, lines are formed. People in these lines are ordered for service: **Those at the head of a line are served sooner than those at the end (notice that we are using some kind of ordering).**
	- Cars waiting for the signal to change at an intersection are also ordered similarly. Natural numbers can also be ordered in the increasing order of their **magnitude.** 
	- Those are just a few examples of order we encounter in our daily lives. The order relations we are going to study here are an abstraction of those relations. 
	- The properties common to orders we see in our daily lives have been extracted and are used to characterize the concepts of order.

## Partial order

- A binary relation **R** on a set **A** is a partial order if and only if it is
	- **Reflexive**
	- **Antisymmetric**, and
	- **Transitive**
- Partial order set indicates that one element is related with other.
- Partial order set indicates that, for certain pairs of elements in the set, **one of the elements precedes the other in the ordering.**
-  The **word partial** in the names "partial order" and "partially ordered set" is used as an indication that **not every pair of elements needs to be comparable / related.** 

In short in Partial ordered sets, **not all the elements are comparable but to those we can compare, we can order them such that one is 'greater than' or 'ahead of' or 'precedes' the other element.**
{: .note}

-  Formally, a partial order is any binary relation that is 
	-  reflexive (each element is comparable to itself), and
	-  transitive (the start of a chain of precedence relations must precede the end of the chain).
-  **Examples**	
	-  The less-than-or-equal-to relation on the set of integers I is a partial order, and the set I with this relation is a poset.
	-  The subset relation on the power set of a set, say {1, 2} , is also a partial order, and the set {1, 2} with the subset relation is a poset.	

### Hasse diagram

- **Posets can be represented** using 
	- Graph of diagraph 
	- Hasse diagram
- For the relation 
	- **{ (a, a), (a, b), (a, c), (b, b), (b, c), (c, c) }** on set **{a, b, c}**, the Hasse diagram and diagraph are shown below.

![Hasse Diagram]({{ site.baseurl }}/assets/images/dm-relations-hasse-diagram.png)

- As we know posets are reflexive and transitive, we don't show that (loops and directions) in hasse diagram.

***

## Total order



- A binary relation R on a set A is a total order if and only if it is
	- **a partial order**, and
	- for any pair of elements a and b of A, (a, b) ∈$ R or (b, a) ∈ R.
		- That is, every element is related with every element one way or the other.
	- A total order is also called a **linear order.**
- **Examples**
	- The less-than-or-equal-to relation on the set of integers I is a total order.

The difference between partial order and total order is in total order **all the elements are related and can be compared**, which was not the case in partial order.
{: .note}

## 3. Quasi order

NOT IMP FOR GATE
{: .label .label-red}

- A binary relation R on a set A is a quasi order if and only if it is
	- Irreflexive, and
	- Transitive.
- **Examples**
	- The less-than (not leass than or equal to) relation on the set of integers I is a quasi order.
	- The proper subset relation on the power set of a set, say {1, 2} , is also a quasi order.
