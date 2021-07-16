---
title: Three Address Code
description: "Three address code"
nav_order: 3
child_of: Intermediate Code Generation
sub: true
---

- In TAC **common subexpressions are present.**
    - But we optimize our code in optimization phase.

# Types of Three Address Statements


- **Unconditional jump:** goto L
- **Stack operations:** Push/Pop

***

## Conditional jump:

- For conditional jump statements like `if (condition)`; the TAC will be
    - `L1` and `L2` in TAC below are labels to the positions to go if the condition is *true* and *false* respectively.

{% highlight c %}
if condition goto L1
    goto L2
{% endhighlight %}

- **Example,**

{% highlight c %}
// This is source code.
if (a>b) {
    return a-b;
} else {
    return b-a;
}
{% endhighlight %}

{% highlight c %}
// The TAC for above code.
if a > b goto L1
    goto L2
L1:
    t1 = a - b
    return t1
L2:
    t1 = b - a
    return t1
{% endhighlight %}

Similarly, the TAC for for loop `for (i=1; i < 10; i++) {a=b+c}` will be,

{% highlight c %}
i = 1

L0:
if i < 10 goto L1
    goto L2

L1:
    t1 = b + c
    a = t1
    t2 = i + 1
    ti = t2
    goto L0

L2:
    ...
{% endhighlight %}

***

## Expressions Statements

- Correspoinding to expressions; we have generate following types of TAC
    - **Binary operation statement:** x := y OP z
    - **Unary operation statement:** x := OP z
    - **Copy statement:** x := z
- **Steps:**
    - For every subexpression; we generate a temporary variable.
    - Subexpression should be considered according to the operator precedence and associativity.

- These are also called **static single assignments.**
    - In this, every subexpression is assigned to a new variable.
    - Rewriting of temporary variables is not allowed.

- Example,

{% highlight c %}
x = a + b * c
    t1 = b * c;
    t2 = a + t1
    x = t2

x = a * b + c * d + e * f
    t1 = a * b
    t2 = c * d
    t3 = e * f
    t4 = t1 + t2
    t5 = t4 - t3
    x = t5
{% endhighlight %}

***

## Procedures

- The function call `p(x1, x2, ...xn)` will look like this in TAC:

{% highlight c %}
param x1
param x2
...
param xn
call p, n
{% endhighlight %}

- Example, `sum(a, b)`
{% highlight c %}
param a
param b
call sum 2
{% endhighlight %}

***

## Declaration Statements

- Declaration is just a putting vlaues in symbol table, creating memory (which is not a job of a compiler).
- Hence, **no TAC code is required for declaraton statements,** because the symbol table is already filled by the above three phases.

***

## Index Assignments

- Used for arrays.

{% highlight c %}
X := y[i]
x[i] := y
{% endhighlight %}

- TAC for *n* dimentional array is: 
    - **A{i, j, k, l...] = (((i \* Nj + j)Nk + k)Nl \* l) \* elementSize + Base - [ ((((LB(i)\*Nj + LB(j))Nk + LB(k))Nl + LB(l))...) ] \* elementSize**

***

## Address and Pointer Assignments

- These are used for pointers.

{% highlight c %}
x := &y
x := *y
*x := y
{% endhighlight %}

# SDTs for TAC

- Until now, we were generating SDTs manually.
- But in practice we generate intermediace vode from SDTs.
- Hence we have to create STDs such that they generate TAC.
- Example SDT
    - `gen` is a function that geneates output code.
    - `newstemp` is a function that returns the name of a new temporary variable.

{% highlight c %}
S -> id := E {gen(id.place=E.place;);}
E -> E1 + E2 (t = newstemp(); gen(t=E1.place + E2.place);); E.place = t}
E -> id {E.place = id.place;}
{% endhighlight %}

# Quadruple Notation

- But how we store the three address code in practice? we use something called quadruple notations.
- The TAC is stored using table with four (that why *quad*) columns. 
    - Those four columns are **result**, **operator**, **oprand1**, and **oprand2.**

- Example

{% highlight c %}
t1 = b * c
t2 = a + t1
x = t2
{% endhighlight %}

|Result|Oprator|Oprand1|Oprand2|
|-|-|-|-|
|t1|*|b|c|
|t2|*|a|t1|
|x|=|t2|-|