---
title: Hashing
description: "Hashing in DBMS"
nav_order: 1
child_of: File Organization
---

- Hashing is a searching process that does not require any unnecessary comparison and directly finds the location of the key by using hash function.
- Hash function which is used to map the given value with a perticular key for faster access of elements. 
- The efficiency of mapping depends on the efficiency of hash function used.
- **Example**
    - Suppose we have keys {15, 36, 48, 89, 44, 50, 52}.
    - The size of hash tale if 10 (0 to 9).
    - Hash function is h(key = key%10.
    - Store the keys into hash table.

|0|50|
|1|
|2|53|
|3|
|4|44|
|5|15|
|6|36|
|7|
|8|48|
|9|89|

# Good Hash Function

- Fast to compute.
- Scatter keys evenly throughout the hash table.
- Leass conllisions.
- A perfect hash function is **one-to-one** mapping between keys and hash values, so there will be no collisions.
