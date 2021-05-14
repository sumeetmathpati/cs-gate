---
title:  "2) SLR(1) Parser"
description: "SLR(1) Parser simple LR(1) parser"
nav_order: 6
child_of: Syntax Analysis
sub: true
mathjax: true
---

- It's also called simple LR(1).
- The construction is same as LR(0), the only difference is, here we use *first* and *follow* set values to place reduce actions.
- SLR(1) supports more grammars than LR(0).

# SLR(1) Prasing Table Construction

- Create augmented grammar.
- Construct LR(0) items.
- Reduce actions filled in the table are as per the symbols of *follow* values.
    - We know that, we reduce the handle with the non-terminal.
    - We place the reduce action in only in the column of terminal which is in the follow set of that non-terminal.


# SLR(1) Grammar

- If any CFG SLR(1) parsing table have **any one** of the following conditions, then it's not a SLR(1) grammat
    - **Condition 1:**
        - Shift/Reduce conflict.
        - Shifting terminal should be in the follow set of the non-terminal we are with which we are reducing the handle.
    - **Condition 2:**
        - Reduce/Reduce conflict.
        - Both the non-terminals which which the handle is reducing, should contain at least one terminal.

![SLR Conflict]({{ site.baseurl }}/assets/images/cd/slr1-conflict.png)

## Example

- Check the grammars below are SLR(1) or not.

### Q1

{% highlight bash %}
Grammar
{ 
    E --> T + E
    E --> T
    T --> a
}
{% endhighlight %}

- **ANswer:** It is a SLR(1) grammar.

### Q2

{% highlight bash %}
Grammar
{ 
    S --> A
    S --> a
    A --> a
}
{% endhighlight %}

- **ANswer:** It is a SLR(1) grammar.

### Q3

{% highlight bash %}
Grammar
{ 
    S --> A
    A --> AB
    A --> ε
    B --> aB
    B --> b
}
{% endhighlight %}

- **ANswer:** It is a SLR(1) grammar.

# SLR(1) Drawbacks

- SLR(1) have some unnecessary reduce actions compared to CLR(1).
- Any ambiguous grammar causes SR or RR conflict in SLR(1) parser.