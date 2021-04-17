---
title: Indexing
description: "Indexing"
nav_order: 1
child_of: File Organization
---

- Data in a tables can be in sorted or unsorted manner.

# Sorted Data

- If the data is in sorted manner, we can apply binary search algorithm here.
    - Hence we can search element in logn time.
- Data can be sorted according to only one attribute of a table. And it may not be sorted according to other attributed.
- Here insertion and deletion is costly.

# Indexing

- We create indexes on data file stored on secondary storage to make searching faster.
- A single index can be made on a single attribute of a table.
    - Example in *Student* database, a index file can be created for *name* attribute.
- Index file is created for blocks aquired by a table.
- This indexing is similar to the index we found on books.
    - Each entry in index points to required block.
    - Record of index is not so long.
- Remember, **index is also stored on a secondary storage and hence it also required blocks.**

## Notes

- Operations like search, insert, and delete will depend on the order in which elements are stored.
- If the data is ordered/sorted, then it must be on some key field.
    - Hence the data can be sorted according to one attribute and can be unsorted according to other attribute.
- On sorted/ordered data insertion and deletion is costly.
- The database content don't get affected or change in any way because of indexing.
- Index will be always sorted, data may or may not be sorted.
- Index file can be created for any field/attribute (like primary key, non-key).
- There could be more than one index files for an single data file.

# Structure

![Indexing]({{ site.baseurl }}/assets/images/dbms/indexing.png)

- As we can see in above image the index file has records in which it has pointer to the base address of the blocks of database file.
- The records in the index are generally smaller that the records of data file, because it only has two columns **<search key, pointer>**

# Types

## Based on Ordering

- In single level indexing we create only one index for a database and stop, we further dont index the index file.
- In multilevel indexing we further index the index file. We can do this because index file is also stored in a disk and divided into blocks.

![Indexing Types]({{ site.baseurl }}/assets/images/dbms/indexing-types.png)

***

## Based on Entries in Index

### Sparse Indexing

- In sparse indexing, we store only some record entries from file to index.
- Number of entries in a index file < Number of entries in a data file.

### Dense Indexing

- In dense indexing, we store record in index file for each **UNIQUE** record in data file.

Note that dense and sparse are not complementary of each other, sometimes it's possible that a record is both dense and sparse.
{: .note}

***

## Based on Levels

### Single Level Indexing

- Here we create index file from the main file, and then we stop the proess.
- Primary, clustered, and secondary are single level indexing.

### Multi Level Indexing

- In multilevel indexing, we further index the index file and keep repeating the procee until we get one block.
- Simple multilevel, B and B+ are multilevel indexing types.

# Data Searching

- To search data in secondary storage, we first have to search in which block it has been stored.
- We can serach the block using the index file as it has pointer to the blocks in the database file.
- To search block in index we require **log(n)** time (because as we know index file is always sorted), where n is number of records in a index.
- And after we find the block we have to search record in a block. This takes very minimal time and hence we can assume it as constant time.
- To in total we require **log(n) + 1** time to seach record.

