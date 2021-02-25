---
title: "Query Language"
description: "Query Language tutorial."
child_of: Structured Quey Languages
nav_order: 1
---

- After designing the database, ER diagrams, normalization we successfully created.designed the structure of the database, and now we want to **fetch, store, and modify** the data into database.
- That we do that by query languages.
- Query languages can be of two types
    - **Procedural**
        - Here we instruct the system to perform the sequence of operations in order to produce derived results.
		- User tells what data to be retrieved and how to be retrieved.
    - **Non-Procedural**
        - Here we describe the the desired information without giving specific procedure for obtaining that information.

# ER diagram, Relation, Relational Algebra, Relational calculus, and SQL

- We've created relational model from ER-diagrams.
    - In practice we use relational databae, which is practical implementation of relational model.
    - Examples of relational databases are MySQL, Postgres etc.
- Hence we can say that relational database is practical implementation of relational model.
- We use query languages on databases to perform operations on it.
    - **Relational algebra** and **relational calculaus** are the query languages we use to query the database.
- Relational algebra is **procedural** language and relational calculus is **non-procedural.**
- As relational model is conceptual and relational databse is practical implementation of it; **relational algrbra and relational calculus are theoratical languages and SQL is practical implementation of it** used in real world.
- Relational algebra and relational calculus gives us the logic about the query and SQL is a syntactical code (different for different SQL).
- SQL has most of the features of relational algebra and hence many people call it procedural language (but it also has some features of relational calculus).


| Relational model  | RDBMS |
| ------------- | ------------- |
| RA, RC  |  SQL  |
| Algorithm  | Code  |
| Conceptual | Reality |
| Theoratical | Practical |