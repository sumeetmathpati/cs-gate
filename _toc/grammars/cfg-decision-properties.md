---
title: CFG Decision Properties
description: "Context free grammar, ambigous grammar, inherently ambigous grammar. CFG decision properties."
nav_order: 8
child_of: Grammars
mathjax: true
sub: true
---

# Undecidable Problems of CFG

## Regularity Problem

- In this probem we want to find whether the given CFG generated teh regular language or not.
- This is **undecidable problem.**

***

## Ambiguity Problem

- A CFG is said to be ambigous if 
    - At least one string has more than one *left-most derivation.*
    - At least one string has more than one *right-most derivation.*
    - At least one string has more than one *parse tree.*

### Example

- Suppose we have grammar

{% highlight bash %}
{
    E --> E + E | E * E | a | b | c
}
{% endhighlight %}

- We have string **a + b * c.**
- We can have two parse trees with *left-most-derivations* for the above string.

![Ambigous Grammar]({{ site.baseurl }}/assets/images/toc/ambigous-grammar.png)

- Hence the above grammar is ambigous.
- Finding whether the grammar is ambigous or not is **undecidable problem.**

### Disadvantages of Ambigous Grammar

- In above example of ambigous grammar, let a = 2, b = 3 and c = 4
- For above values, the first derivation tree will give answer 14 (performing multiplication first) and the other derivation tree will give answer 20 (performing addition first).
- As we can see for the same string we are getting different results if we use ambigous grammar.
- Hence we can't use ambigous grammars in practical use.

### Inherently Ambigous Grammar

- A context-free language having no unambigous grammar is called inherently ambigous language.
- Finding if the CFG generate complete language (∑*)
- Equality problem

## Ambibuity Removal Problem

- Knowing whether we can remove the ambiguity is also **undecidable problem.**


# Decidable Problems of CFG

## Membership problem (using CYK algorithm) (require CNF)

***

## Finiteness Problem

- It's a decidable Problem.

### Steps: Method 1

- If the grammar contain recursions; then the grammar is infinite.

### Steps: Method 2

- Construct a CNF graph.
- If graph contain cycle; then the grammar is infinite.

***

## Emptiness problem

- It's a decidable Problem.

### Steps

- Remove all the useless productons.
- If the starting symbol exists; then the language is not empty; else the language is empty.