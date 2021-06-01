---
title:  "Top Down Parsing"
description: "Bottom up parsers, shirt reduce, handle"
nav_order: 11
child_of: Syntax Analysis
---

- In top down parsing we **construct parse tree from root node and go down to the leaf node.**
- General representation of top down parser is LL(1) parser.
- The top down parser has two types:
    - **Backtracking**
    - **Non-Backtracking**
        - Recursive descent parser
        - Non-recursive descent / LL(1) parser
- Backtracking parsers are brute fore approach to parse a string, hence we won't be talking about the backtracking parser.
- Top-down parser constructs a parse tree leftmost derivation.
- Top down parsers are **less powerful than the bottom up parsers.**
- Here the decision we have to make is, replacing non-terminals with which of the available options (in case a non-terminal have multiple productions).
