---
title: Problems In Concurrent Schedules
description: "Concurrent schedules."
nav_order: 2
child_of: Schedules
---

- We've seen that concurrent schedule can execute instructions of all transactions in interleaving manner.
- This flexibiliy comes at a cost and we have some problems.

# Dirty Read Problem (WR)

- When a transaction reads the data written by any other uncommitted transaction is called **dirty read problem.**
- This is called dirty read because:
    - First an uncommitted transaction writes the data which will be in memory buffer.
    - If another transaction reads the same data, it will be from the memory buffer (which was written by first transaction) and not from permanent database.
    - Uncommited transaction may fail and rollback.
    - Hence, the value read by other new transaction will not be correct.
    - This leads to inconsistency of the database.

Dirty read leads to inconsistency only when the transaction which has written the data has been rollbacked.
{: .note}

## Example

- Suppose we have two transactions T1 and T2.

![Serial Schedule]({{ site.baseurl }}/assets/images/dbms/dirty-read.png)

- In above example,
    - T1 read value of x (suppose x = 0).
    - T1 writes the data x (suppose 2).
    - After that T2 read the x value (T2 reads x = 2).
    - Perform operations and writes the value x (suppose T2 writes x = x + 1 = 3).
    - T2 commits.
    - Now if T1 rollabcks, T2 has performed operation on data which neven exists because T1 has rollbacked.
        - I.e. T2 writes final value of x = 3 but as T1 has rollbacked; it should have been 1.
    - Hence DB becomes inconsistent.


# Unrepeatable Read Problem (RW)

- When a transaction reads the data, then another transaction comes and write on same data, then if the first transaction again tries to read the same data; it will get different value (which is not desirable case).

## Example

![Unrepeatable Schedule]({{ site.baseurl }}/assets/images/dbms/unrepeatable-read.png)

- In above example,
    - T1 read value of x (suppose x = 2).
    - T2 reads the data x (x = 2).
    - T1 writes the x (x = x + 1).
    - Now if T1 tries to read the x it will get different value (x = 3) that the previous read (which was x = 2).
        - T2 should have get same value, because it's thinking it's executing in isolation (Isolaction property).

# Phantom Read Problem 

- It's similar to the unrepeatable read problem.
- When a transaction reads the data, then another transaction comes and deleted the same data, then if the first transaction again tries to read the same data; it won't find the same data

![Unrepeatable Schedule]({{ site.baseurl }}/assets/images/dbms/phantom-read.png)

# Lost Update Problem

- If multiple transactions running concurrently and change the value of a same data, then update made by some transactions may get lost.

## Example

![Unrepeatable Schedule]({{ site.baseurl }}/assets/images/dbms/lost-update-problem.png)

- In above example,
    - T1 reads the data x (suppose x = 2).
    - T1 updates the x (x = x + 1 = 3) in the buffer memory.
    - T2 performs blind write x = x + 2 = 5 (blind write is writing without read) in the buffer.
    - T2 commits.
    - When T1 commits, it writes x = 5 in the database.
    - Hence, update from T1 gets lost.