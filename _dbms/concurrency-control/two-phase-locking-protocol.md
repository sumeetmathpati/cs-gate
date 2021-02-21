---
title: Two Phase Locking Protocol
description: "Two phase locking protocol, conservative two phase locking, strict two phase locking, rigorous two phase locking."
nav_order: 1
child_of: Concurrency Control
---

- The problem with concurrent schedules is multiple transactions are trying to use same data, hence we use locks to overcome that proeblsm
- **Any transactionwithout appropriate lock can't use the data item.**
- In above definition we've said "appropriate lock". There are two types of locks which are used at different scenarios
- 2PL protocols are **always conflict serializable.**

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

- Here is the matric which shows the locks we can/can't acquire if we have some type of lock already.

||shared(x)|exclusive(x)|
|-|-|-|
|shared(x)|Yes|No|
|exclusive(x)|No|No|

***

- Transactions can also change the locks in from shared to exclusive and vice versa.
- Transactions can always:
    - **Upgrade lock:** From shared to exclusiv.
    - **Downgrade lock:** From exclusive to shared.

# Why 'Two Phase'?

- Here we divide the execution of transaction into three phases:
    - **Starting phase** or **Lock acquisition phase**
        - In this phase transaction acquire all the locks it requires for execution.
    - **Execution phase**
        - In this phase transaction executes its operations.
    - **Shrinking phase** or **Lock releasing phase**
        - In this phase transaction releases all the ecquired locks.

![Two Phase Locking Protocol]({{ site.baseurl }}/assets/images/dbms/two-phase-locking-protocol.png)

- The time when we acquire our last lock required for execution in *lock acquiring phase* it's called lock point.
- After shrinking phase growing phase is not possible.
- **Examples:**
    - S represent shared lock, X represent exclusive lock and U represent release or unlock.
    - Supposte schedule S1
        - **S1 = { S1(a), R2(a), S2(b), R2(b), U2(b), X1(b), R1(b), W1(b), U1(b), S1(b), R1(b), U(b) }**
            - Above schedule does not follow 2PL because T2 acquiring shared lock on b in shrinking phase.
            - We can't acquire any lock in shrinking phase.
    - Supposte schedule S2
        - **S2 = { S1(a), R2(a), X2(a), R2(a), W2(a), X1(b), R1(b), W1(b), U1(b), U(a), U(a) }**
            - Above schedule does not follow 2PL because T2 acquiring exclusive lock on data item *a* even if T1 has shared lock on data item *a*.
    
# Problems With 2PL

- 2PL does not mention anything about *commits* in the protocol, hence 2PL **does not ensure recoverability.**
- There **may be cascading rollbacks in 2PL.**
- Suppose first transactions are waiting for locks help by second transaction which is also waiting for lock held by first transaction, in situation like this deadlock occurs. **Hence in 2PL deadlock may occur.**

# Types of 2PL

## Dynamic 2PL

- It's simple 2PL protocol, without any rules.
- In this protocol, transaction locks the data items when it needs.
- It's prone to **deadlock and irrecoverability.**

***

## Static / Conservative 2PL

- In this protocol, transaction locks all the data items it needs before the transaction begins execution.
- If any of the needed items cannot be locked, the transaction does not lock any of the items, instead it waits until all the items are available for locking.
- Conservative 2-PL is **Deadlock free and but it does not ensure Strict recoverable schedule.**
- It's not easy to implement becuase we can't know what data itmes we need prior to execution.
- It's not used very frequently.

***

## Strict 2PL

- It follows all the rules of 2PL + **all the exclusive locks are unlocked only after commit.**
- **Deadlock is possible.**

### Benifits

- Generated conflict serializable as well as recoverable schedules.
- These recoverable schedules are also cascadeless.

***

## Rigorous 2PL

- It's an extension to the strict 2PL
- **All the locks (either shared or exclusive) should be unlocked after commit.**
- **Deadlock is possible.**

### Benifits

- Generated conflict serializable as well as recoverable schedules.
- These recoverable schedules are also cascadeless.