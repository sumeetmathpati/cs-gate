---
title:  Functionally Complete Functions
description: "Simplification of Boolean Expression"
child_of: Boolean Algebra
nav_order: 3
mathjax: true
---

- We know that there are only three fundamental boolean operators, and those are NOT, AND, OR.
- All other operators are dereived from these operators.
- NAND and NOR are universal gates.
    - I.e. all the other operations or functions can be implemented with only NAND or NOR gates.
- If a function can implement NOT along with AND or OR; then we can say that the function is functionally complete.
    - Because, NOT with AND is NAND; and NOT with OR is NOR.
    - NAND and NOR are both functionally complete; if a function can implement any one of them, then it's functionally complete.
- A function is called **partially complete** if it can implement any logic circuit (similar to functionally complete functions) with the help of input logic 0 and input logic 1.
    
# AND-OR-NOT Relation

![AND OR NOT Relation]({{ site.baseurl }}/assets/images/dl/and-or-not-relation.png)

- If we add NOT gate to IO pins $a, b, c$ of AND gate; it will be equivalent to the OR gate with NOT gate attached to all the IO pins except pins corresponding to $a, b, c ...$
- If we add NOT gate to IO pins $a, b, c$ of OR gate; it will be equivalent to the AND gate with NOT gate attached to all the IO pins except pins corresponding to $a, b, c ...$

# AND-OR (NAND-NAND) Implementation

- Most of the time we use SOP expressions.
- All the SOP expressions can be constructed as two level implementation.
    - In first level **AND** the literals to form product terms.
    - In second level **OR** (sum) those product terms
- Therefore it's called AND-OR implementation.
- Example,

![AND OR Implementation]({{ site.baseurl }}/assets/images/dl/and-or-implementation.png)

- We can convert above AND-OR circuit into NAND-NAND circuit.

![NAND NAND Implementation]({{ site.baseurl }}/assets/images/dl/nand-nand-implementation.png)

# OR-AND (NOR-NOR) Implementation

- All the POS expressions can be constructed as two level implementation.
    - In first level **OR** the literals to form product terms.
    - In second level **AND** (sum) those product terms
- Therefore it's called OR-AND implementation.
- Example,

![OR AND Implementation]({{ site.baseurl }}/assets/images/dl/and-or-implementation.png)

- We can convert above AND-OR circuit into NAND-NAND circuit.

![NOR NOR Implementation]({{ site.baseurl }}/assets/images/dl/nor-nor-implementation.png)

# Implementing Every Gate With NAND

![NAND as Universal Gate]({{ site.baseurl }}/assets/images/dl/nand-as-universal-gate.png)

***

||Required NAND|Required NOR|
|-|-|-|
|NOT|1|1|
|AND|2|3|
|OR|3|2|    
|NAND|1|4|
|NOR|4|1|
|XOR|4|5|
|XNOR|5|4|

