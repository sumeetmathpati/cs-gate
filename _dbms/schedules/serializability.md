---
title:  Serializability
description: "Serializability"
nav_order: 3
child_of: Schedules
---

- We check is a non-serial schedule is serializable or not.
- **A serializable schedule guarantees that when it gets executed on a consistent database, it's effect will be similar to the serial schedule.**
- And we know that the serial schedules are always give **consistent**.
    - Hence if we can prove that a non-serial schdule is serializable, then we can use a non-serial schedule without any of it's problem (like dirty read, unrepeatable read or lost update ).
- If a non serial schdule gives similar behaviour then is should also give consistent results.
- To check consistency, we have following two classes of chedules.
    - **Conflict serializable schedules**
    - **View Serializable schedules**

![Unrepeatable Schedule]({{ site.baseurl }}/assets/images/dbms/conflict-and-view-serializability.png)

- As we can observe in above picture
    - Every Conflict serializable schedule is view serializable, but not vice versa.
    - Some serializable schedules are not in view serializable class.



