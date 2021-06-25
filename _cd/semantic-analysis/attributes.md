---
title: Attributes
description: "Attributes synthesized attributes inherited attributes"
nav_order: 2
child_of: Semantic Analysis
---

# Attribute Types

## Synthesized Attributes

- If the attribute value at a node is calculated from its children, then the attribute is called synthesized attribute.

## Inherited Attribute

- If the attribute value at a node is calculated from its parents or left sibling, then the attribute is known as inherited attribute.


![Synthesized and Inherited Attributes]({{ site.baseurl }}/assets/images/cd/synthesized-inherited-attribute.png)

# Need

- But why we require two types of attributes.
- We require these two methods to construct symbol table and can pass the attribute information around.
- Example, suppose we have string `int a, b, c`  and from that we have following symbol table (before semantic analysis).

|lex|token|type|
|-|-|-|
|a|id||
|b|id||
|c|id||

## Grammar

- And the gramamr we have is:

{% highlight bf %}
S->TL
T->int
T->float
L->L id
L->id
{% endhighlight %}

## Parse Tree

- We can see that we don't have the type information, because that information we shall get after the semantic analysis phase.

![Attribute Tree]({{ site.baseurl }}/assets/images/cd/attribute-1.png)

- We've constructed parse tree for the string `int a, b, c`.
    - Assume that this is the tree for the declaration syntax.
    - Hence we want to specify the type to the variables `a`, `b`, and `c`.
    - But that's not possible with only synthesized attribute methos.
- We have to pass the attribute information in the following way:

## Attribute Prase Tree

![Synthesied and Inherited Attribute Example]({{ site.baseurl }}/assets/images/cd/synthesized-inherited-attribute-example.png)

- We can see that, in above tree, we passed the type information to all the id's (a, b, c).

## SDT

- To get the above tree as output, we can use the SDT below.
    - The `addtype(id, type)` is a method used to add the type of a certain variable into the symbol table.
    
{% highlight bf %}
S->TL {L.type = T.type}
T->int {T.type = int}
T->float {T.type = float}
L->L1 id {L1.type = L.type, adtype(id.name, L.type)}
L->id {addtype(id.name, L.type)}
{% endhighlight %}

# S and L Attributed Definition

## S-Attributed Definition

- The SDT that only have synthesized attributes, is called *S-attributed* definition.

## L-Attributed Definition

- The SDT that have synthesized as well as inherited attributes, is called *L-attributed* definition.

Every S attributed SDT is L attributed SDT, but not vice versa.
{: .note}

# SDD and SDT

- The syntax directed definition and syntax directed translation are two different things.

## SDD

- Rules present in rightmost side.
- Example, `A->B {print 2}`

## SDT

- Rules may present in the middle and right side of the production.
- Example, `R->A+B{print 1} C | p`

### Top Down Parsing

- Consider a rule as a grammar symbol in top-down parsing.
- And execute the rules as a DFS from left to right.

### Bottom Up Parsing

- Rules in the middle are not suitable for bottom up parsers. 
- We have to convert them and move to the right hand side.
- Example
    - Suppose we have production `A->B{print '1'}B`.
    - We can convert it like this
        - `A->BCB`
        - `C->ε {print '1'}`
- Rules are executed when handle is detected.

Every SDD is also a SDT, but not vice versa.
{: .note}