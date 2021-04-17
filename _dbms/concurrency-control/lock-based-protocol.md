---
title: Lock Based Protocol
description: "Two phase locking protocol, conservative two phase locking, strict two phase locking, rigorous two phase locking."
nav_order: 1
child_of: Concurrency Control
---

- The problem with concurrent schedules is multiple transactions are trying to use same data, hence we use locks to overcome that proeblsm
- **Any transactionwithout appropriate lock can't use the data item.**
- In above definition we've said "appropriate lock". There are two types of locks which are used at different scenarios

# Lock Types

## Shared Locks

- Also called **read only** lock.
- This lock **used by the transactions who only wants to read the data.**
- Even if one transaction has locked the data item with shared lock, other transaction can also apply shared lock on the same data, as there no problem when data is read by more transactions simultaneously.

***

## Exlusive Locks

- This lock **used by the transaction who only wants to write the data.**
- If any transaction has this lock on a data item **no other transaction can lock the same data either with shared or exclusive lock.**
- This is because we have problem when two schedules try to perform oeprations on a same data and one of the operation is *write* operation.

***

- Here is the table which shows the locks we can/can't acquire if we have some type of lock already.

||shared(x)|exclusive(x)|
|-|-|-|
|shared(x)|Yes|No|
|exclusive(x)|No|No|

***

- Transactions can also change the locks in from shared to exclusive and vice versa.
- Transactions can always:
    - **Upgrade lock:** From shared to exclusiv.
    - **Downgrade lock:** From exclusive to shared.
- Locking is a mechanism by which we can create conflict serializable schedules.
- Lock based protocols are further divided into two types:
    - **2 Phase Locking Protocol**
    - **Graph Based Protocol**