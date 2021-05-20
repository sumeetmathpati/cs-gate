---
title: Lower Triangular Matrix
child_of: Array
nav_order: 3
description: "Lower triangular matrix"
mathjax: true
---

- In lower triangular matrix, the matrix contains zeroes in the upper part of the diagonal. 
    - Therefore we just store the cells which are non-zeroes.
- Example of 4x4 lower triangular matrix `A[1..4, 1..4]`.

|1|0|0|0|
|2|3|0|0|
|4|5|6|0|
|7|8|9|10|

- Lower triangular matrix is a square matrix.
    Starting and ending address of rows and columns are same.

# Row Major Order

- The lower triangular matrix in above example is stored in RMO as follows:

|1|2|3|4|5|6|7|8|9|10|

## Finding Location

- Suppose we have an array $A[lb1..ub1, lb1..ub1]$.
- To get the location of the $A[i][j]$

$BaseAddress + [(i - lb_1) \times \frac{(i - lb_1 + 1)}{2} + (j - lb_2)] \times c$
{: .w3-xlarge .w3-center}

# Column Major Order

- The lower triangular matrix in above example is stored in RMO as follows:

|1|2|4|7|3|5|8|6|9|10|

## Finding Location

- Suppose we have an array $A[lb1..ub1, lb1..ub1]$.
- To get the location of the $A[i][j]$

$BaseAddress + [\frac{N_c \times (N_c + 1)}{2} - \frac{(ub_1 - j + 1) \times (ub_1 - j + 2)}{2}] + [i - j] \times c$
{: .w3-xlarge .w3-center}

# Example

## Q1

**Given:**

- We have lower triangualr matrix A[75..150, 75..150]
- Size of each element is 2
- Stored in **column major order**
- Find location of A[120][100]
- Base address = 0

**Solution:**

- Loc(A[120, 100]) = $0 + [\frac{76(76+1)}{2} - \frac{(150 - 100 + 1)(150 - 100 + 2)}{2} + (120 - 100)] \times 2 $

## Q2

**Given:**

- We have lower triangualr matrix A[-25..50, -25..50]
- Size of each element is 10
- Stored in **column major order**
- Find location of A[43][38]
- Base address = 1000

**Solution:**

- Loc(A[43, 38]) = $0 + [\frac{76(76+1)}{2} - \frac{(50 - 38 + 1)(50 - 38 + 2)}{2} + (43 - 38)] \times 10$
- = 29400
