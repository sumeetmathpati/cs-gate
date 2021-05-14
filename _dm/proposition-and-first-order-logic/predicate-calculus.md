---
title: Predicate Calculus
child_of: Proposition and First Order Logic
nav_order: 5
description: "Predicate calculus, predicate."
mathjax: true
---

- We have simple propositions like `2 > 4`, to which we can say it's *true* or *false*.
- Let's suppose we have statement like `x > 10`, we can't say it's true or false. Because we don't know the value of x.

# Terminologies

## Open Statement

- The propositional statement of which, we can't find the truth value.
- Example, `x > 100`. 
    - We can't say if it's true or false because we don't know the vlaue of x.
- We can plase some values in place of x to make it simple propositional statement of which we can find the truth value.
    - Example, 
        - Open statememt: `x > 100`
        - Simple statement: `10 > 100 = false`, here we've taken x = 10
        - Simple statement: `200 > 100 = true`, here we've taken x = 200

## Predicate

- The predicate is a propositional function.
- Example, `P(x) = x^2 < 32`
- Here we can put different values to get different simple propositional statements.
- Example, 
    - Pedicate function: `P(x) = x < 10`
    - P(1) = `true`
    - p(11) = `false`

## Domain

- Domain is a pool from where we can take values and put in place of variable in the open statement and make it simple propositional statement.

# Quantifiers

- While using predicate, we use domain to take values from.
- But the domain can be very large. Hence instead of checking each value in domain if it's true or not; we ask following quesions:
    - If **all the values** in domain satisfy the predicate.
    - If **some of the values** in domain satisfy the predicate.

## Universal Quantifier $(\forall)$

- $\forall xP(x)$ can be read as:
    - "For all x, P(x) holds."
    - "For every x, P(x) holds."
- **Truth value**
    - If $\forall xP(x)$ is true; 
        - Each element in given domain satisfy gives true for predicate $P$.
    - If  $\forall xP(x)$ is false; 
        - It means at least one element in given domain gives false for predicate $P$.
-  Universal quantification x$\forall xP(x)$ equivalent to the conjunction: $P(x_1) \land P(x_2) \land P(x_3) ... P(x_n)$ . 

## Existential Quantifier $(\exists)$

- $\exists xP(x)$ can be read as:
    - "There is at least one x such that P(x)."
- **Truth value**
    - If $\exists xP(x)$ is true; 
        - At least one element in given domain satisfy gives true for predicate $P$.
    - If  $\exists xP(x)$ is false; 
        - It means NO element in given domain gives false for predicate $P$.
- Existential quantification x$\exists xP(x)$ is equivalent to the disjunction: $P(x_1) \lor P(x_2) \lor P(x_3) ... P(x_n)$. 

## Universal and Existential Quantifier Relation

- $\forall x P(x) \to \exists x P(x)$
- $\neg \forall x P(x) = \exists x \neg P(x)$
    - $\forall xP(x) = P(x_1) \land P(x_2) \land P(x_3) ... P(x_n)$
    - $= \neg \forall xP(x) = \neg P(x_1) \lor \neg P(x_2) \lor \neg P(x_3) ... \neg P(x_n) ... De \ Morgan's \ law$
    - $= \neg(P(x_1) \lor P(x_2) \lor P(x_3) ... P(x_n))$
    - $= \exists \neg P(x)$

# Notes

- $\neg \exists x P(x) \equiv \forall x \neg P(x)$
- $\neg \forall x P(x) \equiv \exists x \neg P(x)$
- $\forall x(P(x) \land Q(x)) \equiv \forall xP(x) \land \forall Q(x)$
- $\exists x(P(x) \lor Q(x)) \equiv \exists xP(x) \lor \exists Q(x)$
- $\exists xP(x) \land \exists xP(x) \nrightarrow \exists(P(x) \land Q(x))$
- $\exists xP(x) \lor \exists xP(x) \nrightarrow \exists(P(x) \lor Q(x))$
