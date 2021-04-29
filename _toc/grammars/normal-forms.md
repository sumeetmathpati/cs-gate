---
title: CFG Normal Forms
description: "Context free grammar, normal forms, CNF, GND, chomsky normal form, greibach normal form."
nav_order: 9
child_of: Grammars
mathjax: true
sub: true
---

- As we've seen there are many undecidable problems in CFGs.
- Normal forms helps us to normalize the grammar and make some problems decidable.
- In normalization, we make some changes in RHS of the producton rule in grammar.
- We have two types of normal forms
    - **Chomsky normal form** (CNF)
    - **Greibac normal form** (GNF)
- In both the normal forms ε is not allowed.
- Any CFG can be converted to CNF or GNF.
- Before converting the CFG to norma forms, the grammar should be simplified.

# CNF

- To generate *n* length string, CNF requries *(2n - 1)* productions.

# GNF

- To generate *n* length string, CNF requries *n* productions.

## CFG to GNF

### Steps

- First if there are left recursions; remove them.
    - Even we have to remove left indirect recursion.

## Removing Left Recursions

### Simple Left Recursion

- If we have `S --> Sa | Sb | Sc ... | p | q | r...`, then it can be converted to the

{% highlight bash %}
{
    S --> pS1 | qS1 | rS1 ...
    S1 --> aS1 | bS1 | cS1...
}
{% endhighlight %}

### Indirect Left Recursion

- If we have

{% highlight bash %}
{
    A0 --> A1B1
    A1 --> A2B2
    .
    .
    .
    An --> A0Bn+1
}
{% endhighlight %}

- We can convert it into

{% highlight bash %}
{
    A0 --> A1B1 = A2B2B1 = ... = A0Bn+1...B2B1
}
{% endhighlight %}

Here we've just removed the indirect left recursion; simple left recursion is still there (we remove it by the method of removing simple left recursion).