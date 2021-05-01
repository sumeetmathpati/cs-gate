---
title: Well Formed Formulas
child_of: Proposition and First Order Logic
nav_order: 3
description: "Well formed formulas."
mathjax: true
---

# Propositional Variable

- Propositional variable is used to store a proposition. 
    - Similar to the variables in algebra used to store real values.

# Well Formed Formula

- If P is proposition; then P is well formed formula.
- If a is WFF, then $\neg a$ is also a WFF.
- If P and Q are WFF, then $(P \land Q), (P \lor Q) , (P \to Q), (P \leftrightarrow Q)$ are also WFF.

# Truth Table Of WFF

- If we substitute the propositions to the propositional variables in WFF, we get proposition involving connectives.
- If we have n propositional variables, then we will get $2^n$ possible combinations.
    - Similar to the boolean expression.

## Example

- Let's suppose we have popositional variables $p, q, r$.
- Our WFF is = $(p \to (q \to r)) \to ((p \to q) \to (p \to r))$
- It's truth table will be:

## Tautology

- A tautology is a WFF whose truth value if **true for all** possible combinations.
- It's also called **valid**.

### Example

- As we can see in the table below; the vlaue of complete WFF is true for all the combinations of values of propositional variables.

|$p$|$q$|$r$|$(p \to (q \to r))$|$((p \to q) \to (p \to r))$|$(p \to (q \to r)) \to ((p \to q) \to (p \to r))$|
|-|-|-|-|-|-|
|f|f|f|t|t|**t**|
|f|f|t|t|t|**t**|
|f|t|f|t|t|**t**|
|f|t|t|t|t|**t**|
|t|f|f|t|t|**t**|
|t|f|t|t|t|**t**|
|t|t|f|f|f|**t**|
|t|t|t|t|t|**t**|

## Contradiction

- A contradiction is a WFF whose truth value if **false for all** possible combinations.

### Example

- As we can see in the table below; the vlaue of complete WFF is false for all the combinations of values of propositional variables.

|$p$|$q$|$p \land q$|$\neg q$|$p \land q \land \neg q$|
|-|-|-|-|-|-|
|t|t|t|f|**f**|
|t|f|f|t|**f**|
|f|t|f|f|**f**|
|f|f|f|t|**f**|

## Contingency

- A WFF which is **neither contradiction nor tautology** is called contingency.
- It's sometimes true and sometimes false.

### Example

- As we can see in the table below; the vlaue of complete WFF is false for all the combinations of values of propositional variables.

|$p$|$q$|$p \lor q$|$p \land (p \lor q))$|
|-|-|-|-|
|t|t|t|**t**|
|t|f|t|**t**|
|f|t|t|**f**|
|f|f|f|**f**|

## Satisfieble & Unsatisfiable WFF

- A WFF which is either tautology or contingency is called **satisfiable.**
- A WFF which is contingency is called **unsatisfiable.**