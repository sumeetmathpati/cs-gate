---
title: Cache Memory
description: "Mapping Techniques."
child_of: Memory Organization
nav_order: 1
---

# Locality of Reference

- Analysis of a large number of typical programs has shown that the **locality of reference,** also known as the principle of locality, is the tendency of a processor to access the same set of memory locations repetitively over a short period of time.

## Types

- There are two basic types of reference locality 

### Temporal

- Temporal locality refers to the reuse of specific data, and/or resources, within a **relatively small time duration.**

### Spatial locality.

- Spatial locality (also termed data locality) refers to the use of data elements within **relatively close storage locations.**
- Sequential locality, a special case of spatial locality, occurs when data elements are arranged and accessed linearly, such as, traversing the elements in a one-dimensional array. 

## Reason 

- The reason for this property may be understood considering that a **typical computer program flows in a straight-line  fashion with program loops and subroutine calls encountered frequently.**

### Loops

- When a program loop is executed, the CPU repeatedly refers to the set of instructions in memory that constitute the loop.

### Subroutine

- Every time a given subroutine is called, its set of instruc­tions are fetched from memory.

# Cache Memory

- If the active portions of the program and data are placed in a **fast small memory,** the average memory access time can be reduced, thus reducing the total execution time of the program. 
- Such a fast small memory is referred to as a **cache memory.** It is placed between the CPU and main memory.

## Operation of Cache

- When the CPU needs to access memory, the cache is examined. 
- If the word is found in the cache **(cache hit)**, it is read from the cache memory. 
- If the word addressed by the CPU is not found in the cache **(cache miss)**, the main memory is accessed to read the word.
- A block of words containing the one word we want is is then transferred from main memory to cache memory.
- In this manner, some data are transferred to cache so that future references to memory find the required words in the fast cache memory.

# Storage

- Cache memeory has two tyeps of storage:
    - **Cache control**
    - **Data Lines**
- Cache controller stores the **tag bits** and **valid bit**.