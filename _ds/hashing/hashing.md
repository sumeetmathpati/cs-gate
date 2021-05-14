---
title: Hashing
parent: true
nav_order: 2
description: "Hashing"
parent: true
mathjax: true
---

- Hashing is a searching technique.
- Hashing gives seach time complexity O(1).

# Direct Address Table

- In direct address table we store the data using keys.
- It's basically an array in where we store the data using the array indexes as keys.
- For example, if we want to store the key *x*, we store it in the *x* array index.
- Hence while retrieving if we want to search the key *x*, we can just access array at index *x* (array[x]).
- Hence in our dataset, if we have highest key is *m*, then we must have at laest *m* sized array.
- Here key itself is address in the array. No calculation is needed.

## Example

- Let's say we have to store these keys: {0, 1, 3, 5, 8, 9}

|index|key|
|-|-|
|0|0|
|1|1|
|2||
|3|3|
|4||
|5|5|
|6||
|7||
|8|8|
|9|9|

## Disadvantages

- In this method; even if we have little number of keys; and any one of the key is vary large, the table needs to at least equal to that large number. Hence very large number of space will be wasted.
- **Example,**
    - Let's say we have keys {1, 2, 100}
    - We need the table of size at least 100.
    - But out of 100, 97 spaces will be wasted.

## Solving the Space Problem

- We solve the above drawback using **hash functions.**
- Hash functions are used to compress the number of keys into available table space.
