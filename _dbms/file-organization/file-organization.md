---
title: File Organization
description: "File organization in DBMS"
nav_order: 9
parent: true
---

- Databases are stored physically as files of records in secondary storage like magnetic disks.
    - Data is stored as: **Database >> Files >> Records >> Fields.**
- Records usually describe entities and their attributes.
    - For example, an *Student* record represent student entity and each field *name*, *roll_no*, *age*, etc in records specify its attributs.

# Blocks

- The secondary storage is logically divided into blocks.
- Records are stored on these blocks.
- Block is a unit of tranfer between disk and memory.
    - I.e. no matter how small data we have to transfer to the memory from secondary storae, we have to transfer data at least size of the block.

## Blocking Factor

- **The number of records can be stored in a block is called blocking factor.**

Block Size / Record size
{: .w3-xlarge .w3-center}

## Number of Blocks Required

- The number of blocks required by file =

Number of records / Blockig Factor
{: .w3-xlarge .w3-center}

# Spanned and Unspanned Organization

We store records in blocks in two ways:

## Spanned Records

- In a situation whewew we've stored multiple records in a block, and suppose there is space left in a block which is not capable to store complete one record.
- In situation like this we can store a small part of record in the remaining space and the other part of record in next block.
- **Organization where we can store the records partially in different blocks is called spanned organization.**

### Advantages

- No wastage of memory (no internal fragmentation).

### Disadvantages
- **More record access time required (for spanned record),** because we need to access two blocks to access complete record.

### Example

- In example in picture below, 
    - We have each record of size 100MB,
    - We have block size 1920MB,
    - Hence after storing 19 records we have 20MB space remaining.
    - We are using spanned organization hence we store the 20MB of record in *Block1* and other 80MB of the record in *Block2*.

![Spanned Organization]({{ site.baseurl }}/assets/images/dbms/spanned-organization.png)

***

## Unspanned Records

- **Organization where records can't be stored in two different blocks partially, is called unspanned organization.**

### Advantage

- **Access time of a record is less,** because in unspanned mapping, for a single record we need to access only a single block every time and hence, it is faster.

### Disadvantage

- Wastage of memory is more **(internal fragmentation).**

### Example

- In example in picture below, 
    - We have each record of size 100MB,
    - We have block size 1920MB,
    - Hence after storing 19 records we have 20MB space remaining.
    - We are using unspanned organization hence we **CAN'T** store a single record partially in two blocks.
    - Hence we store complete record in new *Block2*.
    - The 20MB space in *Block1* goes unused

![Spanned Organization]({{ site.baseurl }}/assets/images/dbms/unspanned-organization.png)

***

If records are of fixed length then unspanned organization is preferred. For variable sized records, unspanned organization is preferred.
{: .info}

