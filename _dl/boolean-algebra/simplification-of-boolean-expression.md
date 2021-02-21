---
title:  "Simplification of Boolean Expression"
description: "Simplification of Boolean Expression"
child_of: Boolean Algebra
nav_order: 2
mathjax: true
---

- After getting boolean expression from truth table; we have to minimize of simplify the expression to reduce the cost of implementation and delay.
- We have two general methods to simplify the expression:
    - Karnaugh map
    - Boolean algebra (boolean laws)

# Karnaugh Map

## Types of K-map

- We have K-maps for expression with 2 variables, 3 variables and 4 variables.
- See the picture below.

![K map types]({{ site.baseurl }}/assets/images/dl-k-map-types.png)


## Representation of Expression

- Before simplifying we have to see the representation of expression in K-map.
- Each cell of k-map represents a minterm or maxterm.  

## Implicants, Prime Implicants an Essential Prime Implicants

### Implicants

- Collection of adjecent elements are called implicants.

### Prime Implicants

- Implicant is prime implicant if it's not subset of any implicant.
- Im K-map simplification we try to find prime implicants.

### Essential Prime Implicants

- If a prime implicant have unique minterm or maxterm which no other prime implicant has, then it's called **essential prime implicant.**
- We can't have minimal boolena expression without essential prime implicants.
- We may have a case in which we don't have essential prime implecnts.

***

![Implicants, Prime Implicants and Essential Prime Implicants]({{ site.baseurl }}/assets/images/dl-implicants.png)


