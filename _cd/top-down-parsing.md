---
title:  "Top Down Parsing"
description: "Top down parting, LL(1) parsing"
nav_order: 6
---

- In top down parsing we start parse tree from root node and go down to the leaf node.
- General representation of top down parser is LL(1) parser.

## LL(1) Grammar

- **Properties of LL(1) Grammar**
    - Backtracking,
    - Left recursion,
    - Left factoring, and
    - Grammar is unambigious.

### Meaning of The Notation

- In the notation LL(k)
    - First (from left side) L is for direction of scanning string: **Left to right**.
    - Second L is for derivation: **Left most derivation**.
    - K is for lookahead characters: **k lookahead characters**.

### LL(1) Parsing Table

- If we want to check if the grammar is LL(1) or not; we can check if it contains left recursion and left factoring.
    - But we don't have any method/algorithm to check if the grammar is unambigious or not.
- To check that we create parsing table.
- To create LL(1) parsing table, first we have to find first and follow of all the productions in grammar.
- **If a single cell of a parsing table has multiple entries, then the grammar is not LL(1).**
- In a table if cell is blank, it's an error.
    - Question may be asked like "How many errors are in the table?".   
#### Rules

- Add A -> α under table M[A, b] for all b in FIRST(α).
- If FIRST(α) contains ε then add A -> α under M[A,c] for all c in FOLLOW(A).

 
#### Example

Grammar

- `S --> AB`
- `A --> aA | ε`
- `B --> bB | ε`

First and follow

| | First | Follow |
| S | {a, b, ε} | {$} |
| A | {a, ε} | {b, $} |
| B | {b, ε} | {$} |

Parsing table

| | a | b | $ |
| S | S --> AB | S --> AB | S --> AB |
| A | A --> aB | A --> ε | A --> ε |
| B | | B --> bB | B --> ε |

No cell has multiple entries. Hence it's LL(1) grammar.

***

## Examples

### 1st Example

Check is grammar is LL(1).

- `S --> CC`
- `C --> cC | d `

**Solution:**

First and follow

| | First | Follow |
| S | {c, d} | |
| C | {c, d} | |

**Note:** We only require to find follow if the null production is there.
{: .info}

Parsing table

| | c | d | $ |
| S | S --> CC | S --> CC | |
| C | C --> cC | C --> d | |

No cell has multiple entries. Hence it's LL(1) grammar.

### 2nd Example

Check is grammar is LL(1).
Find number of error entries.

- `E --> TE'`
- `E' --> +TF' | ε`
- `T --> FT'`
- `T' --> *FT' | ε`
- `F --> id | (E)`

**Solution:**

First and follow

| | First | Follow |
| E | {id, (} | {$, )} |
| E' | {+, ε} | {$, )} |
| T | {id, (} | {+, $, )} |
| T' | {*, ε} | {+, $, )} |
| F | {id, (} | {id, (} |

Parsing table

| | + | * | id | ( | ) | $ |
| E | | | E --> TE | E --> TE | | |
| E' | E' --> +TF' | | | | E' --> ε | E' --> ε |
| T | | | T --> FT' | T --> FT' | | |
| T' | T' --> ε | T' --> *FT' | | | T' --> ε | T' --> ε |
| F | | | F --> id | F --> (E) | | |

No cell has multiple entries. Hence it's LL(1) grammar.

There exist 17 error entries.

### 3rd Example

Check is grammar is LL(1).

- `S --> aSa | ε`

**Solution:**

First and follow

| | First | Follow |
| S | {a, ε} | {$, a} |

Parsing table

| | a | $ |
| S | S --> aSa, S --> ε | S --> ε |

Cell M[S, a] has multiple entries. Hence it's **not** LL(1) grammar.

### 4th Example

Check is grammar is LL(1).

- `S --> AB | CD`
- `A --> aA | b`
- `B --> bB | d`
- `C --> aC | eD`
- `D --> d`

**Solution:**

First and follow

| | First |
| S | {a, b, e} | 
| A | {a, b} |
| B | {b, d} |
| C | {a, e} |
| D | {d} |

Parse table

| | a | b | c | d | e | $ |
| S | S --> AB, S --> CD | S --> AB |  |  | S --> CD |  |
| S | A --> aA | A --> b |  |  |  |  |
| S | | B --> bB | | B --> d  |  |  |
| S | C --> aC | | |  | C --> eD  |  |
| S | | | | D --> d  | | |

Cell M[S, a] has multiple entries. Hence it's **not** LL(1) grammar.

### 5th Example

Check is grammar is LL(1).

- `S --> aSb | ε`

**Solution:**

First and follow

| | First | Follow |
| S | {a, ε} | {b, $} |

Parsing table

| | a | b | $ |
| S | S --> aSb | S --> ε | S --> ε |

No cell has multiple entries. Hence it's LL(1) grammar.

