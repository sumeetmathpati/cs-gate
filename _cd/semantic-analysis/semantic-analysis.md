---
title: Semantic Analysis
description: "Semantic analysis tutorial"
nav_order: 4
parent: true
---

# Drawbacks of Parsers

- In programming languages, a parser generates error in following types of statements, i.e. if the syntax of any statement don't match with any of type given below; it throws syntax error:
    - Declaration 
    - Expression
    - Flow control
    - Function
- Other compiler errors that above are do not detected by parser. A parser will parse a meaning less statement (according to us) without any errors, like
    - Using undeclared variables.
    - Dividing by zero.
    - Using incompatible types.
    - Multiple declarations of same variables within same scope.
    - Array index out of bound.
    - Mismatch of formal and actual parameters.
- To identify above errors (not identified by parsers); we have to use semantic analyzer.

# Semantic Analyzer

- Here we use **context sensitive grammars** and **linear bound automata.**
    - To be specific, we use attribute grammars (we shall se what it it).
- Semantic analyzer helps to **verify the meaning of the statement** is correct (according to our rules) or not.
- If SDt is given to the bottom up parser; the semantic rule attached to the production is executed while reduce action.

# Automata

- The automata used in semantic analyzer is also a **linear bound automata** as parser.
- LBA is a PDA with 2 stacks.
- We just add another stack in our parser in sentax analysis phase.
    - One stack is used for Syntax.
    - Another stack is used for semantics.

The parser in compiler is composed of two stacks, one for sentax and another one is for semantics.
{: .note}

# Syntax Directed Tree

- SDT is a mathematical model, where each CFG production is associated with set of semantic rules.
    - Example, `E --> E # T {E.val = E1.val - T.val}`
- Semantic rules are attribute calculation rules in annotated parer tree.

## Applications of SDT

- Detection of semantic errors.
- Symbol table construction.
- Type casting.
- Intermediate code generation.
- Construction of syntax tree.

## Evaluation of Values From SDT

1. Construct a parse tree.
2. Construct annotated parse tree.
3. Compute attribute information in annotated parse tree.

### Example

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
