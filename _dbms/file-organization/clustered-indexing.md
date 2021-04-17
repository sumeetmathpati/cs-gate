---
title: Clustered Indexing
description: "Clustered Indexing"
nav_order: 3
child_of: File Organization
sub: true
---

- Used when **data file is sorted over NON KEY attribute.**
    - We may use the attribute which is not a PK to seach the database. Like name of a student; it's not a key but we often use that to search student in database.
    - Hence we may sort the table according to student name.
- Like primary indexing we only store the pointer to the key of the first record of each block.
- As we know that non key attributes can be duplicate for different records is called clustering field, and hence we call it clustered indexing
- There is an entry in clustered index for each distinct value of clustering field. 
    - I.e. all the unique entries (of the attribute we've chosen to create index on) are placed into the index file
- It's **sparse as wll as dense** indexing.
    - Sparse because not all the entries in the data file get place into the index file.
    - Dense because all the unique entries get entry in the index file.
- Each entry points to the starting address of block containing that record.
- If there is clustered indexing on a tabe; then we can't have primary indexing for that table.

![Clustered Indexing]({{ site.baseurl }}/assets/images/dbms/clustered-indexing.png)

- In above example, we've sorted the table in database according to the second attribute (A, B, C ...).
- We can see that If a block contain more than one unique records then it will have multiple pointer to it's anchor record (first record).

There is an entry in clustered index for each unique record and we just not create entry for duplicate records and hence it's sparse indexing.
{: .note}