---
title: Grammar Excercise
description: "Grammar Esxercise. Grammar practive questions."
nav_order: 1
child_of: Grammars
mathjax: true
---

These are just examples and does not belong to any specific type of grammar. These are just for introduction purpose and we shall see specific types of grammars in next topics.
{: .note}

# Identify The Languages

### 1) 

{% highlight bash %}
{
    S --> aS | bS | ε
}
{% endhighlight %}

- **Answer:** $(a+b)^*$

### 2) 

{% highlight bash %}
{
    S --> aS | bS | a | b 
}
{% endhighlight %}

- **Answer:** $(a+b)^+$

### 3) 

{% highlight bash %}
{
    S --> aS | a
}
{% endhighlight %}

- **Answer:** $(a)^+$

### 4) 

{% highlight bash %}
{
    S --> aSb | ab
}
{% endhighlight %}

- **Answer:** $\\{ a^nb^n \| n >= 1\\}$

### 5)

{% highlight bash %}
{
    S --> aSb | ε
}
{% endhighlight %}

- **Answer:** $\\{ a^nb^n \| n >= 0\\}$

### 6)

{% highlight bash %}
{
    S --> AB
    A --> aAb | ab
    B --> cB | c
}
{% endhighlight %}

- **Answer:** $\\{ a^nb^nc^m \| n, m >= 1   \\}$

### 7)

{% highlight bash %}
{
    S --> AB
    A --> aAb | ab
    B --> cBd | cd
}
{% endhighlight %}

- **Answer:** $\\{ a^nb^nc^md^m \| n, m >= 1   \\}$

### 8)

{% highlight bash %}
{
    S --> AB
    A --> aAb | ε
    B --> cBd | cd
}
{% endhighlight %}

- **Answer:** $\\{ a^nb^nc^md^m \| n >= 0, m >= 1   \\}$

### 9)

{% highlight bash %}
{
    S --> AB
    A --> aAb | ab
    B --> bBc | bc
}
{% endhighlight %}

- **Answer:** $\\{ a^nb^{n+m}c^m\| n, m >= 1 \\}$

### 10)

{% highlight bash %}
{
    S --> aSb | aAb
    A --> bAc | bc 
}
{% endhighlight %}

- **Answer:** Language over {a, b} where number a's = number of b's.

### 11)

{% highlight bash %}
{
    S --> aSb | aAb
    A --> bAc | bc 
}
{% endhighlight %}

- **Answer:** $\\{ a^mb^n \| m > n \\}$

### 12)

{% highlight bash %}
{
    S --> aSb | aAb | aBb
    A --> aA
    B --> bB
}
{% endhighlight %}

- **Answer:** $\\{ a^mb^n \| m \ne n \\}$


# Constuct The Grammar

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

### 4) $L = \\{a^n b^m \| n \ne m \ and \ n,m >= 1\\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aSb | aAb | aBb
    A --> aA | a
    B --> aB | b
}
{% endhighlight %}

### 5) $L = \\{a^n | n >= 0 \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aS | ε
}
{% endhighlight %}

### 6) $L = \\{a^nb^m | n >= 0, m >= 1 \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> AB
    A --> aA | ε
    B --> bB | b
}
{% endhighlight %}

### 7) $L = \\{a^nb^mc^k | n, m >= 0, k >= 1 \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> ABC
    A --> aA | ε
    B --> bB | ε
    C --> cC | c
}
{% endhighlight %}

### 8) $L = \\{a^nb^m| (n+m) \ is \ even \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> AB | aAbB
    A --> aaA | ε
    B --> bbB | ε
}
{% endhighlight %}

### 9) $L = \\{a^nb^m| (n+m) \ is \ odd \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> AbB | aAB
    A --> aaA | ε
    B --> bbB | ε
}
{% endhighlight %}

### 10) $L = \\{a^{n+m}b^mc^n| m, n >= 1 \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aSc | aAc
    A --> aAb | ab
{% endhighlight %}

### 11) $L = \\{a^nb^mc^md^n| m, n >= 1 \\}$

- **Grammar:**

{% highlight bash %}
{
    S --> aSd | aAd
    A --> bAc | bc
{% endhighlight %}

***

***

The content below is to be refactored.

- All the productions of regular grammar are either left linear or right linear productions.
- **A grammar is regular if it's either left linear of right linear.**

