---
title: Structured Quey Languages
description: "Structured query language (SQL) tutorial."
nav_order: 15
parent: true
---

- SQL is a practicall used to store, manipulate and retrieve data in database.
- In SQL input and output both are relations.
- Number of realations **input to the query will be at least one,** but **output will be always single relation** without any name unless specified.
- `SELECT` and `FROM` clauses are mendatory and `WHERE` is optional.
- SQL in geneal is **NOT case sensitive.**
- SQL allowes duplicate in a input relation as well as output.
- The SQL queries used in this article is according to the **MySQL.**

# SQL Common Data Types

- INT
- FLOAT
- DOUBLE
- CHAR(n)
- VARCHAR(n)
- BOOLEAN
- DATETIME

# Constraints

- Constaraints are rules applied on data stored in database.
- Constraint can be applied on table at two time:
    - While creating table (using `CREATE TABLE` command).
    - After table is created (using `ALTER TABLE` command).
- Constraints can be **column level** or **table level.** 
    - Column level constraints apply to a column, and 
    - Table level constraints apply to the whole table.
- **Syntax:**

{% highlight sql %}
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);
{% endhighlight %}

***

## NOT NULL

- Generally columns can hold null value.
- `NOT NULL` constraint ensure that null value can't be stored in column.
- Which means that you cannot insert a new record, or update a record without adding a value to this field.
- Example
    - The following SQL ensures that `roll_number` and `name` columns will not be null.

{% highlight sql %}
CREATE TABLE Student (
    roll_number int NOT NULL,
    name varchar(255) NOT NULL,
    age int
);
{% endhighlight %}

{% highlight sql %}
-- Add constraint on already created table.
ALTER TABLE Student
MODIFY roll_number int NOT NULL;
{% endhighlight %}

***

## UNIQUE

- Makes sure that all the values in the column are unique.
- If a column is `PRIMARY KEY` then it will automatically ensures `UNIQUE` constraint.
    - However, you can have many `UNIQUE` constraints per table, but only one `PRIMARY KEY` constraint per table.
- Examples,

{% highlight sql %}
CREATE TABLE Student (
    roll_number int NOT NULL,
    name varchar(255) NOT NULL,
    age int,
    UNIQUE (roll_number)
);
{% endhighlight %}

{% highlight sql %}
-- Multipla columns
-- Give name to the constraint
CREATE TABLE Student (
    roll_number int NOT NULL,
    administration_id int NOT NULL,
    name varchar(255) NOT NULL,
    age int,
    CONSTRAINT uc_roll_number UNIQUE (roll_number, administration_id)
);
{% endhighlight %}

{% highlight sql %}
-- Add constraint on already created table.
ALTER TABLE Student
ADD UNIQUE (roll_number);
{% endhighlight %}

{% highlight sql %}
-- Add constraint on already created table.
-- Multipla columns
-- Give name to the constraint
ALTER TABLE Student
ADD CONSTRAINT uc_roll_number UNIQUE (roll_number, administration_id);
{% endhighlight %}

***

## PRIMARY KEY

- The `PRIMARY KEY` constraint ensures that column uniquely identify each row in table.
- Primary keys automatically satisfy `NOT NULL` and `UNIQUE` constraint.
- A table can only have only one primary key.
- A promary key can be composed of multiple columns.
- Examples,

{% highlight sql %}
CREATE TABLE Student (
    roll_number int NOT NULL,
    name varchar(255) NOT NULL,
    age int,
    PRIMARY KEY (roll_number)
);
{% endhighlight %}

{% highlight sql %}
-- Multipla columns
-- Give name to the constraint
CREATE TABLE Student (
    roll_number int NOT NULL,
    administration_id int NOT NULL
    name varchar(255) NOT NULL,
    age int,
    CONSTRAINT pk_roll_number PRIMARY KEY (roll_number, administration_id)
);
{% endhighlight %}

{% highlight sql %}
-- Add constraint on already created table.
ALTER TABLE Student
ADD PRIMARY KEY (roll_number);
{% endhighlight %}

{% highlight sql %}
-- Name the constraint
-- Multipla columns
ALTER TABLE Student
ADD CONSTRAINT pk_roll_number PRIMARY KEY (roll_number);
{% endhighlight %}


## CHECK

- Ensures that all the values in the column ensures the condition.

## DEFAULT

- This constraint consist the value should be assigned to the entity if value not specified.

## INDEX

- This constraint is used to create and retrieve data from table very quickly.

***

# Parts of SQL

## DDL

- Provides commands for defining relation schemas, deleting relations and modifying relational schemas.
- Example, primary key can't be null, foreign key reference.
- Provides commands for `integrity constraints` on the data stored in database.
- `Commands for defining views` e.g. sorting the result according to some attributes.
- `Commands for access rights`, example, readonly, r/w, grant etc.

### CREATE INDEX

- Created index for the table.
- Syntax

{% highlight sql %}
CREATE INDEX index_name
ON table_name (column1, column2, ...);
{% endhighlight %}

{% highlight sql %}
-- Creates a unique index on a table. 
-- Duplicate values are not allowed:
CREATE INDEX index_name
ON table_name (column1, column2, ...);
{% endhighlight %}

### Alter table

- Modifies the table definition (Adds, deletes or modifies attributes or constraints).

{% highlight sql %}
-- Add column
ALTER TABLE table_name
ADD column_name datatype;
{% endhighlight %}

{% highlight sql %}
-- Drop column
ALTER TABLE table_name
DROP COLUMN column_name;
{% endhighlight %}

{% highlight sql %}
-- Alter/modify column
ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
{% endhighlight %}

### DROP TABLE

- permanantly deletes the table.
- Syntax

{% highlight sql %}
DROP TABLE table_name;
{% endhighlight %}

### CREATE SCHEME AUTHORIZATION
- Creates a database schema 
### CREATE TABLE
- Creates new table into user's database schema.
### DROP VIEW
- Permanantly deletes the view.
### DROP INDEX

- Permanantly deletes the index.
- Syntax

{% highlight sql %}
ALTER TABLE table_name
DROP INDEX index_name;
{% endhighlight %}

### CREATE VIEW

- Creates a dymanic subset of rows/columns from one or more tables
- Syntax

{% highlight sql %}
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
{% endhighlight %}

### CREATE TABLE AS
- Creates new table based on a query in the user's databse schema.

***

## DML

- Provides ability to query DB.
- Can insert tuples, delete tuples and modify tuples.
- Example,
    - UPDATE
    - COMMIT
    - INSERT
    - SELECT
        - WHERE
        - GROUP BY
        - HAVING
        - ORDER BY
    - DELETE
    - ROLLBACK

***

## Transaction control

- SQL includes commands for specifying begining and ending of transactions.
- Example, commit, rollback, savepoints.

***

# Operators and functions

## Logical operators

- Used in conditional expressions.
    - **AND**
    - **OR**
    - **NOT**

## Comparison operators

- Used in conditional expressions.
    - **=**
        
    - **<**
        
    - **<=**
        
    - **>=**
        
    - **<>**
        

## Aggregation functions

- **COUNT**
    - Returns number of rows with non null values
- **MIN**
    - Returns minimum attribute value found in given column.
- **MAX**
    - Returns maximum attribute value found in given column.
- **SUM**
    - Returns sum of all values of a given column.
- **AVG**
    - Returns average of all the values of given column.

## Special operators

- **BETWEEN**
- **IS NULL**
- **LIKE**
- **IN**
- **EXISTS**
    - Checks whether a query returns any rows.
- **DISTINCT**

