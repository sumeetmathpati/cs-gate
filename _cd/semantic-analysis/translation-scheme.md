---
title: Translation Schemes
description: "Translation Schemes"
nav_order: 4
child_of: Semantic Analysis
mathjax: true
---

- Translation Schemes are more implementation oriented than syntax directed definitions since they indicate the orderin which semantic rules andattributes are to be evaluated.
- Definition: A Translation Scheme is a context-free grammar in which
    - Attributes are associated with grammar symbols;
    - Semantic Actions are enclosed between braces `{}` andare inserted within the right-hand side of productions.
- Yacc uses Translation Schemes.
- Translation Schemes **deal with both synthesized and inherited attributes.**
- Semantic Actions are treated as terminal symbols. Annotated parse-trees contain semantic actions as children of the node standing for the corresponding production.

# Example

- Consider the Translation Scheme for the L-Attributed Definition for “type declarations"

{% highlight bf %}
D -> T {L.in:=T.type} L
T -> int {T.type:=integer}
T -> real {T.type:=real}
L -> {L1.in:=L.in}L1,id{addtype(id.entry, L.in)}
L -> id {addtype(id.entry, L.in)}
{% endhighlight %}

- The parse-tree with semantic actions for the input real $id_1,id_2,id_3$ is:

![Translation Scheme Example]({{ site.baseurl }}/assets/images/cd/translation-scheme-example.png)

- Traversing the Parse-Tree in depth-first order (PostOrder) we can evaluate the attributes.

# Evalutaing Attributes

## Top Down Parsing

- Consider a rule as a grammar symbol in top-down parsing.
- And execute the rules as a DFS from left to right.

## Bottom Up Parsing

- Rules in the middle are not suitable for bottom up parsers. 
- We have to convert them and move to the right hand side.
- Example
    - Suppose we have production `A->B{print '1'}B`.
    - We can convert it like this
        - `A->BCB`
        - `C->ε {print '1'}`
- Rules are executed when handle is detected.