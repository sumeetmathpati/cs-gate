---
title:  "LR Parser"
description: "LR Parser."
nav_order: 4
child_of: Syntax Analysis
sub: true
---

- It's a type of shift-reduce parser.
    - **L** indicates that it scans string from **l**eft to right.
    - **R** indicated that it generated right-most derivation.
- LR parsers read the string from left-to-right and produce right-most-derivation.
- The term LR(k) is also very common.
  - The k refers to the unconsumed lookahead symbols.
- A context free grammar is called LR(k) grammar, if there exist a LR(k) parser for it.
- We have further different types of LR parsers:
  - **LR(0)**
  - **SLR(1)**
  - **LALR(1)**
  - **CLR(1)**
- The powers of above parsers are different and each other.
  - **LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ CLR(1)**
- The **time complexity is O(n).**

# LR Table

- We've seen that there may be more that one variable in grammar which we can replace our handle with. So we need to know what to do in that situation.
- To know what to do in that situation, LR parser uses LR table.    
- This table has two columns: *Action*, and *Goto*.
- This table can be represented using **DFA.**

![LR Table]({{ site.baseurl }}/assets/images/cd/lr-table.png)

## Action Table

- This tells us what to do when we encounter the terminal in the DFA.
- When we **shift** the terminal, this tells the next step to go in the dfa.
- Using this table, we can also know we when to **reduce** the string with which production in the grammar.
- This also tells us when to **accept** the string.
- If we are at some state, and we get the input to which the cell in the table is empty, then there is an **error.**

### Shift Action

- In `shift j`, `j` is state number.
- If we have action `A[S, a] = shift j` we do following actions:
    - Push a into the stack.
    - Push j on top of the stack.
    - Increment lookahead pointer.

### Reduce Action

- In `reduce j`, `j` is production number (which which handle to be replaced).
- Whenever we have reduce action, we replace handle with non-terminal.
- Reducing is done as follows:
    - Suppose we hace action `A[S, a] = Reduce A --> B`.
        - Pop 2*\|B\|
            - Multiplied with 2 because previously we've also pushed states with symbols.
        - Push A
        - Push Goto(i, A) 

## GoTo Table

- This table tells us the state name to go (hence the name *GoTo*), if we encounter the non-terminal in the stack.

# Parsing Example

- Let's say we have grammar:
    - There are production numbers in front of the production.

{% highlight bash %}
{ 
    S --> AB ...(1)
    A --> a  ...(2)
    B --> b  ...(3)
}
{% endhighlight %}

- Let's say we have input string: **ab$**

- And we have it's LR table.
    - Don't worry about how to construct the table, we shall be seeing different algorithms to build the table.

||a|b|$|S|A|B|
|-|-|-|-|-|-|-|
|I0|Shift,3|||1|2||
|I1|||Accept||||
|I2||Shift,5||||4|
|I3||Reduce,3|||||
|I4|||Reduce,1||||
|I5|||Reduce, 3||||

- Parsing will be done as:

|Stack|Input Buffer|Action|
|-|-|-|
|$, 0|ab$|Shift 3|
|$,0,a,3|b$|Reduce 3|
|$,0,A,2|b$|Shift 5|
|$,0,A,2,b,5|$|Reduce 3|
|$,0,A,2,B,4|$|Reduce 1|
|$,0,S,1|Accept|

# Creating Parse Table / DFA

- We have different methods to create the table.
    - **LR(0)** (LR(0) items)
    - **SLR(1)** (LR(0) items)
    - **LALR(1)** (LR(1) items)
    - **CLR(1)** (LR(1) items)
- Powers: **LR(0) < SLR(0) < LaLR(1) < CLR(1)**
