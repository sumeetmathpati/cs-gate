---
title: Advanced SQL
description: "Query Language tutorial."
child_of: Structured Quey Languages
nav_order: 2
---

# Views

- It's also called virtual table
- A view is an unexecuted query, that can be run on demand.
- Views **DO NOT reduce IO const.**
- Result will be slower if we use views over direct query.

## Updation Using View

- We can update values in origional table using view **only in some conditions.**


## Single Relation, Without Aggregation

- Example

{% highlight sqql %}
CREATE VIEW emp_info

    SELECT eid, ename, rating
    FROM Emp
    WHERE dno IN (1, 2, 3);

{% endhighlight %}

- **We can update the data by using above view.**

## Single Relation, With Aggregation

- Example

{% highlight sqql %}
CREATE VIEW dept_avgrating

    SELECT dno, ABG(rating)
    FROM Emp
    GROUP BY dno;

{% endhighlight %}

- **We can NOT update the data by using above view.**

## Multiple Relations

- Example

{% highlight sqql %}
CREATE VIEW emp_info

    SELECT eid, dno, dname
    FROM Emp, Dept
    WHERE emp.dno = Dept.dno; 

{% endhighlight %}

- **We can NOT update the data by using above view.**
