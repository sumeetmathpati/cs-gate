---
title: Semantic Analysis
description: "Semantic analysis tutorial"
nav_order: 4
parent: true
---

- CFG + semantic rules = SDT.
- We associate information with a CFG symbols called attribute. For example, we can have attributes like *value* (which can be used to specify value of a variables), *type* which can be used to specify the type of a variable, count (which do some counting). These attributes have values according to the input provided, and these attribute values are calculated by executing *semantic rules* which are associated with grammar production (we shall see those semantic rules in this chapter).
- There are two notations for associating semantic rules with productions:
    - **Syntax directed definitions**
        - High-level specification hiding many implementation details (also calledAttribute Grammars).
    - **Translation schemes**
        - More implementation oriented: Indicate the orderin which semantic rules are to be evaluated.
- With both syntax directed definition and trnslation schemes, we parse the input, build the parse tree, and then traverse the parse tree as needed, to evaluate the semantic rules.
- The execution of semantic rules may generate some code, or save some information in symbol table, issue error message or do some other activity.

Every SDD is also a SDT, but not vice versa.
{: .note}

# Drawbacks of Parsers

- In programming languages, a parser generates error in following types of statements, i.e. if the syntax of any statement don't match with any of type given below; it throws syntax error:
    - Declaration 
    - Expression
    - Flow control
    - Function
- Other compiler errors that above are do not detected by parser. A parser will parse a meaning less statement (according to us) without any errors, like
    - Using undeclared variables.
    - Dividing by zero.
    - Using incompatible types.
    - Multiple declarations of same variables within same scope.
    - Array index out of bound.
    - Mismatch of formal and actual parameters.
- To identify above errors (not identified by parsers); we have to use semantic analyzer.

# Semantic Analyzer

- Here we use **context sensitive grammars** and **linear bound automata.**
    - To be specific, we use attribute grammars.
- Semantic analyzer helps to **verify the meaning of the statement** is correct (according to our rules) or not.
- If SDt is given to the bottom up parser; the semantic rule attached to the production is executed while reduce action.


# Automata

- The automata used in semantic analyzer, is a **linear bound automata**.
- LBA is just a PDA with 2 stacks.
- We just add another stack in our previous parser in sentax analysis phase.
    - One stack is used for Syntax.
    - Another stack is used for semantics.

The parser in practical compiler is composed of two stacks, one for sentax and another one is for semantics.
{: .note}
