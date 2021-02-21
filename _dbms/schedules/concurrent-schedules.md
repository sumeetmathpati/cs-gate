---
title: Concurrent Schedules
description: "Concurrent schedules."
nav_order: 3
child_of: Schedules
---

# Classification of Schedules

- To make sure that concurrent schedules satisfy the ACID properties; we've some tests.
    - Recoverability
    - Serializability

## Recoverability

- To test that given schedules satisfy **automicity** and **durability** properties.

## Serializability

- To test that given schedules satisfy **concurrency.**
- To test if schedule is serializable or not we have to check if the schedule is **any one of the following:**
    - **Conflict serializable,** or
    - **View serializable**

***

- Every Conflict serializable schedule is view serializable, but not vice versa.
- ![Unrepeatable Schedule]({{ site.baseurl }}/assets/images/dbms/conflict-and-view-serializability.png)
{: .note}
