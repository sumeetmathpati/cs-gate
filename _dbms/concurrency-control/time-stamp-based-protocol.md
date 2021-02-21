---
title: Time Stamp Based Protocol
description: "Time stamp based protocol, Thomas Write rule."
nav_order: 2
child_of: Concurrency Control
---

- Provodes guarantee of  **conflict serializability.**
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
    - **Read time stamp:** Latest time stamp when the data item was read by some transaction.
    - **Write ime stampL** Latest time stamp when the data item was written by some transaction.


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
        - Read Thomas write rule.
    - Otherwise, operation executed.

# Thomas Write Rule

- We've seen if Ti wants to write(x) and TS(Ti) < W-timestamp(X), then the operation is rejected and Ti is rolled back.
- But if the data is written by a younger transaction before older transaction, we can just ignore the write operation of the older transaction.
- It increases conccurrency quality.
- It **does not ensure conflict serializability** but **ensures view serializability.**
