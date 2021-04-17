---
title: Time Stamp Based Protocol
description: "Time stamp based protocol, Thomas Write rule."
nav_order: 4
child_of: Concurrency Control
---

- Provodes guarantee of  **conflict serializability.**
    - But this doesn't mean that all CS schedules can be made with time stamping protocol. 
- **Deadlock free.**
- **Does NOT ensure recoverability.**

# Properties of Timestamp

- **Uniqueness:**
    - Each timestamp is unique.
    - No two timestamp values are equal.

- **Monotonicity:**
    - Time will increase.
    - Hence the timestamp value assigned after any point will be greater than before.

# Structure

- Unique time stamp assigned to each transaction (the time it comes into the system).
    - The transaction comes before older and the one comes after is younger.
- Each data item has two time stamps:
    - **Read time stamp:** 
        - This value of a data item is a entering time of a transaction who has read the data item.
    - **Write ime stampL** 
        - This value of a data item is a entering time of a transaction who has written the data item.

Please note that the read/write timestamps of data items are note when the data item was read or written, its the timestamp of the transaction (who has performed read/write operation) when it was entered in the system.
{: .note}

# Working

- **If a transaction Ti issues a read(X) operation:**
    - If TS(Ti) < W-timestamp(X)
        - Operation rejected.
        - We shouldn't read the value overwritten by a younger transaction.
    - If TS(Ti) >= W-timestamp(X)
        - Operation executed.
    - All data-item timestamps updated.

- **If a transaction Ti issues a write(X) operation**
    - If TS(Ti) < R-timestamp(X)
        - Operation rejected.
        - We shouldn't write the value which is already read by a younger transaction.
    - If TS(Ti) < W-timestamp(X)
        - Operation rejected and Ti rolled back.
        - Read Thomas write rule given below.
    - If TS(Ti) > W-timestamp(X) OR If TS(Ti) > R-timestamp(X)
        - Operation executed.

You can remember it as, **"Junios operations are allowed to execute operations".**
{: .note}

- As we can see that time stamping protocol suffers from more abort operations.

# Thomas Write Rule

- We've seen if Ti wants to write(x) and TS(Ti) < W-timestamp(X), then the operation is rejected and Ti is rolled back.
- But if the data is written by a younger transaction before older transaction, we can just ignore the write operation of the older transaction.
- It increases conccurrency quality.
- It **does not ensure conflict serializability** but **ensures view serializability.**

Thats why we said earlier that0 **"If a schedule non-serial, then it must have at least one blind-write to be eligible for view serializability."**
{: .info}