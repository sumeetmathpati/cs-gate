---
title:  "Introduction to Compiler Design"
description: "Introduction to compiler design."
serial: 2
---




## What is symbol table?

- It's a data structure.
    - Can be implemented with linked lists, hash tables etc.
- Used by compiler to keep track of variable information like:
    - Scope of variable
    - Name binding
    - Function names
    - Classes and objects
- It's build in analysis phase and used in synthesis phase.

### Usage of symbol table in various phases of compiler
- **Lexical Analysis**
    - Creates new table entries in table about tokens.
- **Syntax Analysis**
    - Adds information about attribute type, scope, line of reference, use etc.
- **Semantic Analysis**
    - Uses available information for semantic checks.
- **Intermediate Code Generation**
    - Uses symbol table for adding the temporary variables.
- **Code Optimization**
    - Uses symbol table for machine dependant optimization.
= **Target Code Generation**
    - Uses address information of variables.


