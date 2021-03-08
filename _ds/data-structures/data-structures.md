---
title: Data Structures
parent: true
nav_order: 1
description: "Data structure tutorial."
permalink: /ds/
---

- **Data structure is mathematical model of organizing the interrelated data.**
    - *Mathematical model* means the predefined (we can't change them) structure to organize the data.
    - *Logical model* says that the structure is not only for storage, we also can perform some operations on those structures.
- We have different types of data structures to organize the data in different fasion/organizations.
    - Example to organize data in FIFO manner we use queue data structure.
- It is essential to select right data structure according to our probem to solve problems efficiently.

# Types of Data Structure

## Based on Storing of Data

### Linear Data Structures

- Array
- Linked lists
- Queue
- Stack

### Non-Linear Data structures

- Tree
- Graph
- Hash(sometimes)

## Based on Usage

### Container

- Array
- Linked list

### Priority 

Here some elements have higher priority than other elements in the structure.

- Stack
- Queue
- Heap

### Index

Data structures in this class used for indexing purpose.

- BST
- B-Tree
- B+ Tree
- Hash tables

# Operation on Data Structure

- **Traversing**
    - Visiting each and every element at least and atmost once.1
- **Insertion**
    - Adding element in data structure.
    - We may get runtime *overflow* error (if we try to insert element in already full data structure).
- **Deletion**
    - Removing element from data structure.
    - We may get runtime *underflow* error (if we try to delete element from empty data structure).
- **Searching**
    - Finding an element in data structure.
    - We may or may not find the element i.e. outcome can be *successful* if we found the data or *unsuccessfull* if we do not found the data.
    - If we found element, the output should be the *location* (index or pointer if) of an element in the data structure, and if we do not found the element we return lower bound of data structure (-1) or null pointer.
- **Sorting**
    - Arranging elements in ascending or descending order.
- **Merging**
    - Combining 2 data structures of same type into one.
- **Sorting**