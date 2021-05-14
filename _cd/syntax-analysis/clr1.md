---
title:  "3) CLR(1) Parser"
description: "CLR(1) Parser, canonical LR(1) parser"
nav_order: 7
child_of: Syntax Analysis
sub: true
mathjax: true
---

- It's also called canonical LR(1).

# Grammar Construction

1. Construct augmented grammar.
2. DFA of LR(1) items using *closure* and *goto*.
3. Construct parsing table.
    - The *Shift actions* and *GoTo* table entries are same as the SLR(1).
    - Reduce actions are placed using lookahead symbols.

# LR(1) Item

- We know that `A --> A.a` is an example of LR(0) item.
- If we add another lookahead symbol `A --> . A , a`, it's an LR(1) item.

# CLosure and Goto

- Here, closure and goto is somewhat different that SLR(1).
- Example, let's say we have LR(1) item = `S --> A . B , X`.
    - While calculating it's closure, we have to do two things
        1. Add productions of *B* (due to dot) and at the end add lookahead of this production.
        2. Calculating lookahead is adding *First* of the non-terminal after the newly added production, in this case *First(X)*.

{% highlight haskel %}
# Out Gramar
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