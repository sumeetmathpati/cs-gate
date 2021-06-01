---
title:  "Boolean Function"
description: "Boolean Algebra tutorial."
child_of: Boolean Algebra
nav_order: 1
mathjax: true
---

- Like ordinary algebra; we can also form expressions in Boolean algebra with
    - **Binary variables**
    - **Binary operators AND and OR**, and
    - **Unary operator NOT.**
- A truth table can be expressed using an expression.
- The **output** of a function represented using table can be **0 or 1**.
- Boolean expression is a way to store the information of truth table (like where the output is 1 and 0).
    - Either we store where the output is 1 or where the output is 0.
- Boolean expression can be represented in two forms:
    - Sum of products or **SOP**
    - Product of sum or **POS**

# Number of Functions

- Whow many different functions we can have with n boolean variables?
    - From $n$ boolean variables we can have $2^n$ inputs (because we han have 2 values for them 0 or 1).
    - From $2^n$ different inputs we can have $2^{2^n}$ different functions (as function can have only two outputs 0 or 1).
- Example
    - We have single boolean variable a.
    - Therefore **n = 1**.
    - We can have 2 values as input to the function **a = 0** or **a = 0**.
    - For each input we can have two functions with **output 0** and **output 1.** 

|a|f0|f1|f2|f3|
|0|0|0|1|1|
|1|0|1|0|1|

# SOP and POS

## Sum of Products

- This form of expression is **sum of product terms.**
- This form remember / store information about **where is output 1 in truth table.**
- Product terms (which are being added) are contain literals (or variables) either in normal form of complemented form, example (ab'+a'b') are called **minterms.**
- If literal have value (in truth table)
    - **1: normal form**
    - **0: complemented form**
- Example (ab'+a'b'), means value of 10 and 00 is equal to 1 in truth table.

We do this because in this technique the expression value itself will become equal to 1. <br><br>
Example (ab'+a'b'), means value of 10 and 00 is equal to 1 in truth table. When we put those value in expression it will become (11+11) = 1.
{: .note}

- We will have only one input sequence where output will be 1; hence it represent complete information about truth table.

### Analysis of SOP

- We've seen that SOP remembers where the outputs are 1 in truth table.
- See the following truth table:

|Binary|Minterms|Designation|f|
|-|-|-|-|
|000|a'b'c'|m0|1|
|001|a'b'c|m1|0|
|010|a'bc'|m2|0|
|011|a'bc|m3|1|
|100|ab'c'|m4|0|
|101|ab'c|m5|0|
|110|abc'|m6|1|
|111|abc|m7|0|

- We we've represented variables with 0 value in complemented form; therefore **all the minterms represent 1.**
- We use minterms of the row which has output 1 and add them in an SOP expression. 
- Therefor $f = (m0 + m3 + m6)$
    - All other terms {M1, M2, M4, M5, M7} are maxterms.

### Canonical SOP

- In SOP if each product term (AND term) consists all the literals appearing either in complemented or in normal form i.e. non minimized expresion.
- The problem with canonical form is it's very lengthy and the cost of implementation will be high.
- Example in above table we can write function in canonical form would be = **(a'b'c') + (a'bc) + (abc').**
    - The minimized form of above expression would be **a'(b ⊙ C) + abc.**

***

## Product of Sum

- This form of expression is **product of sum terms.**
- This form remember / store information about **where is output 0 in truth table.**
- Sum terms (which are being multiplied) are contain literals (or variables) either in normal form of complemented form, example (a+b')(a'+b+) are called **maxterms.**
- If literal have value 
    - **1: complemented form**
    - **0: normal form**
- Example (a+b')(a'+b), means value of 01 and 10 is equal to 0 in truth table.

We do this because in this technique the expression value itself will become equal to 0. <br><br>
Example (a+b')(a'+b'), means value of 01 and 10 is equal to 0 in truth table. When we put those value in expression it will become (0+0)(0+0) = 0.
{: .note}

- We will have only one input sequence where output will be 0; hence it represent complete information about truth table.

### Analysis of POS

- We've seen that POS remembers where the outputs are 1 in truth table.
- See the following truth table:

|Binary|Maxterms|Designation|f|
|-|-|-|-|
|000|a+b+c|M0|1|
|001|a+b+c'|M1|0|
|010|a+b'+c|M2|0|
|011|a+b'+c'|M3|1|
|100|a'+b+c|M4|0|
|101|a'+b+c'|M5|0|
|110|a'+b'+c|M6|1|
|111|a'+b'+c'|M7|0|

- We we've represented variables with 1 value in complemented form; therefore **all the maxterms represent 0.**
- We use maxterms of the row which has output 1 and add them in an SOP expression. 
- Therefor $f = (M1 * M2 * M4 * M5 * M7)$
    - All other terms {m0, m3, m6} are minterms.


### Canonical POS

- In POS if each product term (OR term) consists all the literals appearing either in complemented or in normal form i.e. non minimized expresion.
- The problem with canonical form is it's very lengthy and the cost of implementation will be high.
- Example in above table we can write function in canonical form would be = **(a+b+c')(a+b'+c)(a'+b+c)(a'+b+c')(a'+b'+c').**
    - The minimized form of above expression would be **a'(b ⊙ C) + abc.**

# Complement of Function

- Complement of a function $f$ can be obtained by changing **0 to 1** and **1 to 0** in the truth table.
    - $f'$ will return opposite of value returned by $f$.
    - The complement of $f(a, b, c, ..., 0, 1, +, \times)$ is $f(a', b', c', ..., 1, 0, \times, +)$
- Example
    - In table above function $f$ and $f'$ is shown. $f'$ has opposite value of $f$.

|a|b|f|f '|
|-|-|-|-|
|0|0|1|0|
|0|1|0|1|
|1|0|0|1|
|1|1|1|0|

## How to Find Complement

### Method 1

- Add bar to the expression and solve

### Method 2

- If we know the minterms, complement the minterms
- Example
    - If $f(a, b, c) = \\{1, 2, 3\\}$ then $f'(a, b, c) = \\{0, 4, 5, 6, 7\\}$

### Method 3

- Complement all the elements i,e, (change 1s with 0s, ANDs with ORs) and then solve.

***
- In a expression replace
    - Normal variables with complements, 
    - Complemented variables with normals,
    - OR with AND, and
    - AND with OR.
- Example: $f = ac' + ab'c'$
    - $f' = (a'+c) (a'+b+c)$

# Dual Functions

- Example   
    - We knwo that $1 + 0 = 1$ is true or correct statement.
    - By the duality principle we can also say that, $0 \times 1 = 0$ this statement is also true.
- **Duality Principle** says that:
    - If we change
        - constants, **0 with 1**,  
        - constant, **1 with 0**, 
        - **$\times$ with $+$**, and 
        - **$+$ with $\times$** from a boolean equation which is true
    - Then we will get new equation which will also be true.
- **Example,**  
    - f(X, Y, Z) = (XY + YZ + ZX) then its dual is, fd(X, Y, Z) = (X + Y).(Y + Z).(Z + X).

## Self Dual Functions

- A function is said to be self dual function, if the function is equal to it's dual function.
- Example, 
    - The function **F(A, B, C) = AB + BC + CA**
    - Fd(A, B, C) = (A + B)(B + C)(C + A)
    - = AB + BC + CA
- A self dual function is **always neutral.**

# Neutral Function

- A function *f* is neutral, if it has equal number of minterms and maxterms.
- Example,
    - $F(a, b) = \sum_m(1, 2, 3)$ is NOT neutral.
    - $F(a, b) = \sum_m(0, 3)$ is neutral.
    - $F(a, b) = \sum_m(1)$ is NOT neutral.