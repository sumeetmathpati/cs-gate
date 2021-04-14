---
title: View serializable
description: "Conflict serializable"
nav_order: 5
child_of: Schedules
sub: true
---

- **A schedule is view serializable if it's view equivalent to serial schedule.**

# View Equivalency

- Schedules S1 and S2 are called view equivalent if the following three conditions holds true:
    - In both the schedules, **the initial reader transaction must be same for all data items.**
    - In both the schedules, **write-read sequence must be same.**
    - In both the schedules, **the final writer transaction must be same for all data items.**

# View Serializable

- If a non-serial schedule is view equivalent to any serial schedule, then that schedule is view serializable.

## Example

- In example given we have schedule S2 and it's one of the possible serial schedule.

- S1 is not conflict serializable and hence we're checking if it's view serializable.
- S1 and S2 has same first reader transaction (T1) for all data items (in this case we have only one data item).
- S1 and S2 has same write-read sequence.
- S1 and S2 has same final write transaction (T3) for all data items.
- And hence it's view serializable.

![Conflicting operations]({{ site.baseurl }}/assets/images/dbms/view-serializable-example.png)

There could be n! possible serial schedule with n transactions and 3! in this case. We have to check for all of them, if it's view quivalent to any one of them; it's view serializable.
{: .note}

# Shortcut Technique to Find View Serializability

- All conflict schedules are view serializable.
- A non-conflict schedule must have at least one bling write operation to be eligible for view serializability.
    - I.e. If a schedule is not conflict serializable and does not contain any blind write oepration, then it can never be view serializable, but if a schedule is not conflict serializable and have blind write then it may or may not be view serializable.

![Conflicting operations]({{ site.baseurl }}/assets/images/dbms/before-checking-view-serializability.png)

