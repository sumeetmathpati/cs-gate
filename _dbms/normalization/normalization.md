---
title: Normalization
description: "Super key, candidate key, primary key and foreign key in DBMS."
nav_order: 5
parent: true
---

# Database Anamolies

To understand anamolies take following relation for *college* as an example.

|<u>roll</u>|name|c_id|c_name|
|-|-|-|-|
|1|Ram|1|COA|
|2|Shyam|1|COA|
|3|Lakshman|2|DBMS|

## Insertion Anamoly

- Insertion Anomalies happen when **inserting data into the database is not possible because other data is NOT already there.**
- For example, in relation given above, we can't add information about new course because there is currently no student applying for that course and *roll* is primary key.

## Updation Anamoly

- An update anomaly is a data inconsistency that results from data **redundancy and a partial update.**
- For example, in above table if we want to update the id of *course* COA, and we do it only in first place. Then this will be partial update (because the id of *course* COA is not changed everywhere in table) and hence the DB will be in inconsistent state.

## Deletion Anamoly

- Deletion Anomalies happen when the **deletion of unwanted information** causes desired information to be deleted as well. - - For example, in above table if we delete the third row with *roll = 0*, then the information about the *course* DBMS will also get deleted.

# Normal Forms

- To remove above anamolies and redundancy, we normalize the tables.
- We normalize the tables into different forms.
- Higher the normal form, better the schema.
- We have following normal forms:
    - **1NF**
    - **2NF**
    - **3NF**
    - **BCNF (Boyce-Codd normal form)**
    - **4NF** (NOT important for GATE)
    - **5NF** (NOT important for GATE)

## Relationshiop Between Normal Forms

- In diagram belw, if any normal form is in inner circle, then it will also be in outer circle normal form.

![Normal Forms Relation]({{ site.baseurl }}/assets/images/dbms/normal-forms-relation.png)

