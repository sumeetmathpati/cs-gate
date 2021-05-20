---
title: 2D Array
child_of: Array
nav_order: 2
description: "Array two dimentional array"
mathjax: true
---

# Notation

- `data_type array_name[1..3, 1..5] = {10, 20, ..., 150}`
- Above array have 3 rows = 1, 2, 3
- Above array have 5 columns = 1, 2, 3, 4, 5
- The array will look like this

||1|2|3|4|5|
|1|10|20|30|40|50|
|2|60|70|80|90|100|
|3|110|120|130|140|150|

# Memory Representation

- In computer multidimentioanl arrays are also stored as a single domentional array, by allocating contiguous memory locations.
- Therefore `data_type array_name[1..3, 1..5] = {10, 20, ..., 150}` will allocate 15 locations in memory contigusly with size of `data_type`.
- Hence we can say that, the multidimentional array are stored as single dimentional arrays in memory.

## Row Major Order

- To store multidimentional arrays as one dimentional arrays, in row major order, we start storing rows in the array contiguously.
- Generally we follow this method.
- $Loc(a[i][j])$ = $BASE + [(i - RLB) \times NumberOfColumns + (j - CLB)] * ElementSize$
    - Where *RLB* is row lower bound and *CLB* is column lower bound.
- Example
    - Let's say we have an array[25..300, 93..175]
    - Each element is of size 5.
    - Base address is 0.
    - Loc(A[175][170]) = 0 + [(175 - 25) * 83 + (170 - 93)] * 5 = 62625

***

## Column Major Order

- To store multidimentional arrays as one dimentional arrays, in row major order, we start storing columns in the array contiguously.

- $Loc(a[i][j])$ = $BASE + [(j - CLB) \times NumberOfRows + (i - RLB)] * ElementSize$
- Example
    - Let's say we have an array[25..300, 93..175] sotred in column major order.
    - Each element is of size 5.
    - Base address is 0.
    - Loc(A[175][170]) = 0 + [(170 - 93) * 176 + (175 - 25)] * 5 = 68510

For 3D array, a[lb1 .. ub1, lb2 .. ub2, lb3 .. ub3], <br><br>in RMO, <br> $Loc(a[i][j][k])$ = $BASE + [(i - lb_1) \times nr \times nc + (j - lb_2) \times nc + (k - lb_3)] \times c$ <br><br> in CMO, <br>$Loc(a[i][j][k])$ = $BASE + [(i - lb_1) \times nr \times nc + (k - lb_3) \times nr + (j - lb_2)] \times c$
{: .note}

***

![Row and Column Major]({{ site.baseurl }}/assets/images/ds/row-and-column-major.png)


# Declaration

- Syntax: `datatype array_name[size];`
- Example: `int myArr[10];`

# Note

- location of element at sindex $i$ in array is = $BASE + (i - StartIndex) * ElementSize$