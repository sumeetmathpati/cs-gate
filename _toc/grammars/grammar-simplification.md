---
title: CFG Simplification
description: "Context free grammar, grammar simplification, cfg simplification"
nav_order: 8
child_of: Grammars
mathjax: true
sub: true
---

- In CFG simplification we remove
    - First, remove **Null productions**
    - Second, remove**Unit productions**
        - Unit production is a priduction where a non-terminal call only a non-terminal.
    - At last, remove **Useless variables**
        - Useless variable is a non-terminal not generating any string or it's not reachable from starting variable.

We want to remove useless variables. Sometimes useless variables are not recognizable due to unit productions hence we fore removing useless variables we need to remove unit productions. Sometime unit productions are not directly visible due to null productions, hence first we have to remove null productions.
{: .note}

- Example,

{% highlight bash %}
{
    S --> AB | a
    A --> a
    B --> bB
    C --> a
}

There are no null productions.
After removing uselss variables.
{
    S --> a
}
{% endhighlight %}

**Note:** If a single variable is useless in a group of concatenated variable; wholse group will be removed while removing useless variabels. Example if B is useless variable then complete AB will be removed.
{: .note}