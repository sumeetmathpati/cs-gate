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

## Column Major Order

- To store multidimentional arrays as one dimentional arrays, in row major order, we start storing columns in the array contiguously.

![Row and Column Major]({{ site.baseurl }}/assets/images/ds/row-and-column-major.png)


# Declaration

- Syntax: `datatype array_name[size];`
- Example: `int myArr[10];`

# Note

- location of element at sindex $i$ in array is = $BASE + (i - StartIndex) * ElementSize$