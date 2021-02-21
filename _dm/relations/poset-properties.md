---
title: Poset Properties
description: "Poset or partial order set, minimal and maximal elements, minimum and maximum elements, upper  bound and lower bound, Greatest upper bound and least upper bound."
child_of: Relations
nav_order: 3
mathjax: true
---

# Maximal and minimal elements

- In a poset, **maximal element(s) is an element which do not relate with any other element.**
	- In Hasse diagram no edge goes from this element to upward.
- In a poset, **minimal element(s) is a element to which no element is related.**
	- In Hasse diagram no edge comes to this element from downward.
- It's possible that maximal and minimal element(s) is/are same.
- **There will be at least one meximal and minimal element in poset.**
- **Example**

![Minimal And Maximal Elements]({{ site.baseurl }}/assets/images/dm-relations-minimal-and-maximal.png)


# Maximum and minimum element

- Poset may or may not have minimum and maximum element.
- In case there are more than one minimal and maximal elements.

## Maximum element
- It's a maximal element with every element related to it.
- **Unique maximal element is called maximum element.**

***

## Minimum element
- It's a minimal element with no element related to it.
- **Unique minimal is called minimum element.**

# Upper and lower bound

## Upper bound

- Let
	- A ⊆ P
	- P is a poset with relation ⊗
	- x ∈ P
- **x** will be the upper bound of subset A, iff
	- ∃a ⊗ x, ∀ a ∈ A$
	- i.e. there should be a element x to which every element in subset A has a relation.

## Lower bound

- Let
	- A ⊆ P
	- P is a poset with relation ⊗
	- x ∈ P
- **x** will be the upper lower of subset A, iff
	- ∃x ⊗ a, ∀a ∈ A$
	- i.e. there should be a element x which has relation to every element in A.

***

Lower and upper bound element of a subset need not to be in subset. <br/><br/> 
Upper and lower bound are **set** of element, i.e. there could be more than one upper and lower bounds.
{: .note}

![Upper bound and lower bound]({{ site.baseurl }}/assets/images/dm-relations-upper-and-lower-bounds.png)

***	

# Greatest lower and Lowest upper bound

## Greatest lower bound

- Also known as **Meet** or Infimum
- Symbol: ∧
- Greatest or maximum element in lower bound set.

## Least upper bound

- Also known as **Join** or Supremum
- Symbol: ∨
- Lowerst or minimum element in upper bound set.

***