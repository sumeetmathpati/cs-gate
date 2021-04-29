---
title: CFG Decision Properties
description: "Context free grammar, ambigous grammar, inherently ambigous grammar. CFG decision properties."
nav_order: 7
child_of: Grammars
mathjax: true
sub: true
---

# CFG Problems

## Regularity Problem

- In this probem we want to find whether the given CFG generated teh regular language or not.
- This is **undecidable problem.**

## Ambiguity Problem

- A CFG is said to be ambigous if and only if more than one *left-most-derivation* parse tree or *right-most-derivation* parse tree can be generated.

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
- Knowing whether we can remove the ambiguity is also **undecidable problem.**

### Disadvantages of Ambigous Grammar

- In above example of ambigous grammar, let a = 2, b = 3 and c = 4
- For above values, the first derivation tree will give answer 14 (performing multiplication first) and the other derivation tree will give answer 20 (performing addition first).
- As we can see for the same string we are getting different results if we use ambigous grammar.
- Hence we can't use ambigous grammars in practical use.

### Inherently Ambigous Grammar

- A context-free language having no unambigous grammar is called inherently ambigous language.

# Undecidable Problems of CFG

- Regularity problem
- Ambiguity problem
- Ambiguity elimination problem
- Finding if the CFG generate complete language (∑*)
- Equality problem

# Decidable Problems of CFG

- Membership problem (using CYK algorithm) (require CNF)
- Finiteness problem (requires CNF)
- Emptiness problem