---
title: Operators in Relational Algebra
description: "Operators in Relational Algebra. Join, Semi join, natural join, cartesian product, union, intersection, select, project"
nav_order: 1
child_of: Relational Algebra
mathjax: true
---

# Project (π)

- The project operator selects certain columns (attributes) from the relation.
- It's a **cNOT a commutative** operation.
- **Syntax:**
    - `π A1, A2 (r)`
    - Above statement selects/prints only *A1* and *A2* attributes of all rows in relation *r*.
- It's similar to the `SE:ECT` clause in SQL.
- **Example:**
    - `π NAME, CITY (CUSTOMER)`
    - Prints *name* and *city* attributes of all rows in customer relation.



# Select (σ)

- The select operator selects rows/tuples that satisfy a given condition.
- It's a unary operator, i.e. only takes single relation as a input.
- It's a **commutative.**
    - `σ P1 (σ P2 (R))` = `σ P2 (σ P2 (R))`
- **Syntax:**
    - `σ p (r)`
    - Above statement selects rows from table *r* where condition *p* satisfies.
- It's similar to the `WHERE` clause in SQL.
- **Example:**
    - `π NAME, CITY σ CITY='Pune' (CUSTOMER)`
    - Prints *name* and *city* attributes of rows having *CITY='Pune'* in customer relation.



Note tath **SELECT** in relatioanal algebra is similar to **WHERE** in SQL, and **PROJECT** in relational algebra is similar to the **SELCT** in SQL.
{: .note}

# Union (∪)

- Union operation between two relations is union of rows of those two relations.
- Similar to union in set theory, it do not print duplicate rows.
- Two relations are **union-capable** if and only if (satisfy both the conditions):
    - They have same number of fields, and
    - Corresponding fields, taken order from left to right, have the same domain.
- **Syntax:**
    - `A ∪ B`
    - Above statement gives new table (without name) consisting union of rows of relation *A* and *B*.
- **Example:**
    - `π CUSTOMER_NAME (BORROW) ∪ π CUSTOMER_NAME (DEPOSITOR)`
    - Above table prints the customer (attribute in both the tables) it its in either relation *BORROW* **OR** *DEPOSITOR*.

# Intersection (∩)

- Inersection operation between two relations is intersection of rows of those two relations.
- Similar to intersection in set theory.
- **Syntax:**
    - `A ∩ B`
    - Above statement gives new table (without name) consisting intersection of rows of relation *A* and *B*.
- **Example:**
    - `π CUSTOMER_NAME (BORROW) ∩ π CUSTOMER_NAME (DEPOSITOR)`
    - Above table prints the customer (attribute in both the tables) it its present in **BOTH** the relations *BORROW* and *DEPOSITOR*.

# Set Difference

-  The set intersection operation `A - B` contains all tuples that are in A but not in B.
- This operation is similar to the *set difference* in set theory.
- **Syntax:**
    - `A - B`
- **Example:**
    - `π CUSTOMER_NAME (BORROW) - π CUSTOMER_NAME (DEPOSITOR)`
    - Prints all hte customer names who are in *borrower* relation but not in *depositor* relation.

# Cartesian Produt (X)

- The Cartesian product is used to combine each row in one table with each row in the other table. It is also known as a cross product.
- It's similar to *cartesian product* operation in set theory.

## Example

- Suppose we have two relations **A** and **B**.

A

|W|X|
|-|-|
|1|p|
|2|q|

B

|Y|Z|
|-|-|
|3|r|
|4|s|

AXB

|W|X|Y|Z|
|-|-|-|-|
|1|p|3|r|
|1|p|4|s|
|2|q|3|r|
|2|q|4|s|

# Inner Joins

- An inner join includes only those tuples with matching attributes and the rest are discarded in the resulting relation.

## Natural Join (⋈)

- Natural join solves the problem of cartesian prodct, that we were getting extra data.
- It does not concatenate the way a Cartesian product does. 
- **We can perform a Natural Join only if there is at least one common attribute that exists between two relations.**
- In addition, the attributes must have the same name and domain.
- **Natural join works on those matching attributes where the values of attributes in both the relations are same.**

### Example

- Suppose we have two relations *Courses* and *HoD*

**Courses**

|CID|Course|Dept|
|-|-|-|
|CS01|DBMS|CS|
|CS02|COA|CS|
|CS03|DEL|E&TC|

**HoD**

|Dept|Head|
|-|-|
|CS|Ram|
|ME|Shyam|
|E&TC|Lakshman|

**Courses ⋈ HoD**

|CID|Course|Dept|Head|
|-|-|-|-|-|
|CS01|DBMS|CS|Ram|
|CS02|COA|CS|Ram|
|CS03|DEL|E&TC|Lakshman|

***

## Equi join (=)

# Outer Join

- An inner join includes only those tuples with matching attributes and the rest are discarded in the resulting relation.
- If we want to use those tuples which are not mathiching, we need outer join.

## Left Outer Join (⟕)

- Similar to natural join, but **all the tuples from the right relation, are included in the resulting relation.**
- If there are tuples in left relation without any matching tuple in the right relation, then the those attributes of the resulting relation are made NULL.

### Example

**Courses**

|CID|Course|Dept|
|-|-|-|
|CS01|DBMS|CS|
|CS02|COA|CS|
|CS03|DEL|E&TC|

**HoD**

|Dept|Head|
|-|-|
|CS|Ram|
|ME|Shyam|

**Courses ⟕ HoD**

|CID|Course|Dept|Dept|Head|
|-|-|-|-|-|
|CS01|DBMS|CS|CS|Ram|
|CS02|COA|CS|C|Ram|
|CS03|DEL|E&TC|NULL|NULL|

***

## Right Outer Join (⟖)

- Similar to natural join, but **all the tuples from the right relation, are included in the resulting relation.**
- If there are tuples in right relation without any matching tuple in the left relation, then the those attributes of the resulting relation are made NULL.

### Example

**Courses**

|CID|Course|Dept|
|-|-|-|
|CS01|DBMS|CS|
|CS02|COA|CS|

**HoD**

|Dept|Head|
|-|-|
|CS|Ram|
|ME|Shyam|
|E&TC|Lakshman|

**Courses ⟖ HoD**

|CID|Course|Dept|Dept|Head|
|-|-|-|-|-|
|CS01|DBMS|CS|CS|Ram|
|CS02|COA|CS|CS|Ram|
|NULL|NULL|NULL|E&TC|Lakshman|

***

## Full outer join (⟗)

- All the tuples from both participating relations are included in the resulting relation. 
- If there are no matching tuples for both relations, their respective unmatched attributes are made NULL.

### Example

**Courses**

|CID|Course|Dept|
|-|-|-|
|CS01|DBMS|CS|
|CS02|Electrical Engineering|EE|

**HoD**

|Dept|Head|
|-|-|
|CS|Ram|
|ME|Shyam|

**Courses ⟗ HoD**

|CID|Course|Dept|Head|
|-|-|-|
|CS01|DBMS|CS|Ram|
|CS02|Electrical Engineering|EE|NULL    

