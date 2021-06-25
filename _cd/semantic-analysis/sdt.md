---
title: SDTs
description: "SDT syntax directed trees"
nav_order: 1
child_of: Semantic Analysis
---

- SDT is a mathematical model, where each CFG production is associated with set of semantic rules.
    - Example, `E --> E # T {E.val = E1.val - T.val}`
- Semantic rules are attribute calculation rules in annotated parer tree.

# Applications of SDT

- Detection of semantic errors.
- Symbol table construction.
- Type casting.
- Intermediate code generation.
- Construction of syntax tree.

# Evaluation of Values From SDT

1. Construct a parse tree.
2. Construct annotated parse tree.
3. Compute attribute information in annotated parse tree.
    - If SDT is carried out with bottom up parser; then corresponding to every reduce action the semantic rule associated with the production is executed.
    - If SDT is carried out with the top down parser; then the semantic rules are executed depth first search manner from left-to-right.

Output of SDT with top-down and bottom up parser is same.
{: .info}

## Example

- Suppose we have following grammar:

{% highlight bf %}
E --> E1 # T {E.value = E.value * T.value}
    | T {E.value = T.value}
T --> T1 & F {T.value = T1.value + F.value}
    | F {T.value = F.value}
F --> num {F.value = num.value}
{% endhighlight %}

![SDT Example]({{ site.baseurl }}/assets/images/cd/sdt-example.png)

# Questions

## Q1

Construct SDT to count total number of reduce actions. Where *val* is a attribute, *E.val* gives total value.

- The grammar is 

{% highlight bf %}
E --> E + T
E --> T
T --> T * F
T --> F
F --> a
{% endhighlight %}

**Solution**

{% highlight bf %}
E --> E + T {E.val = E.val + T.val + 1}
E --> T {E.val = T.val + 1}
T --> T * F {T.val = T.val + F.val}
T --> F {T.val = F.val + 1}
F --> a {F.val = 1}
{% endhighlight %}

***

## Q2

Construct SDT to *count* total 1's present in binary string. Where cound is a attribute, *S.count* gives total value.

- The grammar is 

{% highlight bf %}
S --> L
L --> LB 
L --> B 
B --> 0 
B --> 1 
{% endhighlight %}

**Solution**


{% highlight bf %}
S --> L {S.count = L.count}
L --> LB {L.count = L.count + B.count}
L --> B {L.count = B.count}
B --> 0 {B.count = 0}
B --> 1 {B.count = 0}
{% endhighlight %}

***

## Q3

Construct SDT to *count* total number of balanced paranthesis. Where cound is a attribute, *S.coun*t gives total value.

- The grammar is 

{% highlight bf %}
S --> (S)
S -->  ε 
{% endhighlight %}

**Solution**

{% highlight bf %}
S --> (S) {S.count = S.count + 1}
S -->  ε {S.count = 0}
{% endhighlight %}

***

## Q4 

Find the output, if this SDT is carried of with bottom up parser and top down parser with the input *xxxxyzz*.

{% highlight bf %}
S->xxW {print 1}
S->y {print 2}
W->Sz {print 3}
{% endhighlight %}

**Solution:**

- Output with top down parser and bottom parser is always same and in this case, its: 23131.

***

## Q5

Find the output, if this SDT is carried of with top down parser with the input *aaadbc*.

{% highlight bf %}
S->AS   {print 1}
S->AB   {print 2}
A->a    {print 3}
B->bC   {print 4}
B->dB   {print 5}
C->c    {print 6}
{% endhighlight %}

**Solution:**

- **33645211**

***

## Q6

Find the output, if this SDT is carried of with top down parser with the input *a+b*c*.

{% highlight bf %}
E->E+T
E->T
T->T*F
T->F
F->id
{% endhighlight %}

**Solution:**

- **abc*+**