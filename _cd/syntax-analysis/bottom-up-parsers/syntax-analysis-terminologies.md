---
title:  "Syntax Analysis Terminologies"
description: "Syntax analysis, first, follow, grammar, ambigous grammar, left recursion."
nav_order: 1
child_of: Syntax Analysis
mathjax: true
---

# Parse Tree

- A parser tree is a graphical representation of derivation.
- Let's take example **grammar**:
    - `E → E + E`
    - `E → E * E`
    - `E → id `
- Let's take input string: `id + id * id`
- We can create parse tree of derivation for above string:
- ![Parse tree]({{ site.baseurl }}/assets/images/cd/parse-tree.jpg)

# Parser

- Parser is a machine which taked the context gree grammar and some string as input and checks whether the string is valid for the provided CFG.
- This machine is **deterministic push down automata.**

# Ambigous Grammar

- If we can create more than one parse tree (left derivation or right derivation) for the same string then that grammar is ambigious.
- Example, for grammar and input string given above, we can create two parse trees:
![Ambiguous Grammar]({{ site.baseurl }}/assets/images/toc/ambigous-grammar.png)
- Both trees generate `id + id * id` string.



# Left Recursion

- A grammar is left-recursive if it has any non-terminal ‘V’ whose derivation contains ‘V’ itself as the left-most symbol.
- For example, following grammars are left recursive.   
    - `A --> Ab`
    - `A --> Sb`, `S --> Ae`

## Removing Left Recursion

- Let's take a left recursive grammar `A → A α | β  | γ`
- We can convert it to
    - `A → βA' | γA'`
    - `A' → αA' | ε`


# Left Factoring

- A grammar is left recursive if more than one grammar production rules has a common prefix string.
- Example
    `A → α β | α γ`

## Removing Left Factoring

- We can remove left factoring from above grammar by converting it to
- `A → α A'`, `A' → β | γ`

***

# First and Follow

- The we require *First* and *Follow* in most of the parsing algorithms, hence you may not know their use now, but we will know why they are used while studying those algorithms.

## First

- First of a grammar variable is a **set of terminals which appears on the first position on RHS of productions of that variable.**

### Rules

- First $(\\{a, b, c \\}) = \\{ a \\}$
- If $A --> aX$
    - Then $First(A) = \\{ a \\}$
- If $A --> Bx$
    - Then $First(A) = First(B)$, where B does not produce $\epsilon$
- If $A --> BX$
    - Then $First(A) = \\{First(B) - \epsilon\\} \cup \\{First(X)\\}$
        - Here $B$ may produce epsilon maybe with some other terminals.
- If $A --> \epsilon$
    - Then $First(A) = \epsilon$

***

## Follow

- Follow of an non-terminal is set of terminals which appere immediatly after that non-terminal in some sentential form.

### Rules

- $Follow(S) = \\{ \\$ \\}$, where $S$ is a starting symbol.4
- If $A \to pBX$
    - Then $Follow(B) = \\{ Follow(X) \\}$, where $X \nrightarrow \epsilon$
- If $A \to pB$
    - Then $Follow(B) = Follow(A)$
- If $A \to pBX$
    - Then $Follow(B) = First($

# Top Down and Bottom Up Parsing

|Top Dows Parsing|Bottom Up Parsing|
|-|-|
|A parse tree is created from root to leaves.|A parse tree is created from leaves to root.|
|Travarsal of parse tree is pre-order traversal.|A traversal of a parse tree is post-order traversal.|
|Tracing leftmost derivation.|Tracing rightmost derivation.|
|Types: Backtracking parsing, predictive parsing.|Types are LR(0), SLR(1), LALR(1), CLR(1), operator precedence parsing.|
||More powerful than top-down parsing.|

# Examples

## Q1

Remove left recursion from: `A --> Aa | b`

**Solution**

- `A --> bA'`
- `A' --> aA'`


## Q2

Remove left recursion from:

- `S --> AB`
- `A --> aA | Bb | a`
- `B --> Bde | BAB | ab | d`

**Solution**

- `S --> AB`
- `A --> aA | Bb | a`
- `B --> abB' | dB'`
- `B' --> deB' | ABB'`

## Q3

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

## Q4

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

## Q5

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

## Q6

Find first for all the productions of:

- `S --> AB`
- `A --> aB | b`
- `B --> bB | ε`

**Solution**

- FIRST(S) = {a, b}
- FIRST(A) = {a, b}
- FIRST(B) = {b, ε}

## Q7

Find first for all the productions of:

- `S --> AB`
- `A --> aA | ε`
- `B --> bB | d`

**Solution**

- FIRST(S) = {a, b, d}
- FIRST(A) = {a, ε}
- FIRST(B) = {b, d}

## Q8

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

## Q9

Find first and follow for all the productions of:

- `S --> AB`
- `A --> aA | ε`
- `B --> bB | ε`

**Solution:**

| | First | Follow |
| S | {a, b, ε} | {$} |
| A | {a, ε} | {b, $} |
| B | {b, ε} | {$}  |

## Q10

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