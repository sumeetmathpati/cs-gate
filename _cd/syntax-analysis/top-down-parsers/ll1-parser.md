---
title:  LL(1) Parser
description: "LL1 LL(1) parsing"
nav_order: 12
child_of: Syntax Analysis
sub: true
---

- As it'a a top down parser, we construct a parse tree from top to leaves.
- Time complexity of this parsig algorithm os **O(n).**

# Meaning of The Notation

- In the notation LL(k)
    - First (from left side) L is for direction of scanning string: **Left to right**.
    - Second L is for derivation: **Left most derivation**.
    - K is for lookahead characters: **k lookahead characters**.

# LL(1) Grammar

- **If a single cell of a parsing table has multiple entries, then the grammar is not LL(1).**

## LL(1) Grammar Detection

- A single production grammar is LL(1) grammar.
    - A single production grammar is a grammar in which every non-terminal have single production.
- In production `A --> p | q | r |...`, first(p), first(q)... must be pairwise disjoint else grammar is not LL(1).
- In production `A --> p | ε`, First(p) ∧ follow(A) = ∅.
- Left recursive grammars are not LL(1).
- Ambiguous grammars are NOT LL(1).
- Common prefix grammars are NOT LL(1).
    - `S --> ab | abc | abcd` is not a LL(1) grammar.

Remoing left recursion and common prefixes do not guarantee that grammar will be LL(1).
{: .note}

**Every LL(1) grammar is also a CLR(1) grammar.**<br>We can't compare LL(1) with LR(0), SLR(1) and LALR(1) grammars.
{: .info}

# LL(1) Parsing

## LL(1) Parsing Table Construction

- For each production rule `A --> p` of a grammar G
    - For each termial `x` in `first(p)`:
        - Add `A --> p` to `table[A, x]`
    - If there is `ε` in `first(p)`
        - For each terminal `x` in a `follow(A)`; add `A --> p` to `table[A, x]`
    - If there is ε in `first(p)` and `$` in `follow(A)`:
        - Add `A --> p` to `table[A, $]`.

**Note:** A row is decided by non-terminal and a column is decided by the first(non-terminal). If the first of non-terminal contains ε; then the follow(non-terminal) is used to decide the column.
{: .note}

### Example

- Grammar

{% highlight bash %}
{
    S --> AB
    A --> aA | ε
    B --> bB | ε
}
{% endhighlight %}

- First and follow

| | First | Follow |
| S | {a, b, ε} | {$} |
| A | {a, ε} | {b, $} |
| B | {b, ε} | {$} |

- Parsing table

| | a | b | $ |
| S | S --> AB | S --> AB | S --> AB |
| A | A --> aB | A --> ε | A --> ε |
| B | | B --> bB | B --> ε |

No cell has multiple entries. Hence it's LL(1) grammar.

***

## Rules

Suppose `x` is a symbol on top of stack, and `a` is a symbol to which lookahead pointer is pointed at.

- If `x = a = $`
    - Parsing is successful, accept input.
- If `x = a != $`
    - Pop `x`.
    - Increment lookahead.
- `x` is a non-terminal on top of the stack, and now we have to replace it, but `x` have multiple productions.
    - Then we have to look at parsing table.
    - If lookahead pointer is pointing at `a`; then we have to replace the `x` with the production given in row `x` and column `a`.
    - If the entry in the table `[x, a] = x --> uvw`; then we enter `uvw` in stack inreverse order i.e. `u` will be on top.
    - If `[x, a]` is blank, syntax error is generated.

***
 
## Example

- Grammar

{% highlight bash %}
{
    S --> aBa
    B --> aB | ε
}
{% endhighlight %}

- Table

||a|b|$|
|S|S-->aBa|||
|B|B --> ε|B --> bB||

- Parsing

|Stack|Input|Action|
|-|-|-|
|$S|abba$|S --> aBa|
|$aBa|abba$|Pop|
|$aB|bba$|B --> bB|
|$aBb|bba$|Pop|
|$aB|ba$|B --> bB|
|$aBb|ba$|Pop|
|$aB|a$|S --> ε|
|$a|a$|Pop|
|$|$|Accept|

***

# Questions

## Q1

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

## Q2

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

## Q3

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

## Q4

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

## Q5

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

## Q6

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
