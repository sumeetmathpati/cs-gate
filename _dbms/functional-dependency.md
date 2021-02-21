---
title: Functional Dependency
description: "Super key, candidate key, primary key and foreign key in DBMS."
nav_order: 3
mathjax: true
---

- We say that, **there is an functional dependency between A and B shown by A-->B; if we can search the value of B if we have A.**
    - Here value of A and B means instance values of attributes A and B.

Keep in mind that we can **search** the value B in database if we have A, We DO NOT compute or calculate the value like functions.<br> If we don't have a database, we can't search the value.
{: .note}

- We call if *functional* dependency, because it **works like functions.**
    - **If we give value, it gives us another value.**
    - **We do not get the different value for same input.**
    - **We can get same value for different input.**
- In functional dependency A --> B, A if called **determinant** and B is called **determined.**

- **Example,**
    - In table below, there are following functional dependencis:
        - **x -> y**, we can search values of y if we have given x.


|x|y|z|
|-|-|-|
|1|1|1|
|2|1|2|A functional dependency X --> Y is said to be trivial if and only if Y ⊆ X.
|2|1|3|
|3|1|1|

***

- **Observation:**
- Functional dependency $A \to B$ holds, if
    - **Either all values of $A$ are unique,** or
    - **All values of $B$ are same,** or
    - **Both**
{: .info}

- **The decomposition of FD:**
    - We can't saperate the LHS attributes of the FD, because we are able to search the RHS if we have all the LHS attributes.
    - We can saperate the RHS attributes.
    - Example, in FD **AB --> CD**, we can say that
        - **AB --> C,** and
        - **AB --> D**
    - But we CANNOT say that,
        - **A --> CD**, or
        - **B --> CD**


# Types of Functional Dependencies

## Trivial Functional Dependency

- A functional dependency is said to be trivial if we are getting the value which is in determinant.
    - I.e. in **x --> y**, y ⊆  x.
- Example,
    - AB --> A
        - In above FD we are giving A in determinent, but are getting A in determined also. It's useless and hence called trivial dependency.

***

## Non-Trivial Functional Dependency

- A functional dependency is said to be non-trivial if we are getting the value which is not in determinant.
    - I.e. in **x --> y**, y ⊄  x.
- Example,
    - **AB --> BC**
        - In above FD we are giving AB in determinent, and getting BC in determined also. 
        - It's not trivial because we are getting at least one new value (which is C).
    - **AB --> CD**
        - We are getting new values in determined, hence it's not a trivial FD.
        

# Inference Rules

## Reflexivity-

- If **B ⊆ A,**
    - then **A --> B**.

***

## Transitivity

- If **A --> B** and **B --> C,**
    - then **A --> C.**

***

## Augmentation

- If **A --> B,** 
    - then **AC --> BC.**

***

## Decomposition

- If **A --> BC,** 
    - then **A --> B** and **A --> C.**

***

## Composition

- If **A --> B and C --> D,**
    - then **AC --> BD.**

***

## Additive

- If **A --> B** and **A --> C,**
    - then **A --> BC.**



# Attribute Closure / Closure of Attribute Set

- Closure set of attribute set A is a set of attributes which can be functionally determined from it, and its denoted by $A^+$
- Example,
    - If $A \to B$ and $B \to C$
        - Then $A^+ \to BC$

# Comparison of Functional Dependencies

- If we have two set of FDs, we can compare them.
    - They both can be **equal, unequal or one may be subset of other.**
- If we can find the same closure set for LHS elements in one set with dependency rules of other set (we do this for both the sets), then we ca say that both sets are equal.

## Example

- Let's suppose we have two set of FDs F and G
    - Functional dependency set: $F$
        - $A \to C$
        - $AC \to D$
        - $E \to AD$
        - $E \to H$
    - Functional dependency set: $G$
        - $A \to CD$
        - $E \to AH$
    - From set F we found:
        - $A \to ACD$
        - $E \to ACDEH$
        - Hence $G ⊆ F ... (1)$ 
    - From set D we found:
        - $A \to ACD$
        - $AC \to ACD$
        - $E \to EACDH$
        - Hence $F ⊆ G ... (2)$
    - From (1) and (2) **F = G.**

# Minimal Cover / Cacnonical Cover

- A minimal cover or canonical cover for set of FDs $F$ is minimum set of dependencies that is equivalent to $F$.

## Finding Canonical Cover

- **Remove RHS redundancy:** Split FD's of FD set F such that RHS of FD is single attribute.
- **Remove redundant FD's:** Remove redundant FDs from F. Redundant FD's are such FD's even if we remove them we still get same closure from LHS attribute.
- **Remove redundant LHS:** If we have composite attribute on LHS and if we can find the same closure even if we remove some attribute from composition then that attribute is redundant in LHS.

## Example

- Let FD set F on relation R(WXYZ)
    - $X \to W$
    - $WZ \to XY$
    - $Y \to WXZ$
- Solution
    - Step 1: Decompose RHS
        - $X \to W$
        - $WZ \to X$
        - $Wz \to Y$
        - $Y \to W$
        - $Y \to X$
        - $Y \to Z$
    - Step 2: Remove redundant FD's
        - $X \to W$
        - ~~WZ --> X~~
        - $Wz \to Y$
        - $Y \to W$
        - $Y \to X$
        - $Y \to Z$  
    - Step 2: Remove redundant FD's. (Perform each time after removing FD until there is no redundant FD).
        - $X \to W$
        - $Wz \to Y$
        - ~~Y --> W~~
        - $Y \to X$
        - $Y \to Z$  
    - Step 3: Remove redundant attributes in LHS
        - $X \to W$
        - $WX \to Y$ ... There is no redundant attribute in WX.
        - $Y \to XZ$
