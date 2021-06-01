---
title:  "Bottom Up Parsers Execise"
description: "Bottom up parsers Execise."
nav_order: 3
child_of: Syntax Analysis
sub: true
---

# Q1

### Check if the given string is generated by the grammar.

- String: `id + id`
- Grammar:

{% highlight bash %}
{ 
    E --> E + T | T
    T --> T * F | F
    F --> ( E ) | id
}
{% endhighlight %}

- **Solution:**

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

# Q2

### How many handles detected by bottom-up parser for the following grammar and string?

- **Grammar:**

{% highlight bash %}
{ 
    S --> xxW
    S --> y
    W --> Sz 
}
{% endhighlight %}

- **String:** xxxxyzz

- **Solution:**

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

# Q3

### How many handles detected by bottom-up parser for the following grammar and string?

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

- **Solution:**

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