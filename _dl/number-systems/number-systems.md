---
title:  "Number Systems"
description: "Number systems tutorial."
parent: true
nav_order: 2
mathjax: true
---
    
- A number system is **ordered set** of symbols (known as digits) with **rules defined for arithmetic** operations (like addition, subtraction etc.).
- A collection of these digits has two parts **integer part** and **fractional part,** saperated by radix point (.).

$$(N)_b = d_{n-1}, \, d_{n-2}, \,... \,d_i, \,...d_1, \, d_0 \,. d_{-1}, \, d_{-2}, \,...d_{-f}, \,... d_{-m}$$
{: .w3-large}

- $N$ = a number, 
- $b$ = radix or base of number system,
- $n$ = number of digits in integer part,
- $m$ = number of digits in fractinal part, 
- $d_{n-1}$ = Most dignificant digit (msd)
- $d_{-m}$ = Least dignificant digit (lsb)
{: .w3-center }

and,

$0 <= (d_i \, or \, d_j) <= b-1$
{: .w3-center}

***

- **Any digit in a system is less than or equal to 0 and less that the radix or base of the system.**
    - Example,
        - In decimal system; lowest digit possible is 1.
        - In decimal; highest digit possible is 9 (less than 10).

In any number system, the **(highest number possible) + 1 is 10.**<br><br>
Example, <br>
In binary system; **1 + 1 = 10**, <br>
In Octal system; **7 + 1 = 10**, <br>
In Decimal system; **9 + 1 = 10**, <br>
In Hexadecimal system; **F + 1 + 10,** <br>
{: .note}

- Commonly used number systems are:
    - **Binary**
    - **Octal**
    - **Decimal**
    - **Hexadecimal**
- Details of above number systems:

|Number System | Base | Symbols Used |
|-|-|-|
|Binary|2|0, 1|
|Octal|2|0, 1, 2, 3, 4, 5, 6, 7|
|Decimal|10|0, 1, 2, 3, 4, 5, 6, 7, 8, 9|
|Hexadecimal|16|0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, f, d, e, f|

- Every position (like unit, tenth) has specific weight assigned to it, which is different for different number system.



