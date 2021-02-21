---
heading: "Lexical Analysis"
title:  "Lexical Analysis"
description: "Lexical analysis in compiler design tutorial."
serial: 2
---

- It's a first phase of a compiler.
- It scans the characters, creates **lexemes** and generates **tokens**.
    - This stream of characters is a source code we've written.
    - In some programming languages like C/C++ it comes from preprocessor.
- To design lexical analyzer **Regular Grammar** and **Finite State Automata** are used.

***

## Example

- The C language code `int foo = 10;` contains following tokens:
    - int (keyword)
    - foo (identifier)
    - = (operator)
    - 10 (constant)

***

## Functions of lexical analyzer

- Gives errors
- Eliminate comments and whitespaces.

### Errors detected by Lexical Analyzer

- Numerical literals that are too long.
- Long identifiers.
- Input that does not belongs to source code.
- If token boundry does not identified.

***

## Types of Tokens

- **Identifiers**
    - Example `var1`, `i`, `j`
- **Sperators**
	- Example `{}`, `,`, `()`, `;` etc.
- **Keywords**
	- Example `void`, `if`, `for` etc.
- **Operators**
	- Example `+`, `++`, `=` etc.
- **Constants**
	- Example `10`, `20` etc.
- **Special characters**

***

