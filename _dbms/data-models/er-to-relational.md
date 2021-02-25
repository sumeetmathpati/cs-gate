---
title: ER Model to Relational Model
nav_order: 3
description: "Entity relationship model or ER diagram."
child_of: Data Models
---

# Converting Entity Sets

## Strong Entity Set, Simple Attributes

- The strong entity set with simple attributes (i.e. not composite or multivalued) will **require only one table in relational model.**
- Attributes of the table will be the attributes of the entity set.
- The primary key of the table will be the key attribute of the entity set.

***

## Strong Entity Set, Composite Attributes

- A strong entity set with composite attributes will **require only one table in relational model.**
- While conversion, simple attributes of the composite (attributes which are connected to the composite attributes) attributes are placed into table and not the composite attributes themselves.

***

## Strong Entity Set, Multivalued Attributes

- A strong entity set with multi valued attributes will **require two tables in relational model.**
- One table will contain all the simple attributes with the primary key.
- Other table will contain the primary key and all the multi valued attributes.

# Converting Relationships

- We can create a saperate table for relationship. The attribute of the tables will be: 
    - **Primary keys of the participating entity sets**, and
    - **Attributes of relation itself.**
- But we can **merge the relationship tables with entity tables in some cases** and decrease the number of tables in database. 
- These cases are classified according to the cardinality constraints. Let's see those cases.

## One-To-One Cardinality Ratio

- In this case, we merge relationship table with any one of the entity set.
- The ER diagram and its equivalent relational model is given in following picture.

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/one-to-one.png)

- Minimum number of tables required is 2.

***

## One-To-Many Cardinality Ratio And Many-To-One Cardinality Ratio

- In this case, we **merge relationship table the table of entity set having cardinamilty *many*.**
- The ER diagram and its equivalent relational model is given in following picture.

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/one-to-many.png)

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/many-to-one.png)

- Minimum number of tables required is 2.

***

## Many-To-Many Cardinality Ratio

- In this case, we create saperate table for relation.
- This saperate table will contain:
    - **Attributes of relation itself (if it has any)**, and
    - **Primary key of both the tables.**
- This table will have composite primary key composed of primary key of both the tables.

- Minimum number of tables required is 3.

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/many-to-many.png)

We merge the relationship table with the table of entity set having cardinality *many*.<br>If both the tables have *many* cardinality then we create saperate table for relationship set.
{: .note}

***

![ER Diagram to Relational Model]({{ site.baseurl }}/assets/images/dbms/er-to-tables.png)

