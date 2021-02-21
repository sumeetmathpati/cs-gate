---
title: Transactions
description: "Transaction in DBMS"
nav_order: 6
parent: true
---

- **A transaction is group of instructions performed in DBMS which may result in chanding database.**
    - A single instructions is minimum processing unit which can't be divided further.
- In DBMS, we have two main operations in transactions:
    - **Read** operation
    - **Write** operation

# Operations

## Read

- The read operation reads the data from database (where data is in secondary storage) and stores it into main memory (buffer).
- Now any operations (like increment, addition, assignment etc.) we perform on data are will be performed on data in buffer and not on the data in secondary memory.

## Write 

- The write operation writes the data into dirty block (which is also in secondary storage).

## Commit

- The commit operation updates all the data from the dirty block to the secondary storage.
- If we do not commit our transaction, all the changes will not be sored into database.

## Checkpoint

- Used to perform log baased recovery.

### Types of Logs

- **Update log:**
    - An log update is represented as: <Ti, Xj, V1, V2>
        - **Ti:** Transaction which has performed write operation.
        - **Xj (data item):** Data item which was written.
        - **V1:** Old value of data item before writing.
        - **V2:** New value of data item after writing.
- **Transaction start log:**
    - It contains the information about when the transaction has started.
- **Transaction commit log:**
    - It contains the information about when the transaction has committed.
- **Transaction abort log:**
    - It contains the information about when the transaction has aborted.