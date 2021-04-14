---
title: ACID Properties
description: "ACID properties. Database transaction ACID properties."
nav_order: 2
child_of: Transactions
---

- Before executing transaction, we assume that database is in consistent state. After executing the transaction, the database should be in consistent state.
- To preserve this property, all the transactions should satisfy the ACID properties.
- A transaction contains instructions like read and write.

# Automicity

- A transaction should execute all the instruction in it including *commit* or execute none of them.
- When system fails or some problem occurs; all the partially executed transactions should be rollbacked or reverted.
- Automicity is ensured by **recovery management system.**

# Isolation

- Transactions execute in concurrent manner i.e. there could be multiple transactions in system and they may preempt any time during execution.
- But the net effect should be similar to executing all the transactions one after another.
- All transactions should feel like they are only one in the system.
- Isolation is ensured by **concurrency control system.**

# Durability

- When transaction gets committed and all the data is saved in DB; that data must persist in the database.
- These changes must not loosedue to any failure.
- Durability is ensured by **recovery control system.**

# Consistency

- The database should be in consistent state before and after the execution of transaction.
- If transactions satisfy above three properties; the database will be in consistent state after the execution of transaction.