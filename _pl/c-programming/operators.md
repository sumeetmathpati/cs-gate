---
title: Operators
description: "Operators in C programming language."
child_of: "C Programming"
nav_order: 8
---

# Operator Precedence and Accosiativity

## Precedence 

- If there are more than one operators in an expression; we decide which operator to execute first according to their **precedence.**

## Accociativity

- The direction in which the expression is evauated with that operator is determined by **assiciativity** of that operator.
- If the precedence of the two operators is same, then the order of operations is also determined by their associativity.

***

- Operators Precedence & Associativity Table:

*(lower the position in the table; lower the precedence)*

|Operators	|Associativity|
|-|-|
|`()`, `[]`, `->`, `.`| Left to right |
|`!`, `~`, `+`, `-`, `++`, `--`, `&`, `*`, `sizeof`, `(type)`|Right to left|
|`*`, `/`, `%`|Left to right|
|`+`, `-`|Left to right|
|`<<`, `>>`|Left to right|
|`<`, `<=`, `>`, `>=`|Left to right|
|`==`, `!=`|Left to right|
|`&`|Left to right|
|`^`|Left to right|
|`\|`|Left to right|
|`&&`|Left to right|
|`||`|Left to right|
|`?:`|Right to left|
|`=`, `*=`, `/=`, `%=`, `+=`, `-=`, `&=`, `^=`, `|=`, `<<=`, `>>=`|Right to left|
|`,`|Left to right|


## Examples

#### 1. `10 + 2 * 4;`

- The precedence of `*` is higher than `+` hence `2 * 4` will get evaluated first (which is `8`) then `10 + 8` will be evaluated.

#### 2. `a = 10;` 

- the associativity of `=` is Right-To-Left hence Right-value(`10`) is assigned to Left-value(`a`).

#### 3. `1 == 2 != 3`

- THe `==` and `!=`, both have same precedence.
- Which one of them is executed first id determined by their associativity.
- Their associativity is left-to-right.
- Hence `==` will be evaluated first and then `!=`.