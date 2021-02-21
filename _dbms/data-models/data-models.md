---
title: Data Models
parent: true
nav_order: 2
description: "Data models in DBMS. Hirarchical model, Network model, ER model, Relational model."
---

- Data models define how the logical structure of a database is modeled. 
- Data models define how data is connected to each other and how they are processed and stored inside the system.
- Some of the database models are:
	- **Hierarchical Model**
	- **Network Model**
	- **Entity-relationship Model**
	- **Relational Model**
	

# Hierarchical Model

Not Important
{: .label .w3-red}

- This database model organises data into a **tree-like-structure**, with a single root, to which all the other data is linked. The heirarchy starts from the Root data, and expands like a tree, adding child nodes to the parent nodes.
- It's a tree like structure, each node will hae only one parent.
- Using this model we can represent may real world.
- In hierarchical model, data is organised into tree-like structure with  **one-to-many** relationship between two different types of data, for example, one student can entrol many subjects.

![Hierarchical Model]({{ site.baseurl }}/assets/images/dbms/hierarchical-model.png)

# Network Model

Not Important
{: .label .w3-red}

- It's an extension to the hierarchical model. 
- In this model data is organised more like a graph, and are allowed to have more than one parent node.
- In this database model data is more related as more relationships are established in this database model. Also, as the data is more related, hence accessing the data is also easier and fast. 
- This database model was used to map many-to-many data relationships.
- This was the most widely used database model, before Relational Model was introduced.

![Network Model]({{ site.baseurl }}/assets/images/dbms/network-model.png)

# Entity-relationship Model

Important
{: .label .w3-green}

- In this database model, relationships are created by dividing real world objects into **entities** and it's characteristics into **attributes.**
- Different entities are related using **relationships.**
- E-R Models are defined to represent the relationships into **pictorial form** to make it easier for different stakeholders to understand.
- We **use ER model to design a relational databse model.**
- **Example,**
    - If we have to design a company database, then Employee will be an entity with attributes name, age, address etc. As Address is generally complex, it can be another entity with attributes street name, pincode, city etc, and there will be a relationship between them.

![ER Model]({{ site.baseurl }}/assets/images/dbms/er-model.png)

- Relationships can also be of different types. We shall see more about ER diagram in saperate article.

# Relational Model

Important
{: .label .w3-green}

- We convert ER model to relational model.
- Relational model is practically used in database managaement software.
- Here data (entities, attributes and relations) is organized as follows:
    - Entities like Student or Employee are represented using **tables**,
    - Attributes of entities like Age or Name are presented using **columns**,
    - And the relations like 'Works at' or 'Studies in' is shown by storing the **common field**.**
- This model was introduced by E.F Codd in 1970, and since then it has been the most widely used database model in DBMS softwares.
    - Nowadays DBMS softwares areusing new approach to store data called NoSQL object oriented databases, example MongoDB and Firebase.
- Here, **tables are also known as relations.**
- To access data from the relational tables, we use query languages.
- Here is an relational table we've created from the ER model given above.

![ER Model]({{ site.baseurl }}/assets/images/dbms/relational-model.png)



