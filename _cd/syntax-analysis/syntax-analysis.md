---
title: Syntax Analysis
description: "Syntax analysis tutorial, parser tutorial, top down parser, bottom up parser"
nav_order: 3
parent: true
---

- It's also called **parsing.**
    - Parsing is checking whether the given string (program) is a member of given grammar or not (membership problem of CFG).
- It's a second phase in compilation.
- The structure of a program statements, is known as syntax.
- This phase takes tokens as input from lexical analysis phase.
- As name suggests, this phase **checks if syntax of input is correct or not**.
    - It's done by **parser or syntax analyzer** by generating **parse tree**.
- To design syntax analyzer, we use **unambigious Context Free Grammar** and **pushown automata**.
    - Context free grammar is a way to tell the compiler, what is the correct synta accorrding to us or our language we've created.
    - Checking whether the given string is member of the given CFG is called parsing, if it does belong to the language generated by our grammar, then we can say the passed HLL don't have any syntax errors.
    

![Parser]({{ site.baseurl }}/assets/images/cd/parser.png)

Recursive grammars means grammars containing recursion.
{: .note}