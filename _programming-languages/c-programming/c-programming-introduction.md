---
title: C Programming
description: ""
nav_order: 2
parent: true
---

# C Program Structures

- All the different programming languages has some structure in which they can be written. C language is no exception.
- We can write any C program in this structure only (otherwise will get compilation error).
- C program structure is as follows:

{% highlight c %}

// Preprocessor section (Optional)
#include <stdio.h>      // Include  header files.
# define pi 3.14        // Define a macro.

int main()              // Main function definition. (Mandatory)
{                       // Function body.
    ...
    ...
    ...
    return 0;
}
{% endhighlight %}

## Proprocessor Section

- This section is optional.
- The statements starting with `#` are included in this section and these are called **preprocessor directives**.
- Preprocessor directives are fed to preprocessor (previous step before compiler) before giving it to the compiler.
- These statements are replaces with other statements. Hence, compiler never sees these directives.
- This is the speciality of C/C++ programming languages. Most of the laguages do not have this flexibility to edit the content before giving it to the compiler.
- Preprocessor statements include
    - `#include`: 
        - used to include other C source file in this file at this position.
    - `#define` and `#undef`:
        - Used for comditional compilation. These are like variables but for preprocessor and not for compiler.
    - `#if`, `#elif`, `#else`, and `#endif`:
        - These are conditional statements for preprocessor.
        - Can be used to skip feeding certain part of code to the compiler.
- Preprocessor directives **must NOT end with `;`.**
- We can use these directives anywhere in the program; but the convention is to use at the starting.

***

## The `main()` function

- Like many other programming language `main()` is mandatory in C program.
- It's the function where program starts running.
- It can return `void` but convention is to return `int` so that our OS can know if the execution is successful or not.

***

## Function Body

- Every finction has body, scoped inside `{}`.
- Inside this body function can contain variables, executional statements, `return` statement etc.

# Tokens in C Language

- Token is a smallest part of a program which can be understood by the compiler.
- Token can be any of the following type:

## Keywords:

- There are 32 keywords reserved in C which has some fixed meaning to the compiler. 
- They are building blocks of a C program.
- The 32 keywords are as follows.



|auto         |double      |int        |struct|
|break        |else        |long       |switch|
|case         |enum        |register   |typedef|
|char         |extern      |return     |union|
|const        |float       |short      |unsigned|
|continue     |for         |signed     |void|
|default      |goto        |sizeof     |volatile|
|do           |if          |static     |while|

## Identifiers

- Variable and function names.
- There are used to uniquely **identify** the functions and variables.



## Strings

- In C,  strings are characters composed in double quores `" "`.
- Example, `"The one ring to rule them all."` is a string.

## Operators

- These are symbols used to perform some operation on oprands.
- Oprand can be variable or constant.
- Operator can be:

### Unary

- Unary operator is applied onsingle oprand. Example `--` or `++`.

### Binary

- Binary operator is applied between two oprands.
- Following are the types of binary operators.

    - Arithmetic Operators
    - Relational Operators
    - Shift Operators
    - Logical Operators
    - Bitwise Operators
    - Conditional Operators
    - Assignment Operator
    - Misc Operator

## Constants

- A constatant value can't be chaged throughout the program.
- Constatant in a C program can be:
    - Constant data like `12` or `a`.
    - Constant variable defined using `const` keyword.
    - Macro defines using `#define` preprocessor.
- Types of constants:

| Constant | Example |
|-|-|
|Integer constant |	1, 7, etc.|
|Floating-point constant |	2.6, 11.12 etc.|
|Octal constant | 123, 456, etc.|
|Hexadecimal constant | 0x1f, 0x4a, etc.|
|Character constant | 'a', 'b', 'c', etc.|
|String constant | "Sherlock", "Harry", "Walter White", etc.|

***

## Special Symbols

- Some characters are special in C which are not keywords (as they are symbols and not words) but have some fixed meaning for compiler
- These can't be uesd for other purposes.
- Special symbols in C are following:
    - **Square brackets [ ]:** The opening and closing brackets represent the single and multidimensional subscripts.
    - **Simple brackets ( ):** It is used in function declaration and function calling. For example, printf() is a pre-defined  function.
    - **Curly braces { }:** It is used in the opening and closing of the code. It is used in the opening and closing of the loops.
    - **Comma (,):** It is used for separating for more than one statement and for example, separating function parameters in a function call, separating the variable when printing the value of more than one variable using a single printf statement.
    - **Hash/pre-processor (#):** It is used for pre-processor directive. It basically denotes that we are using the header file.
    - **Asterisk (*):** This symbol is used to represent pointers and also used as an operator for multiplication.
    - **Tilde (~):** It is used as a destructor to free memory.
    - **Period (.):** It is used to access a member of a structure or a union.
