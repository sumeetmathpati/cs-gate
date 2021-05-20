---
title:  "3) CLR(1) Parser"
description: "CLR(1) Parser, canonical LR(1) parser"
nav_order: 7
child_of: Syntax Analysis
sub: true
mathjax: true
---

- It's also called canonical LR(1).
- When we say LR(1) parser, we are talking about CLR(1) parser. 

# LR(1) Item DFA Construction

1. Construct augmented grammar.
2. DFA of LR(1) items using *closure* and *goto*.
3. Construct parsing table.
    - The *Shift actions* and *GoTo* table entries are same as the SLR(1).
    - Reduce actions are placed using lookahead symbols.

# LR(1) Item

- We know that `A --> A.a` is an example of LR(0) item.
- If we add another lookahead symbol `A --> . A , a`, it's an LR(1) item.
- LR(1) item = LR(0) item + Lookahead

# Closure and Goto

## Closure

- Here, closure and goto is somewhat different that SLR(1).
- Example, let's say we have LR(1) item = `S --> A . B , X`.
    - While calculating it's closure, we have to do two things
        1. Add productions of *B* (due to dot) and at the end add lookahead of this production.
        2. Calculating lookahead is adding *First* of the element after the element on which we've just applied *Closure*, in this case *First(X)*.
            - Calulatig goto is based on same state only, not on previous state.

{% highlight haskel %}
# Our Gramar
{
    S --> AB
    A --> a
    B --> b
}

# Closure
{ 
    S' --> . S , $
    S --> . AB , $ ... (Added production S and it's lookahead First($))
    A --> . a , b ... (Added production A and it's lookahead First(B)) 
}
{% endhighlight %}

# Table Construction

- Shift actions and goto are same as SLR(1).
- The only differenc is in reduce actions.
    - Here we place the reduce action in the columns of lookahead terminals.

# CLR(1) Grammar

- If any CFG CLR(1) parsing table have **any one** of the following conditions, then it's not a CLR(1) grammat
    - **Condition 1:**
        - Shift/Reduce conflict.
        - Shifting terminal should be in the follow set of the non-terminal we are with which we are reducing the handle.
    - **Condition 2:**
        - Reduce/Reduce conflict.
        - Both the non-terminals which which the handle is reducing, should contain at least one terminal.

![CLR Conflict]({{ site.baseurl }}/assets/images/cd/clr1-conflict.png)

# Disadvantages

- It has larger table compared to LALR(1).