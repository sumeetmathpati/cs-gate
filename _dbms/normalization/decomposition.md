---
title: Decomposition
description: "Lossy and lossless decomposition."
nav_order: 2
child_of: Normalization
---

- To normalize the relations we break tables into multiple tables.

# Lossy and Lossless

## Lossy Decomposition

- Here information gets lost when we decompose the table.
- **Example,**
    - R(A, B, C, D, E,) decomposed into
        - R1(A, B) and R2(C, D, E)
    - As there is no common attribute, on join we will get various new rows which were not present in the origional tables.

## Lossless Decomposition

- This ensured that when we join the two decomposed relation, we will get the origional relation back.
- **This is mandatory condition.**
- The decomposition will be lossless if (all the following must satisfy):
    - Decomposed tables contain attributes all and only from the origional table
        - **attr(R1) ∪ attr(R2) = attr(R)**
    - There is a common attribute between decomposed relations
        - **attr(R1) ∩ attr(R2) ≠ ∅**
    - The common attribute is key in one of the relation.
        - **attr(R1) ∩ attr(R2) → attr(R1)** OR
        - **attr(R1) ∩ attr(R2) → attr(R2)**

- **Example,**
    - R(A, B, C, D) decomposed into
        - R1(A, B) and R2(B, C, D)
    - There is a common attribute B according to which we can perform natural join operations and we will get origional table back.

# Dependency Preserving Decomposition

- This ensured that **none of the functional dependencies that holds on the original relation are lost** in decomposed relations.
- To check we can find FD set of all the decomposed relations and make their union.
- This is **optional property.**
- 3rd NF decomposition is always dependency preserving.