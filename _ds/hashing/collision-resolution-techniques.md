---
title: Collision Resolution Techniques
nav_order: 4
description: "Collision resolution technique"
child_of: Hashing
mathjax: true
---

- We know that no hashing function can too perfect to avoid collisions.
- Due to collisions, we may get same result for two different keys.
- Now our problem is, *how to store those two (or multiple) keys at same place in table?*
- For that, we use collision resolution techniques.

# Chaining

- In this method, we store the keys outside the table.
- If number of keys are more or if we don't know the number of keys, we use open addressing.

## Notes

- We are taking extra space in the form of linked list.
- Maximum chain length is *n*, where *n* is number of keys.
- Searching time is O(n).
- Insertion time complexity = O(1)
    - Because, we can insert element at the starting position of linked list.
    - While inserting if we do not want duplicate elements; then we have to check if that element is already in the list and hence time complexity will be O(n) (if we don't want duplicate elements).
- Searching time = 
    - O(m) for worst case.
    - O(1) for best case.
    - O(m) for average case.
- Deletion time = O(n)
***

## Example

- table size = m = 0 - 9 = 10
- $f(x) = x (mod m)$
- keys = 70, 89, 65, 150, 39, 88, 60, 200, 93, 185, 623, 95, 900, 424.
- **Solution**

![Chaining]({{ site.baseurl }}/assets/images/ds/chaining.png)


# Open Addressing

- In this method, we try to store the keys in the table, even if collision happended.
- If two keys having same hash value, we try to store one of the key in other location.
- Maximum keys we can store is equal to the size of the table.

## Linear Probing / Closed Hashing

- In this technique, if the location is taken by other key, we check of next available location. 
- It's called linear because we search next availble location linearly.
- $LP(key, i) = f(key) + i) (mod \ m) \forall i \in \\{0, 1, 2, 3, ... (m-1)\\}$ 
    - $i$ is called probe number.
    - $m$ is table size.
- Example
    - We have two keys: 500, 600
    - $f(x) = x (mod 10)$
    - 500 will be stored at location 0.
    - To store 600 we search linearly from 1, 2, 3, ...
- It's also called closed hashing, because it covers all the positions.

### Notes

- Insertion time = 
    - O(m) for worst case.
    - O(1) for best case.
- Searching time = 
    - O(m) for worst case.
    - O(1) for best case.
    - O(m) for average case.
- Deletion (of specific element) time
    - O(m) for worst case.
    - O(1) for best case.

### Primary Clustering

- If two keys contain same starting hash address, then they both will follow same path un-necessarity in linear manner.
- Because of this reason average searching time is increasing, this problem is known as primary clusteing.

### Example

- Keys: 75, 93, 46, 55, 79, 23, 89, 65
- Table

|0|89|
|1||
|2||
|3|93|
|4|23|
|5|75|
|6|46|
|7|55|
|8|65|
|9|79|



## Quadratic Probing

- Instead of linearly searching for available free space, we search quadratically.
- This method may or may not cover all the slots as we are jumping quadratically.
- $QP(key, i) = f(key) + i) (mod \ m) \forall i^2 \in \\{0, 1, 2, 3, ... (m-1)\\}$ 
    - $i$ is called probe number.
    - $m$ is table size.
- We do this process until some limit, because we can't say we definitely get the position in the table.

### Notes

- Insertion time = 
    - O(m) for worst case.
    - O(1) for best case.
- Searching time = 
    - O(m) for worst case.
    - O(1) for best case.   
    - O(m) for average case.   
- Deletion (of specific element) time
    - O(m) for worst case.
    - O(1) for best case.

### Secondary Clustering

- If two keys contain same starting hash address, then they both will follow same path un-necessarity in quadratic manner.
- Because of this reason average searching time is increasing, this problem is known as secondary clusteing.
- Secondary clustering is less severe, two records do only have the same collision chain if their initial position is the same. For example quadratic probing leads to this type of clustering.

### Example

- Keys: 75, 93, 46, 55, 79, 23, 89, 65
- Table

|0|79|
|1|64|
|2||
|3|93|
|4|23|
|5|75|
|6|46|
|7||
|8|89|
|9|55|

## Double Hashing

- In this method we use two hash functions.
- $DH(key, i) =f_1(k) + i \times f_2(k), \forall i \in {1, 2, 3, ... m}$ 
    - $i$ is called probe number.
    - $m$ is table size.

### Notes

- Insertion time = 
    - O(m) for worst case.
    - O(1) for best case.   
    - O(1) for average case. 
- Searching time = 
    - O(m) for worst case.
    - O(1) for best case.   
    - O(1) for average case.   
- Deletion (of specific element) time
    - O(m) for worst case.
    - O(1) for best case.   
    - O(1) for average case. 

### Example

- Keys: 75, 93, 46, 55, 79, 23, 89
- f1(key) = key (mod m)
- f2(key) = 1 + (key (mod (m-2))) (mod m)
- Table

|0||
|1|55|
|2||
|3|93|
|4||
|5|75|
|6|46|
|7|23|
|8|89|
|9|79|

