---
title:  "Syntax Analysis Terminologies"
description: "Terminogolies required for syntax analysis. What is parse tree?, What is ambigious grammar?, What is left recursion?, What is left factoring?"
serial: 5
---

## Parse Tree

- A parser tree is a graphical representation of derivation.
- Let's take example **grammar**:
    - `E → E + E`
    - `E → E * E`
    - `E → id `
- Let's take input string: `id + id * id`
- We can create parse tree of derivation for above string:
- ![Parse tree]({{ site.baseurl }}/assets/images/cd-parse-tree.jpg)

***

## Ambigous Grammar

- If we can create more than one parse tree (left derivation or right derivation) for the same string then that grammar is ambigious.
- Example, for grammar and input string given above, we can create two parse trees:
![Parse tree]({{ site.baseurl }}/assets/images/cd-ambigous-grammar.jpg)
- Both trees generate `id + id * id` string.

***

## Left Recursion

- A grammar is left-recursive if it has any non-terminal ‘V’ whose derivation contains ‘V’ itself as the left-most symbol.
- For example, following grammars are left recursive.   
    - `A --> Ab`
    - `A --> Sb`, `S --> Ae`

### Removing Left Recursion

- Let's take a left recursive grammar `A → A α | β  | γ`
- We can convert it to
    - `A → βA' | γA'`
    - `A' → αA' | ε`

***

## Left Factoring

- A grammar is left recursive if more than one grammar production rules has a common prefix string.
- Example
    `A → α β | α γ`

### Removing Left Factoring

- We can remove left factoring from above grammar by converting it to
- `A → α A'`, `A' → β | γ`

***

## First()

- The first of p X or FIRST(X) is a **set** of terminals which can appere at the **start of string** derived form the X.

### Rules

- If `a` is terminal, then
    - `FIRST(a) = a`
- If `x → ε`, then add `ε` to `FIRST(x)`.
- If `X → Y1 | Y2 \| Y3 | Yn` in production, then
    - `FIRST(X) = FIRST(Y1) U  FIRST(Y1) U FIRST(Y3)... U FIRST(Yn) `

***

## FOLLOW()

- The follow of X or `FOLLOW(X)` where X is a non-terminal gives us a set of terminals which can follow X immediately.

### Rules

- If `S` is a start symbol, then `FOLLOW(S) = $`.
- If `A` is a non-terminal and has a production `A --> BC`, then `FOLLOW(B)` is in `FIRST(C)` except `ε`.
- If `A` is a non-terminal and has a production `A --> BC`, where `C` is `ε`, then `FOLLOW(B)` is in `FOLLOW(A)`.

***

## Examples

### 1st Example

Remove left recursion from: `A --> Aa | b`

**Solution**

- `A --> bA'`
- `A' --> aA'`


### 2nd Example

Remove left recursion from:

- `S --> AB`
- `A --> aA | Bb | a`
- `B --> Bde | BAB | ab | d`

**Solution**

- `S --> AB`
- `A --> aA | Bb | a`
- `B --> abB' | dB'`
- `B' --> deB' | ABB'`

### 3rd Example

Remove left recursion from:

- `S --> AA | b`
- `A --> SS | a`

**Solution**

- `S --> SSA | aA | b`
- `A --> SS | a`

<br>

- `S --> aAS' | bS'`
- `S' --> SAS'`
- `A --> SS | a`

### 4th Example

Remove left factoring from:

- `A --> abA | abB | a`
- `B --> bB | b`

**Solution**

- `A --> aA'`
- `A' --> bA | bB | ε`
- `B --> bB'`
- `B' --> B | ε`

<br>

- `A --> aA'`
- `A' --> bA''`
- `A'' --> A | B`
- `B --> bB'`
- `B' → B \| ε`

### 5th Example

Remove left factoring from:

- `S --> oooSS1 | oooS1 | oooS | ooo | oo`

**Solution**

- `S --> ooS'`
- `S' --> oSS1 | oS1 | oS | o | ε`

<br>

- `S --> ooS'`
- `S' --> oS''`
- `S'' --> SS1 | S1 | S | ε`

<br>

- `S --> ooS'`
- `S' --> oS''`
- `S'' --> SS'''`
- `S''' --> SS1 | 1 | ε`

### 6th Example

Find first for all the productions of:

- `S --> AB`
- `A --> aB | b`
- `B --> bB | ε`

**Solution**

- FIRST(S) = {a, b}
- FIRST(A) = {a, b}
- FIRST(B) = {b, ε}

### 7th Example

Find first for all the productions of:

- `S --> AB`
- `A --> aA | ε`
- `B --> bB | d`

**Solution**

- FIRST(S) = {a, b, d}
- FIRST(A) = {a, ε}
- FIRST(B) = {b, d}

### 8th Example

Find first for all the productions of:

- `S --> AB | CD`
- `A --> aA | ε`
- `B --> bB | ε`
- `C --> eC | e`
- `D --> dD | k`

**Solution**

- FIRST(S) = {a, b, ε, e}
- FIRST(A) = {a, ε}
- FIRST(B) = {b, ε}
- FIRST(C) = {e}
- FIRST(D) = {d, k}

### 9th Example

Find first and follow for all the productions of:

- `S --> AB`
- `A --> aA | ε`
- `B --> bB | ε`

**Solution:**

| | First | Follow |
| S | {a, b, ε} | {$} |
| A | {a, ε} | {b, $} |
| B | {b, ε} | {$}  |

### 10th Example

Find first and follow for all the productions of:

- `S --> ABC`
- `A --> aAB | ε`
- `B --> bBC | ε`
- `C --> bB | d`

**Solution:**

| | First | Follow |
| S | {a, b, d ε} | {$} |
| A | {a, ε} | {b, d} |
| B | {b, ε} | {b, d, $} |
| C | {b, d} | {$, d, b}