---
title: Normal Forms
description: "First normal form, second normal form, third normal form"
nav_order: 1
child_of: Normalization
---

# 1st Normal Form

- A relation is said to be in 1st normal form, if **all the attributes of a relation are atomic** i.e. there are no multiple values present in a single cell.
- **Every relational table is always in 1st NF.**

# 2nd Normal Form

- A relation is said to be in 2nd normal form, if 
    - **Relation is in 1st NF, and**
    - **there does not exist any partial functional dependency**, i.e. prime-attribute --> non-prime attribute.
- **Partial Functional Dependency:**
    - If a non-prime attribute of a relation depends on a part of a candidate key (prime attribute) of a relation.
    - Prime attribute --> Non-prime attribute
- If there is no prime attribute (i.e. if the candidate key is simple and not composite) then there will be no partial dependency, and hence relation will be in 2nd NF.
- If all the attributes are prime attributes then there will be no partial dependency, and hence relation will be in 2nd NF.

## 2nd NF Decomposition

- We convert the relation which is not in 2NF in 2NF as following:
    - Find minimal cover of FD set.
    - Find all CKs of relation.
    - Design new relation for every partial functional dependency (include all the attributes they are directly or indirectly depends on the prime attribute).
    - Make new table for candidate key and include all the attributes that are dependent on whole candidate key.

### Example

#### E1

- Let's take relation:
    - R(A, B, C, D)
- The given FD's
    - A --> B
    - C --> D
- The candidate keys we find from above FDs:
    - AC
- Above table is not in 2nd NF because prime attributes are determining non prime attributes.
- We decompose the R into:
    - R1(A, B)
    - R2(C, D)
    - R3(A, C)

#### E2

- Let's take relation:
    - R(A, B, C, D, E, I)
- The given FD's
    - AB --> C
    - C --> D
    - B --> E
    - E --> I
- The candidate keys we find from above FDs:
    - AB
- Above table is not in 2nd NF because prime attributes are determining non prime attributes.
- We decompose the R into:
    - R1(B, E, I)
    - R2(A, B, C, D)

# 3rd Normal Form

- A relation is said to be in 3rd normal form if:
    - **Relation already exists in 2NF.**
    - **No transitive dependency exists for non-prime attributes**, i.e. non-prime attribute --> non-prime attribute.
- **Transitive dependency:**
    - X --> Y is said to be a transitive dependency iff
        - X is NOT a super key.
        - Y is a non-prime attribute.
- If all the attributes are prime attributes then there will be no transitive dependency, and hence relation will be in 3rd NF.

## 3rd NF Decomposition

- We convert the relation which is not in 3rd NF in 3rd NF as following:
    - Find minimal cover of FD set.
    - Find all CKs of relation.
    - Design new relation with attributes that have common LHS and individual relation for FD that do not have common LHS.
    - If CK is not part of any relation, make new relation for CK.
- 3rd NF decomposition is always lossless and dependency preserving.
- After 3rd NF decomposition insertion, deletion and updation anamolies are removed but data redundancy exists.
- All upper NFs (BCNF, 4NF, etc. ) are used to minimize the data redundancy.

### Example



# BCNF

- A relation is said to be in BCNF normal form if **both** the conditions below satisfy:
    - **If the determinent is a super key.**
- Every table with two tables will always be in BCNF.
- Both 2nd and 3rd NF tells about deriving non-prime attribute.
    - 2nd NF tells that non-prime attribute should not be derived by prime attribute.
    - 3rd NF tells that non-prime attribute should not be derived by non-prime attribute.
    - But not one of them tells about deriving prime attribute.
    - **BCNF tells that a prime attribute should only be derived from super key.**
 - BCNF decomposition is always loassless but **may or may not be dependency preserving.**

## BCNF Decomposition

- We convert the relation which is not in BCNF in BCNF as following:
    - Find minimal cover of FD set.
    - Find all CKs of relation.
    - Make a new relation for FD that does not satisfy BCNF rule (all the sttributes of FD should belongs to origional updated relation) and remove RHS attributes from the origional relation. Udated origional relation is also taken into the consideration.
    - If CK is not a part of any relation, then make new relation with CK.

### Example

#### E1

- Let's take relation:
    - R(A, B, C)
- The given FD's
    - AB --> C
    - C --> B
- The candidate keys we find from above FDs:
    - AB and AC
- Above table is not in BCNF because one of the dependency doesn't satisfy BCNF rule. 
- We decompose the R into:
    - R1(A, C)
    - R2(C, B)

#### E2

- Let's take relation:
    - R(A, B, C, D)
- The given FD's
    - A --> B
    - B --> C
    - C --> D
- The candidate keys we find from above FDs:
    - A
- Above table is not in BCNF because one of the dependency doesn't satisfy BCNF rule. 
- We decompose the R into:
    - R1(C, D)
    - R2(B, C)
    - R3(A, B)