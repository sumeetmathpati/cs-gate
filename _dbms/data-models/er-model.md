---
title: ER Model
nav_order: 1
description: "Entity relationship model or ER diagram."
child_of: Data Models
---

- In this database model, relationships are created by dividing real world objects into **entities** and it's characteristics into **attributes.**
- Different entities are related using **relationships.**
- E-R Models are defined to represent the relationships into **pictorial form** to make it easier for different stakeholders to understand.
- We **use ER model to design a relational databse model.**
- **Example,**
    - If we have to design a company database, then Employee will be an entity with attributes name, age, address etc. As Address is generally complex, it can be another entity with attributes street name, pincode, city etc, and there will be a relationship between them.
    
![ER Model]({{ site.baseurl }}/assets/images/dbms/er-model.png)

# Entities Set

- Entitiy sets are represented by means of rectangles. 
- Rectangles are named with the entity set they represent.
- Entities in entity sets are objects and are distinguishable from each other.


![Entitiesl]({{ site.baseurl }}/assets/images/dbms/entities.png)

**Entity and Entity Set**<br/><br/>
In ER diagrams the rectagnles represent a *set of entities* and not the entity instance and we call it **entity set.** 
<br/><br/>In real database or in relational model we have instance entities. But in ER diagram we can't represent instances of entities hence for the sake of simplicity we use *entity set* and **entity** interchangably.
{: .note}

## Strong Entity Set

- Weak entity sets don't have primary key.
- Weak entity can be identified uniquely only by considering some of its attributes in conjunction with the primary key of another entity.

## Weak Entity Set

# Attribute Types

- Attributes are the *characteristics* or as name suggests **attributes** of entities. 
- Attributes are represented by **ellipses.** 
- Every single ellipses which represents one attribute of an entity is connected to the entity.

![Attributes]({{ site.baseurl }}/assets/images/dbms/attributes.png)

- There are several types of attributes in ER diagram.

## Composite Attributes

- The attributes are called composite if they are *composed* of another attributes.
- Other attributes ellipses are connected to the composite attribute ellipse.
- In the example below the composite attribute address is composed of attributes state and city.

![Composite Attributes]({{ site.baseurl }}/assets/images/dbms/composite-attributes.png)

***

## Multivalued Attributes

- The attributes are called multivalued if they can have multiple values at a time.
- For ex., the skills of a surgeon is a multivalued attribute since a surgeon can have more than one skill. 
- In ER diagram multivalued attributes are represented as **double bordered ellipse.**

![Multivalued Attributes]({{ site.baseurl }}/assets/images/dbms/multivalues-attributes.png)

***

## Derived Attributes

- The attributes are called derived if the attribute can be derived from other attributes of an entity set.
- For example the age of the student can be derived from his/her age.

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/derived-attributes.png)

# Relationships

- Relations are represented by **diamond shaped** box.
- Name of the relationship is written inside the diamond box.
- Entities participating in relations are conneted to the relation diamond with line.
- The number of participating entities in a relationship defines the **degree** of the relationship. 
    - Example, in binary two entities take part in relation.


## Relationship Cardinality

- We know that in ER diagram we represent entity sets and not instance entity.
- Cardinality of a relation is the **number of instance entities take part.**
    - This number is represented only in **one** or **many** form.

### One-To-One 

- In this cardinality
    - One entity in first set can be associated with at most one (zero or one) entity in second set.
    - One entity in second set can be associated with at most one (zero or one) entity in first set.

### One-To-Many 

- In this cardinality
    - One entity in first set can be associated with any (zero or more) number of entities in second set.
    - One entity in second set can be associated with at most one (zero or one) entity in first set.

### Many-To-One 

- In this cardinality
    - One entity in first set can be associated with at most one (zero or one) entity in second set.
    - OneAn entity in second set can be associated with (zero or more) number of entities in first set.

### Many-To-Many 

- In this cardinality
    - One entity in first set can be associated with any (zero or more) number of entities in second set.
    - One entity in second set can be associated with any (zero or more) number of entities in first set.

***

## Participation Constraints

- Participation constraint specifies the presence of an entity set when it is related to another entity set in a relationship. 
- It is also called the *minimum cardinality constraint.*
- This constraint specifies the **number of instances of an entity set that are participating in the relationship.**
- There are two types of Participation constraint: 
    - **Total participation**
    - **Partial participation**

The cardinality gives information about the single instance entity in entity set and the participation constraints gives information about participation of all the entities in entity set (like whether all instances will take part of only some of them will take part)
{: .note}

### Total Participation

- Suppose we have relation R between two sets E1 and E2.
- The participation of the entity set E1 is said to be total if each entity in E1 participates in relationship with at least one entity in E2.
- Total participation is represented using a **double line** between the entity sets and relationship set.

### Partial Participation

- The participation of the entity set E2 is said to be partial if each entity in E2 may or may not take part in relationship.
- Partial participation is represented using a **single line** between the entity sets and relationship set.

### Example

- Suppose we have two entity sets *Student* and *Course* and relation between them is *enrolled in*.
- Entity set *Student* has total participation in the relation, because each student must be enrolled in at least one course. 
- Entity set *Course* has partial participation in relation, because any course in entity set *Course* may or may not be enrolled by student.

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/participation.png)

# Example

- We shall see an example ER model of a database application called *Company*.

![Derived Attributes]({{ site.baseurl }}/assets/images/dbms/er-diagram-example.png)

## Entities

- We have four entities

### Employee

- Each employee in *Employee* entity set has following attributes:
    - **Name**
        - It's a composite attribute of 

### Department
### Project
### Dependent
