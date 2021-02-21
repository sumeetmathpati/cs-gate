---
title: Cache to Main Memory Mapping
description: "Mapping Techniques."
child_of: Memory Organization
nav_order: 2
---

- The basic characteristic of cache memory is its fast access time . Therefore, very **little or no time must be wasted when searching for words in the cache.**
- The transformation of data from main memory to cache memory is referred to as a mapping process.
- We have three types of mappings:
    - **Associative mapping**
    - **Direct mapping**
    - **Set-associative mapping**

# Structure 

- To understanding and example purpose, we shall use
    - **Main memory of 32K x 12**
        - **32 K words each of size 12 bits.
    - **Cache of 512 x 12.**
        - Hence cache can store 512 of these words.
- As we have 32K different words, we need **15-bit address** for memory to address each word in main memory.
- And similarly we need **9-bit address** for cache to address each word of in cache.

![Cache Memory]({{ site.baseurl }}/assets/images/coa/cache-memory-example.png)

- For every word stored in cache, there is duplicate copy in main memory.
- CPU communicate with both the memories.
- First it sends the 15-bit address to the cache:
    - If cache hits, CPU accepts 12-bit data from cache.
    - If there is cache miss, **the CPU reads the word from main memory and the word is then transferred to cache.**


# Associative Mapping

- It's the fastest and most flexible cache orgnization.
- The associative memory **stores both the address and content (data) of the memory word.**
- Hence, any location in cache can store any word from memory.