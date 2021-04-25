---
title: Compiler Design
description: "Compiler Design Tutorial"
nav_order: 1
permalink: /cd/
---

- Compiler is a software which converts/translate the high level source code into low level code, or generates errors.
    - Example *C* compiler converts C source code into *assembly* code, or generates compilation error if there are errors in the C source code.
- Compiler, linker, assembler, pre-processor are different types of translators. Here we shall be learning about compilers.

# Errors

- Compiler generates errors.
- Compiler can't find all the errors in the source code, it can only generate the compile time errors.
- There errors can be
    - **Lexical phase errors**
    - **Syntactic phase errors**
    - **Semantic phase errors**

# Phases of compiler

- Throughout this subject we are going to learn about the different phases of compiler.

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

