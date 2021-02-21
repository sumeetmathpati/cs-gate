---
title:  "Introduction to Compiler Design"
description: "Introduction to compiler design."
serial: 2
---

**Compiler** is a **software** which translates one language to another (usualy higher level langauge to lower level language). For example we use GCC to convert C source code into assembly code and then assembler converts a assembly code into machine code which is understandable by the computer hardware.


## Phases of compiler

![Phases of compiler]({{ site.baseurl }}/assets/images/cd-phases-of-compiler.jpg)

- Phases of compilers are generally devided into type categories:
    - **Analysis phase**
        - Lexical analysis
        - Syntax analysis
        - Semantic analysis
        - Intermediate code generation
    - **Synthesis phase**
        - Code optimization
        - Code generation

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


