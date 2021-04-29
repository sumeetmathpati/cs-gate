---
title: Grammar Construction
description: "Grammar construction."
nav_order: 1
child_of: Grammars
mathjax: true
---

These are just examples and does not belong to any specific type of grammar. These are just for introduction purpose and we shall see specific types of grammars in next topics.
{: .note}

### 1) $L = \\{a^nb^nc^m \| n >= 0, m >= 1\\}$

- **Grammar:**

{% highlight bash %}
{
    S --> AB
    A --> aAb | ε
    B --> cB | c
}
{% endhighlight %}

### 2) $L = \\{a^n+m b^m c^n \| n, m >= 1\\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aSc | aAc
    A --> aAb | ab
}
{% endhighlight %}

### 3) $L = \\{a^n b^m \| n > m \ and \ n,m >= 1\\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aSb | aAb
    A --> aA | a
}
{% endhighlight %}

### 4) $L = \\{a^n b^m \| n != m \ and \ n,m >= 1\\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aSb | aAb | aBb
    A --> aA | a
    B --> aB | b
}
{% endhighlight %}

***
***

The content below is to be refactored.

- All the productions of regular grammar are either left linear or right linear productions.
- **A grammar is regular if it's either left linear of right linear.**

