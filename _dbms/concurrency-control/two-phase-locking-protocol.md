---
title: Two Phase Locking Protocol
description: "Two phase locking protocol, conservative two phase locking, strict two phase locking, rigorous two phase locking."
nav_order: 2
child_of: Concurrency Control
sub: true
---

- 2PL protocols are **always conflict serializable.**
- Here we divide the execution of transaction into two main phases:
    - **Growing phase** or **Lock acquisition phase**
        - In this phase transaction acquire all the locks it requires for execution.
        - Here we can't release any lock on data items.
    - **Shrinking phase** or **Lock releasing phase**
        - In this phase transaction releases all the ecquired locks.
        - Here we can't obtain any lock on data items.

![Two Phase Locking Protocol]({{ site.baseurl }}/assets/images/dbms/two-phase-locking-protocol.png)

Note that, it's not necessary to acquire all the locks continuously, a transaction can aquire lock one data item, execute for some time and thatn aquire lock on another data item.
{: .note}

- The time when we acquire our last lock required for execution in *lock acquiring phase* it's called lock point.

# Examples

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
- Suppose first transactions are waiting for locks help by second transaction which is also waiting for lock held by first transaction, in situation like this deadlock occurs. Hence in 2PL **deadlock may occur.**

# Types of 2PL

## Basic 2PL

- It's simple 2PL protocol, without any rules.
- In this protocol, transaction locks the data items when it needs.
- It's prone to **deadlock and irrecoverability.**

***

## Conservative 2PL

- In this protocol, transaction locks all the data items it needs before the transaction begins execution.
- If any of the needed items cannot be locked, the transaction does not lock any of the items, instead it waits until all the items are available for locking.
- Conservative 2-PL is **deadlock free and but it does not ensure Strict recoverable schedule.**
- It's not easy to implement becuase we can't know what data itmes we need prior to execution.
- Concurrency reduces. 
- It's not used very frequently.

***

## Rigorous 2PL

- **All the locks (either shared or exclusive) should be unlocked after commit.**
- Hence there is no shrinking phase.
- **Deadlock is possible.**

### Benifits

- Generated **conflict serializable** as well as **cascadeless recoverable schedules.**

***

## Strict 2PL

- It's improved version of rigorous 2PL.
- Unlike rigorous 2PL, here we can release onlyshared locks in shrinking phase.
- This is because we have problem with dirty read (which causes irrecoverability) hence we do not release exclusive locks.
- **Deadlock is possible.**
- It's more efficient than rigorous because **concurrency improved.**

### Benifits

- Generated **conflict serializable** as well as **cascadeless recoverable schedules.**
