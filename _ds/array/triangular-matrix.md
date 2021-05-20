---
title: Triangular Matrix
child_of: Array
nav_order: 3
description: "Lower triangular matrix"
mathjax: true
---

**Not Important for GATE**
{: .w3-center .w3-xlarge}

- Trigangular matrix are those square matrices with only 3 digonals with non-zero elements
    - The main digonal, and upper and lower digonals of the main digonal.
- Example of 4x4 triangular matrix

|1|10|||
|50|2|20||
||60|3|30|
|||70|4|

- Hence, we can store 3n - 2 elements in n*n trianguar matrix.

# Note

- Other that first and last rows, all the rows contain 3 non-zero elements.

# Row Major Order

- The triangular matrix and it's RMO representation

|1|10|||
|50|2|20||
||60|3|30|
|||70|4|
{: .w3-margin-bottom }

|1|10|50|2|20|60|3|30|70|4|

- Calculating location: Location(A[i][j]) = 

$BaseAddress + [(3 \times (i - lb_1) - 1) + (j - i - 1)\ \times c$


# Column Major Order

- Calculating location: Location(A[i][j]) = 

$BaseAddress + [(3 \times (j - lb_1) - 1) + (i - j - 1)\ \times c$
