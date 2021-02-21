---
title: "Relational Algebra"
description: "Relational algebra tutorial."
serial: 101
---

- Relationa algebra is one of the two formal query languages assicialted with relational model.
- It defines a number operators on relations (tables).
- **Every operator** in relational algebra
    - **Takes one or two realtion(s) as input argument.**
    - **Generates a single relation as a output without name.**
- Relational algebra (and Relational calculus) **do not consider duplicacy** as it's based on set theory
    - It means in output, duplicate results will not be there.
- In each quey we describe a step by step procedures for computing the desired results, hence it's **procedural query language**.
- There is no use of English words.

# Operators

- Let's use operators on these relations.

- `Student` relation

|roll_number|name|
|-|-|
|1|A|
|2|B|
|3|C|

- `Staff` relation

|emp_id|name|
|-|-|
|1|A|
|2|P|
|3|Q|

## Projection (π)

- It is an **unary operator,** and hence take only one table as an input at a time.
- Projection operator **selects the column** in a relation.
- Syntax: `π column_name (table)`
- Example: `π roll_number, name (Student)`
    - Selects `roll_number` and `name` columns from table `Student`.
    - Output

|1|A|
|2|B|
|3|C|

- It works as **select** in SQL.

***

##  Select (σ)

- It is an **unary operator,** and hence takes only one table as an input at a time.
- Select operator **finds the row/touple in the table by given condition.**
- Syntax : `σ <condition> <table_name>`
- Example: `σ roll_number = 1 (Student)`
    - Selects rows in table Student where `roll_number` = `123`.
    - Output

|1|A|

- It has same function as of **WHERE** clause in SQL.

**Note:** The projection in an relational algebra works as SELECT clause in SQL and select in relational algebra works as WHERE clause in SQL.
{: .note}

***

## Union (∪)

- It is an **binary operator,** and hence takes two tables as an input at a time.
- Union operator is used to perform union between two given relations.
- Syntax: `<table_1> ∪ <table_2>`
- Example: `π name (Student) ∪ π name (Staff)`
    - Selects names from tables `Student` and `Staff`.
    - Output

|A|
|B|
|C|
|P|
|Q|

***

## Intersection (∩)

- It is an **binary operator,** and hence takes two tables as an input at a time.
- Union operator is used to perform intersection between two given relations.
- Syntax: `<table_1> ∩ <table_2>`
- Example: `π name (Student) - π name (Backlog)`
    - Prints common names from table `Student` and `Staff`.
    - Output

|A|

***

## Set difference (-)

- It is an **binary operator,** and hence takes two tables as an input at a time.
- The set difference operator is used to get the output in which all the tuple present in one relation but are not in the second relation.
- Syntax: `<table_1> - <table_2>`
- Example: `π name (Student) - π name (Staff)`
    - Prints names present in table `Student` but not in `Staff`.
    - Output

|B|
|C|

***

## Cartesian product (⋈)

- It is an **binary operator,** and hence takes two tables as an input at a time.
- Cartesian product allows us to combine information of two tables.
- It is similar to the cartesian product in sets.
- Syntax: `<table_1> ⋈ <table_2>`
- Example: `Student ⋈ Staff`
    - It outputs all the combinarions of all the rows in first table with all the rown in second table.
    - Output

|1|A|1|A|
|1|A|2|B|
|1|B|3|C|
|2|B|1|A|
|2|B|2|B|
|2|B|3|C|
|3|C|1|A|
|3|C|2|B|
|3|C|3|C|

- As we can see in above output, each touple (ordered set of attributes) of a first table is combined with each touple of other table.
- Hence we will get `m` touples/rows in output where `m = (number of rows in first table) * (number of rows in second table)`.

***

## Rename  (p)

- It is an **unary operator,** and hence take only one table as an input at a time.
- The rename operation is used to rename the output relation
- Syntax: `ρ(old_name, new_name)`
- Example: `ρ(Student, Students)`
    - Renames relation `Student` to `Students`.

***

# Examples

- Consider following bank database.
- Primary keys are shown with underline.
- Foreign keys are sown with arrows.

![Bank Schema Tables]({{ site.baseurl }}/assets/images/dbms-bank-schema.png)

## Questions

1. Find the details of account having balance less >= 100
2. Find the customer whois in Pune.
3. Find the details of the loan having amount <= 500 and from Pune branch. 
4. Find the details of the branches in Pune having assets more than 10,000.
5. Find all the names of branches of the banks.
6. Find all the account numbers along with their balance.
7. Find the name of all the customers who have loan.
8. Find all the details about branch.
9. Find the name of all customers from Pune city
10. Find account numbers where balance is less than 1000
11. Find those loan numbers which are from Mumbai branch with amount < 10000.
12. Find name and city of branch with assets more than 100000.
13. Find the name of customer who ahs loan or account or both.
14. Find the name of a branch who have account but not loan.
15. Find the name of customers who neither have loan nor account.
16. Find account numbers of accounts in Pune.
17. Find customer names who have loan from branch having assets > 100000.
18. Find account numbers which are in Pune.
19. Find those customer names who have a loan from a branch having assets more than 100000.

<div class="w3-card w3-round">
<div class="w3-white">
<button onclick="toggleAccordion('Demo1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i
        class="fa fa-circle-o-notch fa-fw w3-margin-right"></i>Answers</button>
<div id="Demo1" class="w3-hide w3-container" markdown="1">

1. `σ balance >= 100 (account)`
2. `σ customer_city = 'Pune' (customer)`
3. Here different answers are possible:
    - `σ amount <= 500 (σ branch_name = 'Pune'(loan))`
    - `σ branch_name = 'Pune' ∧ amount <= 5000 (loan)` 
4. `σ branch_city = 'Pune' ∨ assets <= 10000 (branch)`
5. `π branch_name (branch)`
6. `π account_number, balance (account)`
7. `π customer_name (borrower)`
8. `(branch)`
9. `π customer_name (σ customer_city = 'Pune' (customer))`
10. `π account_number (σ balance < 1000 (account))`
11. `π loan_number (σ branch_name = 'Mumbai' ∧ amount < 10000 (loan))`
12. `π branch_name, branch_city (σ assets > 100000 (branch))`
13. `(π customer_name (depositor)) ∪ (π customer_name (borrower))`
14. `(π branch_name (account)) - (π branch_name (loan))`
15. `(π customer_name (customer)) - (π customer_name (depositor) ∪ π customer_name (borrower))`
16. `π account_number (σ branch_city = 'Pune' ∧ branch.branch_name = account.branch_name (branch x account))`
17. `π customer_name (σ assets > 100000 ∧ branch.branch_name = loan.branch_name ∧ borrower.loan_number = loan.loan_number (branch x loan x borrower))`
18. `π account_number σ branch_city = 'Pune' ∧ branch.branch_name = account.branch_name (branch x account)`
19. `π customer_name (σ assets > 100000 ∧ loan.branch_name = branch.branch_name ∧ borrower.loan_number = loan.loan_number (borrower x loan x branch))`

**Note:** When we use both select and project operator; always use project operator first and then select operator.
{: .note}

</div>
</div>
</div>
<br>










