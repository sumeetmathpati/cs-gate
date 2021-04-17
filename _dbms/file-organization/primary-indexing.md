---
title: Primary Indexing
description: "Primary Indexing"
nav_order: 2
child_of: File Organization
sub: true
---

- Used when **data file is sorted over Prmary Key attribute.**
    - And that's why we call it *Primary Indexing.*
- We only store the pointer to the key of the first record of each block.
    - The first record of each block is called **anchor record.**
- Number of entries in a index file = Number of blocks aquired by a data file.
- And hence it's **sparse indexing.**
- A record in a index is composed of two fields **<PK, Pointer>**.
- To get the record wit value *k*, wr do **binary search** on index file to find appropriate index entry, go to that block and in bloc we get the record.


![Primary Indexing]({{ site.baseurl }}/assets/images/dbms/primary-indexing.png)

- Records 1, 7, 15, 23 are called anchor records.
