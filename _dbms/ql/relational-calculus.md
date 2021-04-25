---
title: "Relational Calculus"
description: "Relational calculus tutorial."
child_of: Query Languages
nav_order: 3
---

- Relational calculus is **non procedural** query language, i.e. the relational calculus tells what to do, but never explains how to do.
- **Relational calculus is more powerful thatn SQL and relational algebra.**
- RC is divided into two categories
    - **Tuple relational calculus** and 
    - **Domain relational calculus** 
- Both TRC and DRC are equal in power.
- As it's based on set theory, relational algebra does not allow duplicate rows in output table.
- Relational calculus has variables, constants, comparison operators, logical connectives and quantifiers.

# Symbols Used:

## Comparison Operators

- Comparison operators like **<, <=, =, >= >** are used.

## Connectives

- **∧** for **AND**
- **∨** for **OR**
- **¬** for **NOT**

## Implication

- **==>** for **Implication**

## Quantifiers

- Existential quantifier: **∃**
- Universal quantifier: **∀**

# Types of Relational Calculus

## Tuple Relational Calculus

- Tuple relational calculus is used for **selecting those tuples that satisfy the given condition.**
- The result of the relation can have one or more tuples.
- The syntax is similar to the *set builder form* in *set theory.*
- **Syntax:**
    - `{t | P(t)}`
        - The set of tuples *t* for which condition/predicate P is true.
- We also use the notations:
    - `t[a]` or `t.a`
        - To indicate value of tuple *t* on attribute *a*.
    - `t ∈ R`
        - To show that tuple *t* is in relation *R*.
- **Example:**
    - `{ t | t ∈ Employee}`
        - We are selecting all the tuples from relation *Employee*.
    - `{ t.name | t ∈ Student ∧ t.roll_no = 101}`
        - Selects name of a student whose roll number is 101.
    - `{t | t ∈Employee ∧ t.salary > 5000}`
        - Finds details of employee whose salary is more than 5000.
        

### Examples

- Use the following relations for examples.

branch(<u>branch_name</u>, branch_city, assets)<br>
customer(<u>customer_name</u>, customer_street, customer_city)<br>
account(<u>acount_number</u>, branch_name, balance)<br>
loan(<u>loan_number</u>, branch_name, amount)<br>
depositor(<u>customer_name</u>, account_number)<br>
borrower(<u>customer_name</u>, loan_number)<br>

- **Find loan_number, branch_name, and amount for all loans over RS 1200.**
    - `{ t | t ∈ loan ^ t.amount > 1200 }`
- **Find loan_number for each loan of an amount greater than 1200.**
    - `{ t | ∃s ∈ loan (t.loan_number = s.loan_number ^ s.amount > 12000) }`
- **Find all customer names having loan at Pune branch.**
    - `{ t | ∃s ∈ borrower (t.customer_name = s.customer_name ^ ∃s ∈ loan (u.branch_name = 'Pune' ^ u.loan_number = s.loan_number)) }`
- **Find names of all customers having loan, an account or both.**
    - `{ t | ∃s ∈ borrower (t.customer_name = s.customer_name) ∨ ∃u ∈ depositor (t.customer_name = u.customer_name) }`
- **Find names of all customers having loan and account.**
    - `{ t | ∃s ∈ borrower (t.customer_name = s.customer_name) ∧ ∃u ∈ depositor (t.customer_name = u.customer_name) }`

***

## Domain Relational Calculus

- In domain relational calculus the records are filtered based on the **domains.**
- Domain relational calculus uses **list of attributes** to be selected from relation based on **condition.**
- Unlike TRC it **selets the attributes** rather than selecting whole tuple.
- **Syntax:**
    - `{ <a1, a2, a3, ..., an> | P(a1, a2, a3, ..., an)}`
        - **a1, a2, a3, ... an** represents domain variables.
        - **P** represents a **condition / predicate.**
        - Result is set of all tuples **a1, a2, a3, ... an** suth that predicate  **P** true for **a1, a2, a3, ... an** tuples. 

### Examples

- Use the following relations for examples.

branch(<u>branch_name</u>, branch_city, assets)<br>
customer(<u>customer_name</u>, customer_street, customer_city)<br>
account(<u>acount_number</u>, branch_name, balance)<br>
loan(<u>loan_number</u>, branch_name, amount)<br>
depositor(<u>customer_name</u>, account_number)<br>
borrower(<u>customer_name</u>, loan_number)<br>

- **Find loan_number, branch_name, and amount for all loans over RS 1200.**
    - `{ <l, b, a> | <l, b, a> ∈ ∧ a > 1200  }`
- **Find loan_number for each loan of an amount greater than 1200.**
    - `{ <l> | ∃b, a (<l, b, a> ∈ loan ∧ a > 1200) }`
- **Find names of all customers who have loan of over RS 1200.**
    - `{ <c> | ∃l, b, a ((<c, l> ∈ borrower ∧ (<l, b, a> ∈ loan ∧ a > 1200)) }`
- **Find all customer names having loan at Pune branch. and find loan amount.**
    - `{ <c, a> | ∃l (<c, l> ∈ borrower ∧ ∃b (<l, b, a> ∈ loan ∧ b = 'Pune')) }`