---
title: Serializability
description: "Conflict serializable and view serializability"
nav_order: 4
child_of: Schedules
sub: true
---

- We have two tests to check if the schedule is serializable or not:

# Conflict Serializable

- **A schedule is called conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations.**


## Conflicting Operations:

- Two operations are called as **conflicting operations** if (all the conditions must hold):
    - Both the operations belong to different transactions
    - Both the operations are on the same data item
    - At least one of the two operations is a write operation
- Examples of conflicting operations given in following picture (marked in red):
    - You can see the diagram *c)* in picture below, W1(x) and W2(x) are not conflicting. because T1 gets commited before the W2(x) operation.

![Conflicting operations]({{ site.baseurl }}/assets/images/dbms/conflicting-operations.png)

***

## Checking Whether a Schedule is Conflict Serializable

- To check if the schedule is conflict serializable or not; we **use precedence graph.**
- **If the precedence graph has cycle; then the schedule is not conflict serializable else the schedule is conflict serializable.**

### How To Design Precedence Graph?

- Note all the conflicting operations between processes.
- Draw an edge between nodes having conflicting oprations.

## Order of Equivalent Serial Schedule

- If schedule is conflict serializable, then the order of equivalent serial schedule is the topological order of precedence graph.

### Example

***

- Schedule S1 and S2 will be **conflict equivalent** if the precedence of both the graph is same.

# View Serializable

- **A schedule is view serializable if it's view equivalent to serial schedule.**

## View Equivalency

- Schedules S1 and S2 are called view equivalent if the following three conditions holds true:
    - In both the schedules, **the initial reader transaction must be same for all data items.**
    - In both the schedules, **write-read sequence must be same.**
    - In both the schedules, **the final writer transaction must be same for all data items.**

### Example

- In example given we have schedule S1 and it's one of the possible serial schedule.

There could be n! possible serial schedule with n transactions and 3! in this case. We have to scheck for all of them, if it's view quivalent to any one of them; it's view serializable.
{: .note}

- S1 is not conflict serializable and hence we're checking if it's conflict serializable.
- S1 and S2 has same first reader transaction (T1) for all data items..
- S1 and S2 has same write-read sequence.
- S1 and S2 has same final write transaction (T3) for all data items.
- And hence it's view serializable.

![Conflicting operations]({{ site.baseurl }}/assets/images/dbms/view-serializable-example.png)

## Shortcut Technique to Find View Serializability

- All conflict schedules are view serializable.
- If schedule is not conflict serializable
    - If there does not exist any blind write, then schedule surely NOT view serializable.
    - If there exist any blind write, then schedule may or may not be view serializable.
- Try to find view equivalent serial schedule.
