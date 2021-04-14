---
title: Conflict serializable
description: "Conflict serializable"
nav_order: 4
child_of: Schedules
sub: true
---

- We have two tests to check if the schedule is serializable or not:

- **A schedule is called conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting operations.**


# Conflicting Operations:

- Two operations are called as **conflicting operations** if (all the conditions must hold):
    - Both the operations belong to different transactions
    - Both the operations are on the same data item
    - At least one of the two operations is a write operation
- Examples of conflicting operations given in following picture (marked in red):
    - You can see the diagram *c)* in picture below, W1(x) and W2(x) are not conflicting. because T1 gets commited before the W2(x) operation.

![Conflicting operations]({{ site.baseurl }}/assets/images/dbms/conflicting-operations.png)

***

# Conflict Equivalent

- If one schedule can be converted to other schedule by swapping of non conflicting operations then those two schedules are called conflict equivalent schedules.
- Example, the two given schedules are conflict equivalent

|T1|T2||T1|T2|
|-|-|-|-|
|R(A)|||R(A)||
|W(A)|||W(A)||
||R(A)||R(B)||
||W(A)||W(B)||
|R(B)||||R(A)|
|W(B)||||W(A)|
||R(B)|||R(B)|
||W(B)|||W(B)|


***

# Conflict Serializable

- If a non serial schedule can be converted to serial schedule by swapping non-conflicting instructions then the non-serial schedule is called conflict serializable.
- We can say that a non-serial schedule is conflict serializable if it's conflict equivalent to the serial schedule.

If schedule if NOT conflict serializable, then it **may or may not** be serializable, we have to check further.
{: .note}

# Checking Whether a Schedule is Conflict Serializable

- To check if the schedule is conflict serializable or not; we **use precedence graph.**
- **If the precedence graph has cycle; then the schedule is not conflict serializable else the schedule is conflict serializable.**

## How To Design Precedence Graph?

- Create nodes for each transition.
- If Ti executes operation Ti_read(X) and after that Tj executes Tj_write(X) operation (RW problem), create an edge in graph from Ti to Tj.
- If Ti executes operation Ti_write(X) and after that Tj executes Tj_read(X) operation (WR problem), create an edge in graph from Ti to Tj.
- If Ti executes operation Ti_write(X) and after that Tj executes Tj_write(X) operation (WW problem), create an edge in graph from Ti to Tj.

If there is a cycle in this grpah then the schedule is not conflict serializable.

## Example

- Consider schedule S gives as:
    - r1(X); r3(X); r3(X); r2(Y); r2(Z); w3(Y); w2(Z); r1(Z); w1(X), w1(Z)
    - It's precedence graph will be:

![Precedence Graph]({{ site.baseurl }}/assets/images/dbms/precedence-graph-example.png)

- As above graph has no cycles; the schedule S is conflict serializable.

## Order of Equivalent Serial Schedule

- If schedule is conflict serializable, then the order of equivalent serial schedule is the topological order of precedence graph.
