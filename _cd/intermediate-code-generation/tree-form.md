---
title: Tree Forms
description: "Syntax tree, directed acyclic graph."
nav_order: 1
child_of: Intermediate Code Generation
---

# Syntax Tree

- Parse tree and syntax tree both are different.
    - **In syntax tree, we eliminate all the non-terminals from the parse tree.**

![Syntax Tree and Parse Tree Difference]({{ site.baseurl }}/assets/images/cd/syntax-tree-parse-tree-difference.png)

- **Optimized form of parse tree known as syntax tree.**
- Syntax tree is **used to represent expression statements.**
- In syntax tree, for expression operators presented at root and oprands presented as leaf nodes.
- This syntax tree will help us to evaulate the expression based on the operator precedence and associativity.
- **Drawbacks:**
    - Common sub expressions are repeatedly evaluated.

# Directed Acyclic Graph

- DAG is a **syntax tree in which common sub expressions are eliminated.**

![Direct Acyclic Graph Example]({{ site.baseurl }}/assets/images/cd/dag-example.png)
