---
title: Deadlock avoidance schemes
description: "Deadlock avoidance schemes, wound wait scheme, waid die scheme."
nav_order: 3
child_of: Concurrency Control
---

- Many concurrency protocols suffer from deadlock.
- To avoid the deadlock, we have two schemes.
    - **Wait-die scheme**
    - **Wound-wait scheme**

# Wait-die scheme

- Non preemptive scheme.
- Preference given to older transaction
- It leads to more rollbacks.
- When transaction Tn requests a data item currently held by Tk, Tn is allowed to wait only if it has a timestamp smaller than that of Tk (older transaction waits), otherwise Tn is killed.
- In short:
    - **If data request is from older transaction; older one waits for the data.**
    - **If data request is from younger transaction; younger transaction is killed.**

## Example

![Wait Die Scheme]({{ site.baseurl }}/assets/images/dbms/wait-die-scheme.png)

- In above example T1 is older thatn T2 and T3 is younger thatn T2.


# Wound-wait

- It is a opposite of the wait-die scheme.
- Preemptive scheme.
- Preference given to the older transactions.
- Few rollbacks are possible.
- When Transaction Tn requests a data item currently held by Tk, Tn is allowed to wait only if it has a timestamp larger than that of Tk (younger transaction waits), otherwise Tk is killed i.e. Tk is wounded by Tn (older transactions kills the younger transaction for and gets the data).

- In short:
    - **If data request is from older transaction; older one gets the data by killing the transaction which currently holds the data.**
    - **If data request is from younger transaction; younger transaction is has to wait for the data.**

## Example

![Wound Wait Scheme]({{ site.baseurl }}/assets/images/dbms/wound-wait-scheme.png)

- In above example T1 is older thatn T2 and T3 is younger thatn T2.