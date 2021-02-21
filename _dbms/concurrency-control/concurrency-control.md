---
title: Concurrency Control
description: "Concurrency control protocols in DBMS"
nav_order: 8
parent: true
mathjax: true
---

- We have seen the proeblms in concurrenct schedules like dirty read, unrepeatable read etc.
- We've categorized the concurrent scedules into *Conflict serializable* and *recoverable*  which ensures that if concurrent schedule are under those standards, then the concurrent schedule is safe to execute without any problem.
    - Conflict serializable scedules satisfy concurrency.
    - Recoverable scheduels satisfy automicity and durability.
- **To make schedules conflict serializable and recoverable we have some protocols used in real world DBMS, those we are going to see here.**
    - **Two phase locking protocol**
    - **Graph / tree based protocol**
    - **Time staming protocol**