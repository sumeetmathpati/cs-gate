---
title: DBMS Languages
parent: DBMS
serial: 4
description: "DBMS languages, DDL, DML, DCL"
---

# DBMS Languages
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

***

## Data Definition Language

- Data definition language or **DDL** for short is used to define database structure or pattern.
- Used to create schema, tables, indexes, constraint, etc. in databse.
- Some common SQL commands in DDL
    - **Create:** It is used to create objects in the database.
    - **Alter:** It is used to alter the structure of the database.
    - ***Drop:** It is used to delete objects from the database.
    - **Truncate:** It is used to remove all records from a table.
    - **Rename:** It is used to rename an object.
    - **Comment:** It is used to comment on the data dictionary.

***

## Data Manipulation Language

- Data manipulation language or **DML** for short is used retrieving and manipulating data in the DBMS.
- Here are some DML tasks
    - **Select:** It is used to retrieve data from a database.
    - **Insert:** It is used to insert data into a table.
    - **Update:** It is used to update existing data within a table.
    - **Delete:** It is used to delete all records from a table.
    - **Merge:** It performs UPSERT operation, i.e., insert or update operations.

***

## Data Control Language

- Data Control language or **DCL** for short is used to **manage rights and permissions** on the DBMS.
- Examples of DCL tasks
    - **Grant:** Used to grant various kinds of permissions.
    - **Revoke:** Used to withdraw different access privileges given by using the `GRANT` command.

***

## Transaction Control Language

- Transaction Control language or **TCL** for short is used to **manage changes made by DML.**
- Here are some tasks that come under TCL:
    - **Commit:** It is used to save the transaction on the database.
    - **Rollback:** It is used to restore the database to original since the last Commit. 