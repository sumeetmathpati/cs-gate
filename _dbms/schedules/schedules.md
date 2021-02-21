---
title: Schedules
description: "Schedules in DBMS"
nav_order: 7
parent: true
mathjax: true
---

- **The order in which we execute multiple transactions as they come into the system is called a achedule.**

# Types of Schedules

## Serial Schedule

- In serial schedules all the transactions execute one after other in order they've come into the system for execution.
- Here, when CPU is executing one transaction it **doesn't preempt to execute other transaction.**
- Serial transactions are always:
    - **Consistent**
    - **Recoverable**
    - **Cascadeless**
    - **Strict**
- **Problems with serial schedule are:**
    - More waiting time.
    - Less resource utilization.
    - Less throughput
    - Late respose.

### Example

- Suppose we have two transactions T1 and T2.
- Instructions in T1 and T2 are { R(x), x++, W(x), Commit} and {R(x), R(y), x=x+y, W(x), W(y), Commit} respectively.
- The above two transactions can be executed in following ways if we are using serial schedule.

![Serial Schedule]({{ site.baseurl }}/assets/images/dbms/serial-schedule.png)

- We can see that here another transaction is starting only after completing first transaction.

## Concurrent Schedule

- Here multiple transaction execute in preemptive manner.
- Instruction of transaction are interleaved to execute instruction of another transaction.
- Serial transactions are **NOT always:**
    - **Consistent**
    - **Recoverable**
    - **Cascadeless**
    - **Strict**

The instructions are interleaved between two transactions, but the order of execution of instructions of a transactions is maintained, i.e. I2 of a transaction T can't be executed before I1 of a transaction T.
{: .note}

### Example

- Suppose we have two transactions T1 and T2.
- Instructions in T1 and T2 are { R(x), x++, W(x), Commit} and {R(x), R(y), x=x+y, W(x), W(y), Commit} respectively.
- The above two transactions can be executed in following ways if we are using non-serial schedule.

![Serial Schedule]({{ site.baseurl }}/assets/images/dbms/consurrent-schedule.png)

# Number of Schedules

- Suppose there are *n* number of transactions.
- Transactions T1, T2, T3 …., Tn have K1, K2, K3 …., Kn number of operations respectively.

## Total Number of Schedules

- Total number of possible schedules are:

$$\frac{(K1 + K2 + K3 + ..... + Kn)!}{ (K1! * K2! * K3! * ... * Kn!)}$$

We are dividing with $(K1! * K2! * K3! * ... * Kn!)$ because we dont want permutation between a instructions of a transaction, we want the instructions of a transaction to execute in serial order.
{: .info}

## Total Number of Serial Schedule

- Total number of possible serial schedules are:
- = Total number of ways we can arrange *n* transactions

$$= n!$$

## Total Number of Concurrent Schedules

- Total number of possible concurrent schedules are:

$$= Total \, number \, of \, schedules \, – \, Total \, number \, of \, serial \, schedules$$