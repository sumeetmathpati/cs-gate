---
title:  "Bottom Up Parsers"
description: "Bottom up parsers, shirt reduce, handle"
nav_order: 2
child_of: Syntax Analysis
mathjax: true
---

- This parser, **constructs a perse tree from the given string (from bottom of the tree, leaves) and goes towards the starting symbol of the grammar (top of the tree, root).**
- To do so, bottom-up parsing tries to find a **rightmost derivation of a given string in reverse order.**
  - **Rightmost-derivation:** It means that; when we complete the derivation using algorithm below; the derivation will be similar to the righmost-derivation.
  - **Reverse order:** We start from the string given and replace terminals with non-terminals (usually we replace non-terminals with terminals).
- **Example,**
    - Let's say we have grammar `{ S --> AB, A --> a, B --> b}`
    - Let's say we have string to parse is `ab`.
    - Bottom-up parsing is done like:
    - ![Phases of compiler]({{ site.baseurl }}/assets/images/cd/bottom-up-parsing.png)
- There are two parsing methods in bottom up parsing
  - **LR(K)** parsing
  - **Operator precedence** parsing
- NOT CONFIRM: Bottom up parsers can handle either left-recursive or right-recursive grammars. 
  
# Key Ideas

- The weakness of top-down LL(k) parsing techniques is that they must predict which production to use, having seen only the first k tokens in the right side.
- The more powerful techniques of bottom-up LR(k) parsing is able to postpone the decision until it has seen
  - Input tokens corresponding to the entire right side of the production
  - and k lookahead tokens beyond


# Algorithm for Bottom-Up Parsing

- We find the handle (in given string) and replaces with variable in the grammar.
    - To to this; first we perform **handle detection.**
- Repeate the process until we get starting state.
- If we reach the strating state; there is not error in the string.
    - If we do not reach the starting state; there is an error in the string.

## Handle

- **Handle is a substring in sentential form that matches the RHS of a production.**
- Replacement of handle should lead towards the starting symbol.
    - Not every substring that matches the right side of the production is a handle (because every substring that matches may not lead us towards the starting symbol).


If grammar $G$ is unambiguous, then every right sentential form has only one handle
{: .note}

## Goal of Bottom Up Parsing

- Sometime there could be multiple matches.
- And replacing the leftmost (as we do) will not lead us towards the starting symbol.
- Hence, **selecting the correct handle is a problem in bottom up parsing.**

## Example

- Let's say we have grammar: `{ S --> aABe, A --> Abc | b, B --> b }`.
{% highlight bash %}
{ 
    S --> aABe
    A --> Abc | b
    B --> b 
}
{% endhighlight %}

- Let's say we have string: `abbcde`.
- The parse tree would be:

{% highlight bash %}
abbcde

#### STEP 0 ####

aAbcde      ... Replace b with A
  ↑
abbcde

#### STEP 1 ####

aAde      ... Replace Abc with A
  ↑
aAbcde    ... Replace b with A
  ↑
abbcde

#### STEP 2 ####

aABe      ... Replace d with B
  ↑
aAde      ... Replace Abc with A
  ↑
aAbcde    ... Replace b with A
  ↑
abbcde

#### STEP 3 ####

  S       ... Replace aABe with S
  ↑     
aABe      ... Replace d with B
  ↑
aAde      ... Replace Abc with A
  ↑
aAbcde    ... Replace b with A
  ↑
abbcde
{% endhighlight %}

# Shift-Reduce Parser

- To implement a bottom-up parser, we adopt the shiftreduce paradigm 
  - We can say that this is a practical implementation of bottom up parsers.
- Hence, **bottom up parsers also called shift reduce parsers.**
- It has two primary actions, **shift** and **reduce.**
  - Other obvious actions are **accept** and **error.**
- Bottom of the stack and end of input are represented by $.

## Actions

- **Shift:** shift the next input symbol from the right string onto the top of the stack.
- **Reduce:** identify a string on top of the stack that is the body of a production, and replace the body with the head.
- **Accept:** Accept actions means string has valid syntax and hence parse tree can be generated.
- **Error:** Error action means string does not follow syntax represented by grammar, hence parse tree can't be generated.

## Example

- Grammar

{% highlight bash %}
{
  E --> E + T | T
  T --> T * F | F
  F --> (E) | id
}
{% endhighlight %}

|Stack|Input|Action|
|$|id1 * id2 $|Shift|
|# id1|* id2 $|Reduce by `F --> id`|
|$id1|∗id2$|Reduce by `F --> id`|
|$F|∗id2$|Reduce by `T --> F`|
|$T|∗id2$|Shift|
|$T∗|id2$|Shift|
|$T∗id2|$|Reduce by `F --> id`|
|$T∗F|$|Reduce by `T --> T∗F`|
|$T|$|Reduce by `E --> T`|
|$E|$|Accept|

# LR Table

- **How can we know when we have found a handle without generating lots of different derivations?**
  - We do this by using a **DFA.**
  - We use contexts, encoded in the sentential form, context encoded in a “parser state”, and a lookahead at the  next word in the input. (Formally, 1 word beyond the handle.) 
- **DFA** states to memorize information during the parsing process.
- We represent this DFA in the form of table called LR table.
  - LR table has two saperate tables.
  - An **action table** to make decision (such as shift or reduce).
    - This tells us what to do when we encounter the terminal in the DFA.
    - When we **shift** the terminal, this tells the next step to go in the dfa.
    - Using this table, we can also know we when to **reduce** the string with which production in the grammar.
    - This also tells us when to **accept** the string.
    - If we are at some state, and we get the input to which the cell in the table is empty, then there is an **error.**
  - A **goto table** to compute states.
    - This table tells us the state name to go (hence the name *GoTo*), if we encounter the non-terminal in the stack. We get non-terminal whenever we have reduce action, and we replace handle with non-terminal.
![LR Table]({{ site.baseurl }}/assets/images/cd/lr-table.png)

## Shift Action

- In `shift j`, `j` is state number.
- If we have action `A[S, a] = shift j` we do following actions:
    - Push a into the stack.
    - Push j on top of the stack.
    - Increment lookahead pointer.

## Reduce Action

- In `reduce j`, where`j` is production number (which which handle to be replaced).
- Reducing is done as follows:
    - Suppose we hace action `A[S, a] = Reduce A --> B`.
        - Pop 2*\|B\|
            - Multiplied with 2 because previously we've also pushed states with symbols.
        - Push A
        - Push Goto(i, A) 

# Questions

## Q1

How many total handles detected by bottom up parser for:

![q1]({{ site.baseurl }}/assets/images/cd/syntax-analysis/bottom-up-parsing-q1.jpg)
![q2]({{ site.baseurl }}/assets/images/cd/syntax-analysis/bottom-up-parsing-q2.jpg)
![q3]({{ site.baseurl }}/assets/images/cd/syntax-analysis/bottom-up-parsing-q3.jpg)
![q4]({{ site.baseurl }}/assets/images/cd/syntax-analysis/bottom-up-parsing-q4.jpg)

***

## Q3

Check if the given string is generated by the grammar.

- String: `id + id`
- Grammar:

{% highlight bash %}
{ 
    E --> E + T | T
    T --> T * F | F
    F --> ( E ) | id
}
{% endhighlight %}

**Solution:**

|Stack|Input|Action|
|-|-|-|
|$|id + id\$|shift|
|$id|+ id\$|reduce|
|$F|+ id\$|reduce|
|$T|+ id\$|reduce|
|$E|+ id\$|shift|
|$E +|id\$|shift|
|$E + id||reduce|
|$E + F||reduce|
|$E + T||reduce|
|$E||accept|

***

## Q2

How many handles detected by bottom-up parser for the following grammar and string?

- **Grammar:**

{% highlight bash %}
{ 
    S --> xxW
    S --> y
    W --> Sz 
}
{% endhighlight %}

- **String:** xxxxyzz

**Solution:**

{% highlight bash %}
  S  
  ↑
 xxW
  ↑
 xxSz
  ↑
xxxxWz
  ↑
xxxxSzz  
  ↑
xxxxyzz
{% endhighlight %}

- Therefore there are **5 handles** are detected.

***

## Q3

How many handles detected by bottom-up parser for the following grammar and string?

- **Grammar:**

{% highlight bash %}
{ 
    S --> AS |AB
    A --> a
    B --> bC | dB
    C --> c
}
{% endhighlight %}

- **String:** aaadbc

**Solution:**

{% highlight bash %}
  S
  ↑
 AS
  ↑
AAS
  ↑
 AAAB
  ↑
AAAdB 
  ↑
AAAdbC
  ↑
AAAdbc
  ↑
AAadbc
  ↑
Aaadbc  
  ↑
aaadbc
{% endhighlight %}

- Therefore there are **9 handles** are detected.
