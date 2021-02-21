---
title: Relational Algebra
description: "Relational algebra in DBMS"
nav_order: 10
---

- Relational algebra and relational calculus are two formal query languages accisiated with **relational model.**
- Relational calculus is non procedural query language, i.e. the relational calculus tells what to do but never explains how to do.
- **Relational calculus is more powerful thatn SQL and relational algebra.**
    - Tuple relational calculus and domain relational calculus are equal in power.

# Types of Relational Calculus

## Tuple Relational Calculus

- Tuple relational calculus is used for selecting those tuples that satisfy the given condition.
- The result of the relation can have one or more tuples.
- **Syntax:**
    - `{T | P1 (T)} or {T | P2 (T)}`
        - T is resulting tuples/rows.
        - P1 and P2 are conditions to select T.
- **Example:**
    - `{ Branch.Assets | Branch(t) AND t.Branch_city = 'Pune'}`
***

## Domain Relational Calculus

### Operators in DRC

- **∧** for **AND**
- **∨** for **OR**
- **┓** for **NOT**

- In domain relational calculus the records are filtered based on the domains.

### Examples

- `{< Assets > | ∈ Branch ∧ Branch_city = 'Pune'}`
    - Query to find the *Assets* of branch where *Branch_name* is *Pune*.

