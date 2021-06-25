---
title:  "LR Parser"
description: "LR Parser."
nav_order: 4
child_of: Syntax Analysis
sub: true
---

- In the name LR,
    - **L** indicates that it scans string from **l**eft to right.
    - **R** indicated that it generated right-most derivation.
- The term LR(k) is also very common.
  - The k refers to the unconsumed lookahead symbols.
- A context free grammar is called LR(k) grammar, if there exist a LR(k) parser for it.
- The **time complexity is O(n).**

# Key Ideas

- LR parsers can **parse a strictly larger class of grammars than (top-down) predictive parsers.**
- LR parsers can usually recognize all programming language construct that can be specified by context-free grammars.
- LR parsers detect errors fast.
- We can use an LR parser generator such as YACC.

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
|I3||Reduce,2|||||
|I4|||Reduce,1||||
|I5|||Reduce, 3||||

- Parsing will be done as:

|Stack|Input Buffer|Action|
|-|-|-|
|$, 0|ab$|Shift 3|
|$,0,a,3|b$|Reduce 2|
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
- Number of states relation:
    - CLR >= LALR(1) = SLR(1) = LR(0)

# Grammar Relations

- You may not understand this diagram now, see this diagram after learning all the LR parsing algorithms.

![LR Grammar Relations]({{ site.baseurl }}/assets/images/cd/lr-grammar-relations.png)

