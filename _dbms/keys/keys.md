---
title: Keys
description: "Super key, candidate key, primary key and foreign key in DBMS."
nav_order: 4
parent: true
---

# Super Key

- To get the data from table, we have to specify the specific tuple or row **uniquely.**
- We specify the row with the attribute(s) which are unique in all the rows throughout the table.
- Refer the following table for example,

|A|B|C|
|-|-|-|
|1|a|p|
|2|b|q|
|3|c|q|
|4|c|r|

- In above table we have attribute A unique throughout the table i.e. in any row we don't have same value of A repeated again. 
    - Hence with attribute A we can specify any row in the table.
- Likewise attribute set AB is also unique in table.
- This unique attribute or composition of attributes is called super key.
- **Super key is a single or set of attributes which is used to specify the row in a table.**
- In above table following are the super keys 
    A, AB, ABC, BC.
- There can be more that one super keys.
- The closure set of super key is all the attributes in a relation.

You may be thinking that if we can search the row with A when why AB, ABC or BC are super keys?<br>Note that super key can contain redundant attributes (even all the attributes). 
{: .note}

# Candidate Key

- Candidate key is **minimal super key.**
- Unlike super key candidate keys **do not contain redundant attributes** and **minimal** in size.
- All the attributes in a candidate key are sufficient as well as necessary to identify each tuple uniquely.
- Removing any attribute from the candidate key fails in identifying each tuple uniquely.
- **The value of candidate key can never be NULL.**
    - In composite candidate key some attributes can have null value but not all.
- Attributes present in candidate key are called **prime attributes.**
- Refer the following table for example,

|A|B|C|
|-|-|-|
|1|a|p|
|2|b|q|
|3|c|q|
|4|c|r|

- In above table A is candidate key, because it's super key, do not contain redundant elements and it's minimal.
- There could be more thatn one candidate keys in table.

Note that BC is a super key, and it also do not contain redundant element, but it can't be a candidate key. Because there is another candidate key (A) which is smaller that it, hence it's not minimal and therefore its not the candidate key.
{: .note}

# Primary Key

- Database administrator choose one candidate key as a primary key of the table.
    - All the other candidate keys which are not primary key are called **alternate keys.**
- The value of primary key must be assigned when inserting a record.
- The values of primary key can never be changed i.e. no updation is possible.
- Relation has only one primary key.

***

![DBMS Keys]({{ site.baseurl }}/assets/images/dbms/keys.png)

