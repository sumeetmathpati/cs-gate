---
title: Connectives and Operators
child_of: Proposition and First Order Logic
nav_order: 2
description: "Logical connectives, conjuntions, disjunction, not, and, implication, double implication."
sub: true
mathjax: true
---

- Following symbols are used to connect or perform operations on propositional statements.

# Connectives

## AND (∧)

- This connective used where we want to connect statements and want the **compund statement true only when all the sub statements are true.**
- Truth table

|A|B|A∧B|
|-|-|-|
|F|F|F|
|F|T|F|
|T|F|F|
|T|T|T|

- Example,
    - Let's say we have statements (which may be true or false)
        - *"Today is Saturday."*
        - *"Today's date is Jan 1, 2000."*
        - *"I ate an apple."*
    - The compund statement created with AND (∧) 
        - ("Today is Saturday **∧** Today's date is Jan 1, 2000 **∧** I ate an apple") will be only true when all the above statements will be true.

***

## OR (∨)

- This connective used where we want to connect statements and want the **compund statement true even if single sub statements is true.**
- Truth table

|A|B|A∨B|
|-|-|-|
|F|F|F|
|F|T|T|
|T|F|T|
|T|T|T|

***

## Implication (-->)

- This connective used when we want to say **"If this; then that".**
- Implications are represented as P1 --> P2.
    - If P1 is true, then P2 must be true.
    - P2 can be true or false if P1 is false.
- Example,
    - *"If you study"* --> *"you will get good marks."*
    - Above statement says if you study; you will definitely get doog marks. If you san't study you may or may not get doog marks.

- Truth table

|A|B|A∨B|
|-|-|-|
|F|F|T|
|F|T|T|
|T|F|F|
|T|T|T|

***

## Double Implication (<-->)

- This connective is used to say **"If and only if"**
- The double implication is represented with P1 <--> P2.
    - Both P1 and P2 will have same truth value.
    - I.e. if P1 is true; them p2 must be true and vice versa.

- Truth table

|A|B|A∨B|
|-|-|-|
|F|F|T|
|F|T|F|
|T|F|F|
|T|T|T|

# Modifier

## NOT (¬)

- It's an negation operator.
- It's unary operator (unlike all the operators give above; they are binary).
- As name suggests, it negates the statement.
- I.e. if the statement is true; after applying this operator statement becomes false.
- true = ¬false

# Properties of Logic Operators

## Idempotent Law

- $P \land P = P$
- $P \lor P = P$

## Identity Law

- $P \land True = P$
- $P \lor False = P$

## Dominance Law

- $P \land False = False$
- $P \lor True = True$


## Commutative Law

- $P \lor Q = Q \lor P$
- $P \land Q = Q \land P$

## Associative Law

- $P \land (Q \land R) =  (P \land Q) \land R$
- $P \lor (Q \lor R) =  (P \lor Q) \lor R$

## Distributive Law

- $P \land (Q \lor R) =  (P \land Q) \lor (P \land R) $
- $P \lor (Q \land R) =  (P \lor Q) \land (P \lor R) $

## Complement Law

- $P \land \neg P = False$
- $P \lor \neg P = True$