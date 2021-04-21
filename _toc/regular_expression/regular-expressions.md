---
title: Regular Expressions
description: "Regular Expressions tutorial."
nav_order: 3
parent: true
mathjax: true
---
 
- **Regular expression is an expression that can generate exactly those strings which are in regular language.**
- It's an declarative way of representation of regular language.

# Operators

- **R<sup>\*</sup>**: Is a kleene closure of regular expression R. (* is a unary operator)
- **R<sup>+</sup>**: Is a positive closure of regular expression R. (+ is a unary operator)
- **.** : Is a concatenation operator. (. is a binary operator)
- **+**: Is a OR operator . (+ is a binary operator)

# Properties of Regular Expresisons Using Operators

## Union

### Does Satisfy

- **Commutative property**
    - r1+r2 = r2+r1
- **Associative property**
    - r1 + (r2 + r3) = (r1 + r2) + r3
- **Idempotent**
    - r1+r1 = r1

### Does NOT Satisfy

- **Distributive property**
    - r1+(r2.r3) ≠ (r1+r2)(r1+r3)

## Concatenation

### Does Satisfy

- **Associative**
    - r1(r2.r3) = (r1.r2)r3
- **Distributive**
    - r1(r2+r3) = (r1r2)+(r1r3)

### Does NOT Satisfy

- **Commutative property**
    - r1.r2 ≠ r2.r1
- **Idempotent**
    - r1.r1 ≠ r1

# Equivalence Between FA and RE

## Conversion of FA to RE

# RegEx identities

## OR Operator

- ε + ε = ε
- ε + ∅ = ε
- ∅ + ε = ε
- ∅ + ∅ = ∅
- ∅ + R = R
- R + ∅ = R
- ε + R = R
- R + ε = R
- R + R = R

***

## Concatenation Operator

- ε . ε = ε
- ε . ∅ = ∅ 
- ∅ . ε = ∅
- ∅ . ∅ = ∅
- ∅ . R = ∅
- R . ∅ = ∅
- ε . R = R
- R . ε = R
- R . R = RR


**Concatenation of ∅ with any element is ∅.** ∅ is dominator in concatenation operation.
{: .info}

***

## Kleene's Closure Operator

- ε<sup>\*</sup> = ε
- ∅<sup>\*</sup> 
    - = ∅<sup>0</sup> + ∅<sup>1</sup> + ∅<sup>2</sup> + ∅<sup>3</sup> ...
    - = ε + ∅ + ∅ + ∅ ... 
    - = ε

***

## Positive Closure Operator

- ε<sup>\*</sup> = ε
- ∅<sup>+</sup> 
    - = ∅<sup>1</sup> + ∅<sup>2</sup> + ∅<sup>3</sup> ...
    - = ∅ + ∅ + ∅ ... 
    - = ∅


***

- R<sup>\*</sup>R<sup>\*</sup> = R<sup>\*</sup>
- RR<sup>\*</sup> = R<sup>+</sup>
- R<sup>+</sup>R<sup>\*</sup> = R<sup>+</sup>
- R<sup>+</sup>R<sup></sup> = RR<sup>+</sup>
- R<sup>+</sup>∪ R<sup>\*</sup> = R<sup>\*</sup>
- R<sup>+</sup>∩ R<sup>\*</sup> = R<sup>+</sup>
- R<sup>\*</sup>R<sup>\*</sup>=R<sup>\*</sup>
- (R<sup>+</sup>)<sup>\*</sup> = R<sup>\*</sup>
- (R<sup>\*</sup>)<sup>+</sup> = R<sup>\*</sup>

***

- (P + Q)<sup>\*</sup> = (P<sup>\*</sup> + Q)<sup>\*</sup> = (P + Q<sup>\*</sup>)<sup>\*</sup> = (P<sup>\*</sup> + Q<sup>\*</sup>)<sup>\*</sup> = (Q<sup>\*</sup> P<sup>\*</sup>)<sup>\*</sup> = (P<sup>\*</sup>Q<sup>\*</sup>)<sup>\*</sup>
- P.P<sup>\*</sup> = P<sup>\*</sup>.P = P<sup>+</sup>
- (P<sup>\*</sup>)<sup>\*</sup> = P<sup>\*</sup>
- R.∅ = ∅.R = ∅
- R<sup>\*</sup>+R<sup>+</sup> = R<sup>\*</sup>(ε+R)
- (PQ)<sup>\*</sup>P=P(QP)<sup>\*</sup>
- ε+R<sup>\*</sup>R=R<sup>\*</sup>