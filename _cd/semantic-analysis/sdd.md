---
title: SDD
description: "Syntax Directed Definition"
nav_order: 3
child_of: Semantic Analysis
mathjax: true
---

- Syntax Directed Definitions are a generalization of context-free grammars in which:
    1. Grammar symbols have an associated set of Attributes;
    2. Productions are associated with Semantic Rules for computing the values of attributes.
- Such formalism generates **Annotated Parse-Trees** where each node of the tree is a record with a field for each attribute (e.g.,`X.a` indicates the attribute `a` of the grammar symbol `X`.)

# Attribute Types

## Synthesized Attributes

- If the attribute value at a node is calculated from attribute values at it's children, then the attribute is called synthesized attribute.
- Example

{% highlight bf %}
E -> E1 + T    E.val := E1.val + T.val
E -> T         E.val := T.val
T -> T1 * F    T.val := T1.val * F.val
T -> F         T.val := Fval
F -> id        F.val := num.lexval
{% endhighlight %}

**Note:** Terminal symbols are assumed to have synthesized attributes suppliedby the lexical analyzer
{: .note}

- A parse tree, along with attribute values for expression `2+3*5` is shown in image below.

![Synthesized attribute example]({{ site.baseurl }}/assets/images/cd/synthesized-attribute-parse-tree-example.png)

## Inherited Attribute

- If the attribute value at a node is calculated from attribute values at it's parents or left sibling, then the attribute is known as inherited attribute.
- Example

{% highlight bf %}
D -> TL     L.inT.type
T -> int    T.type=int
T -> real   T.type=real
L -> L1.id  L1.in=L.in
            addtype(id.entry, L.in)
L -> id     addtype(id.entry, L.in)
{% endhighlight %}

- A parse tree, along with the attribute values for input string `int id1, id2, id3` is  shown in image below.

![Inherited attribute example]({{ site.baseurl }}/assets/images/cd/inherited-attribute-parse-tree-example.png)


***

![Synthesized and Inherited Attributes]({{ site.baseurl }}/assets/images/cd/synthesized-inherited-attribute.png)


# Dependency Graph

- If an attribute `b` at a node present in a parse tree dpends on an attribute `c` then semantic rule for `b` at a node must be evaluated after the semantic rule that defines `c`.
- The interdependency between inherited and synthesized attributes at the nodes can be depicted by directed graph called **dependency graph.**
- If attribute `b` depends on an attribute `c` there is a link from the node for `c` to the node for `b` (b←c).

## Evaluation Order

- The evaluation order of semantic rules depends from a *Topological Sort* derived from the dependency graph.
- Topological Sort, is any ordering $m_1, m_2, . . . , m_k$ such that if $mi \to mj$ is a link in the dependency graph then $m_i < m_j$.
- Any topological sort of a dependency graph gives a valid order to evaluatethe semantic rules.

## Disavantages

- This method fails if the dependency graph has a cycle.
- This method is time consuming due to the construction of the dependency graph.

# Strongly Non-Circular Syntax Directed Definitions

## S-Attributed Definition

- The SDT that only have synthesized attributes, is called *S-attributed* definition.
- Synthesized Attributes can be evaluated by a bottom-up parser as the input is being analyzed avoiding the construction of a dependency graph.
- The parser keeps the values of the synthesized attributes in
- Whenever a reduction $A \to α$ is made, the attribute for `A` is computed from the attributes of α which appear on the stack.
- Thus, a translator for an S-Attributed Definition can be simply implementedby extending the stack of an LR-Parser.

### Extending a parser stack

- Extra fields are added to the stack to hold the values of synthesized attributes.
- In the simple case of just one attribute per grammar symbol the stack has twofields: `state` and `val`.

|States|Val|
|-|-|
|Z|Z.x|
|Y|Y.x|
|X|X.x|


## L-Attributed Definition

- The SDT that have **synthesized as well as inherited attributes,** is called *L-attributed* definition.
- A syntax directed definition is L-Attributed if each inherited attributeof $X_j$ in a production $A→X_1, X_j...X_n$, depends only on:
    - The attributes of the symbols to the left (this is what *L* in L-Attributed stands for) of $X_j$, i.e.,$X_1, X_2...X_{j−1}, and
    - The inheritedattributes of A.

Every S attributed SDT is L attributed SDT, but not vice versa.
{: .note}