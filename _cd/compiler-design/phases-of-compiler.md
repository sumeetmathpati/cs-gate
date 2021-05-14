---
title: Phases of Compiler
description: "Compiler Design Tutorial"
nav_order: 1
child_of: Compiler Design
---

# Phases of compiler

- Throughout this subject we are going to learn about the different phases of compiler.

![Phases of compiler]({{ site.baseurl }}/assets/images/cd/phases-of-compiler.jpg)

- **Lexical Analysis**
    - This is the first phase and hence it takes character streme of source code or high level languages as input.
    - It **generates tokens** from the character streme.
    - Creates new table entries in symbol table about tokens.
    - If the source code has some errors; it will generate lexical errors.
    - This phase uses the **regular grammar** and **finite automata** to generate tokens.
- **Syntax Analysis**
    - This phase take the **tokens generated from the lexical analysis** phase and the **context free grammar** as input.
    - This phase chekcs for syntax and generate **syntax tree** or **parse tree.**
    - If the source code has some syntax related errors; it will generate syntax errors.
    - To do syntax chekcking, this phase uses the **context free grammar** and **pushdown automata.**
- **Semantic Analysis**
    - This phase take **parse tree** from the previous phase and **context sensitive grammar** as input.
    - This pahse checks if the sematic of the provided HLL lanague is correct.
    - This phase generates **annotated parse tree.**
    - It does this using **syntax directed translation.**
    - If the HLL contain some sematic errors, this phase generates the **sematic errors.**
- **Intermediate Code Generation**
    - To do code optimization; we have to generate intermediate code.
    - This phase takes **annotated parse tree as input** and **generated the 3-address code.**
- **Code Optimization**
    - This phase taked 3-address code as input and performs code optimization.
    - Code optimization can be target machine dependent or independent.
        - The code optimization based on target machine is done after the *target code generation phase.*
- **Target Code Generation**
    - This phase generaed the final target code.

# Errors

- Compiler generates errors if the source code is not correct.
- Compiler can't find all the errors in the source code, it can only generate the compile time errors.
- Only first three phases in the above diagram will generate errors from the HLL, last three phases are used for translation.
- There errors can be
    - **Lexical phase errors**
    - **Syntactic phase errors**
    - **Semantic phase errors**

If compiler finds error in any phase; it compilation doesn't half, it goes to next phase.
{: .note}

# What is symbol table?

- It's a data structure.
    - Can be implemented with linked lists, hash tables etc.
- Used by compiler to keep track of variable information like:
    - Scope of variable
    - Name binding

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
    - Function names
    - Classes and objects
- It's build in analysis phase and used in synthesis phase.

# Frontend and Backend

- **Frontend** of the compiler composed of first 4 phases. Frontend is **dependent on the HLL.**
- Remaining phases are called **backend**. Backend is **dependent on the target language.**

# Syllabus

- Lexical analysis
- Parsing
- Syntax directed translation
- Intermediate code generation
- Code optimization
- Runtime environment
- Local optimization
- Data flow analysis
- Constant propogation
- Liveness analysis
- Common subexpression elimination

