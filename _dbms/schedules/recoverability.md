---
title: Recoverability
description: "Recoverability"
nav_order: 5
child_of: Schedules
sub: true
---

- We check recoverability of a schedule to see if it satisfy the **automicity** and **durability** properties (two of the ACID properties).
- A concurrent schedule can be:
    - **Irrecoverable schedule**
    - **Recoverable**
        - **Cascading schedule**
        - **Cascadeless schedule**
        - **Strict schedule**

# Irrecoverable Schedule

- A schedule is irrecoverable if:
    - **transaction performs dirty read operation i.e. reading data written by uncommitted transaction,** and 
    - **commits before that uncommitted transaction commits.**

## Example

![Irrecoverable Schedule]({{ site.baseurl }}/assets/images/dbms/irrecoverable-schedule.png)

# Recoverable Schedule

- A schedule is recoverable if:
    - transaction performs dirty read operation i.e. reading data written by uncommitted transaction, and 
    - **we delay the commit operation of the operation who has performed the dirty read until the uncommitted operation committs or rollbacks.**

![Recoverable Schedule]({{ site.baseurl }}/assets/images/dbms/recoverable-schedule.png)

## Cascading Schedule

- In a recoverable schedule **if failure of one transaction causes several other dependent transactions to rollback or abort, then such a schedule is called as a Cascading Schedule.**
- This cascading rollbacks occur because we've delayed the commit operation of the operation who has performed the dirty read until the uncommitted operation committs or rollbacks.
    - If the uncommitted transaction rollbacks, then all the dependent transactions (who has performed dirty read) will also rollback.

### Example

- In example below
    - Transaction T2 depends on transaction T1, and
    - Trnsaction T3 depends on transaction T2.
- In this schedule,
    The failure of transaction T1 causes the transaction T2 to rollback.
    The rollback of transaction T2 causes the transaction T3 to rollback.

![Cascading Schedule]({{ site.baseurl }}/assets/images/dbms/cascading-recoverable-schedule.png)

***

## Cascadeless Schedule

- In cascadeless schedules,
    - a transaction is **not allowed to read a data item until the last transaction that has written it is committed or aborted.**
- Cascadeless schedule **allows only committed read operations.**
- Hence, it avoids cascading roll back and thus saves CPU time.

### Example

![Cascadeless Schedule]({{ site.baseurl }}/assets/images/dbms/cascadeless-schedule.png)

- Cascadeless schedule allows only committed read operations.
- However, it **allows uncommitted write operations.**
{: .note}

***

## Strict Schedule

- It's more stict than cascadeless schedule.
- In strict schedules,
    - a transaction is **not allowed to read or write a data item until the last transaction that has written it is committed or aborted.**
- Cascadeless schedule **allows committed read and committed write operations.**

![Strict Schedule]({{ site.baseurl }}/assets/images/dbms/strict-schedule.png)

