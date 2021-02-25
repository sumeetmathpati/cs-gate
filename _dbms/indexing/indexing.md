---
title: Indexing
description: "Indexing, primary indexing, clustered indexing, secondary indexing in DBMS"
nav_order: 13
parent: true
---

- Indexing on a file (which is stord in secondary storage) can be created to make searching for records in secondary storage easy.
- You can think of it as index of a book.
- Index is also stored in a secondary storage and hence it's also stored in blocks.
- Index has two columns **<Search key, Block pointer>**

# Types of Indexing

## Based on Entries in Index

### Sparse Indexing

- In sparse indexing, we store only some record entries from file to index.

### Dense Indexing

- In dense indexing, we store every search key value (and hence every record) from data file.

***

## Based On Ordering

### Primary Indexing

- Used when **data file is sorted over KEY attribute.**
- It's **sparse indexing.**
- We only store the pointer to the key of the first record of each block.
    - The first record of each block is called **anchor record.**
- To get the record wit value *k*, wr do **dinary search** on index file to find appropriate index entry, go to that block and in bloc we get the record.

![Primary Indexing]({{ site.baseurl }}/assets/images/dbms/primary-indexing.png)

### Clustured Indexing

- Used when **data file is sorted over NON KEY attribute.**
- Like primary indexing we only store the pointer to the key of the first record of each block.
- It's **sparse indexing.**
- As we know that non key attributes can be duplicate for different records is called clustering field, and hence we call it clustered indexing
- There is an entry in cludtered index for each distinct value of clustering field.
- Each entry points to the starting address of block containing that record.

![Clustered Indexing]({{ site.baseurl }}/assets/images/dbms/clustered-indexing.png)

There is an entry in clustered index for each unique record and we just not create entry for duplicate records and hence it's sparse indexing.
{: .note}

### Secondary Indexing

- It's **dense indexing.**
- It's called secondary indexing because we do it when we already have primary indexing.
    - Suppose we want to search database with more than one of it's attribute, then we have to create multiple indexes.
- It can be **done on a candidate key (which has unique values) or on a non-key attribute (which has duplicate values).**
- There can be may secondary indices.
- Unlike primary and clustered indices, data is not sorted and hence insertion and deletionis not expensive.
- Index entry is created for each record in data file because we cannot have anchor record as the data is not sorted in table according to the attribute we are using for secondary indexing.
- It needs more storage, but increases searching speed.

![Secondary Indexing On Non Key]({{ site.baseurl }}/assets/images/dbms/secondary-indexing-on-non-key.png)

![Secondary Indexing On Key]({{ site.baseurl }}/assets/images/dbms/secondary-indexing-on-key.png)

***

## Based on Levels

### Single Level Indexing

### Multi Level Indexing

***

![Secondary Indexing On Key]({{ site.baseurl }}/assets/images/dbms/indexing-observations.png)

