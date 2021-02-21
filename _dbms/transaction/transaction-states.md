---
title: Transaction States
description: "First normal form, second normal form, third normal form"
nav_order: 1
child_of: Transactions
---
![Transaction States]({{ site.baseurl }}/assets/images/dbms/transaction-states.png)

# Active State

- When transaction created and transaction starts executing it's in active state.
- All the chanes by write operation are stored in dirty block in secondary memory, they are not permanantly stored.

# Partially Committed State

- Any write operation in active state will make changes in dirty block and not in permanent storage, this state is called **partially committed state.**
- In this state, we can rollback the changes, because they aren't permanently stored in DB.

# Committed State

- Until commit, all the changes are in memory and dirty block.
- When we commit, all the change get written into the database.
- After *commit*, it is not possible to roll back the transaction, this is because the system is updated into a new consistent state.
- The only way to undo the changes is by doing another transaction called as **compensating transaction** that performs the reverse operations.

# Failed State

- Transaction executing in *active state* or *partially committed state* and failure accurs and execution can't continue, then it goes to **failed stat.**

# Aborted State

- When transaction fails, we need to abort the transaction and undo all the changes made by it.
- We undo those changes by *rollback.*
- After rollbacking transaction gets into **aborted state.**

# Terminated State

- It's a last state in transaction life cycle.
- After *committing* or *aborting* transaction enter into **terminated state.**
