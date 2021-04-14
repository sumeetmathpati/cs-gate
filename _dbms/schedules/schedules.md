---
title: Schedules
description: "Schedules in DBMS"
nav_order: 7
parent: true
mathjax: true
---

- **Schedule is a collection of operations from multiple transactions.**
- So basically a schedule is just a collection of instructions in multiple transactions.


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
- Concurrent transactions are **NOT always:**
    - **Consistent**
    - **Recoverable**
    - **Cascadeless**
    - **Strict**

- In a oncurrent schedule, instructios can preempt from one transaction to other but instruction of a sigle transactions must come in same sequence as it come in origional transactions.
- **Example,** 
    - Let transaction *T1 = {R(A), W(A), R(C), W(C)}*, *T2 = {R(B), W(B)}*
    - Valid schedules on above transactions cab be:
        - *S1 = {R1(A), W1(A), R2(B), W2(B), R1(C), W1(C)}*
        - *S1 = {R1(A), W1(A), R2(B), R1(C), W2(B), W1(C)}*
    - But the following schedule is not correct.
        - *S1 = {R1(A), W1(A), R2(B), W2(B), W1(C), R1(C)}*
            - Above schedule is not valid because the R(C) and W(C) of first transaction are not present in same order as they are in the T1.

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

We are dividing with $(K1! * K2! * K3! * ... * Kn!)$ because we dont want permutation between a instructions of a transaction, we want the instructions of a transaction to execute in same order.
{: .info}

## Total Number of Serial Schedule

- Total number of possible serial schedules are:
- = Total number of ways we can arrange *n* transactions

$$= n!$$

## Total Number of Concurrent Schedules

- Total number of possible concurrent schedules are:

$$= Total \, number \, of \, schedules \, – \, Total \, number \, of \, serial \, schedules$$