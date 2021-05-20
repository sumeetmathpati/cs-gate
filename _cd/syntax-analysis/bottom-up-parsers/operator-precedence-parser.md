---
title:  "Operator Precedence Parser"
description: "Operator precedence Parser"
nav_order: 9
child_of: Syntax Analysis
sub: true
mathjax: true
---


- It's type of bottom-up parser and hence it's also a shift/reduce parser.
- Operator precednce parser **can handle ambiguous grammars.**
    - Ambiguous grammars are not allowed in any parser except operator precedence parser.
- It's suitable only for operator grammar.
    - Hence there is no concept of conflicts here.
- Time complexity of this parser is **O(n)**.
- This parser parses grammar by using operator relation tables.

# Operator Grammar

- This grammar is used to define mathematical operators called an operator grammar.
- Operator grammar is a CFG, where
    - **No null productions are allowed**
    - **No two adjecent non-terminals on RHS.**
- Example of operator precedence grammar, `E --> E + E | E * E | id`.
- Example of a grammar which is not an operator grammar is,

{% highlight bash %}
Not an operator precedence grammar:
{ 
    S --> SAS | a
    A --> bSb | b
}

Convert it into operator precedence grammar:
{
    S -->SbSbS| SbS | a
}
{% endhighlight %}

- In any operator grammar, if both left and right recirsion exists in a single production; then that grammar is ambiguous.
    - Example prodution, `F --> F - F`.

# Operator Precedence Grammar

- First, it's an operator grammar.
- Operator precedence grammars are **NOT ambiguous.**
- A parsing table should not contain more than one precedence relations.
    - I.e. in one cell there should not be more thatn one precedences.

Every *operator grammar* is *operator precdence grammar*, but not vice versa.
{: .note}

# Parsing

## Shift/Reduce Rules

- Let's suppose `x` is present in stack and lookahed pointer is on buffer symbol `y`.

### Shift Action

- We perform *shift* action, when:
    - $x \lessdot y$
    - $x \doteq y$

### Reduce Action

- We perform *reduce* action, when:
    - $x \gtrdot y$


## Example

- Given grammar

{% highlight bash %}
{
    E --> E + E
    E --> E * E
    E --> id
}
{% endhighlight %}

- Precedence (We calculated): **id $\gtrdot$ * $\gtrdot$ + $\gtrdot$ $**

- Parsing Table

||id|+|*|$|
|id|.|$\gtrdot$|$\gtrdot$|$\gtrdot$|
|+|$\lessdot$|$\gtrdot$|$\lessdot$|$\gtrdot$|
|*|$\lessdot$|$\gtrdot$|$\gtrdot$|$\gtrdot$|
|$|$\lessdot$|$\lessdot$|$\lessdot$|Accept|

|Stack|Input Buffer|Action|
|-|-|-|
|$|id+id*id$|Shift|
|$id|+id*id$|Reduce|
|$E|+id*id$|Shift (comparing `$` and `+`.<br>Because we only compare terminals.)|
|$E+|id*id$|Shift|
|$E+id|*id$|Reduce|
|$E+E|*id$|Shift|
|$E+E*|id$|Shift|
|$E+E*id|$|Reduce|
|$E+E*E|$|Reduce|
|$E+E|$|Reduce|
|$E|$|Accept|
{: .w3-margin-top}


# Operator Precedence Parsing Table

- Like LR parsers, this table also have parsing table.
- The parsing table here, do not use DFA (unlike LR pasers, which use DFA for the table).
- But in this table instead of shift/reduce actions, we have $\lessdot$, $\gtrdot$ and $\doteq$ operators.
    - This table is used to determine the precedence and associativity of operators.
- Shift/Reduce is done on the basis on these precedences.
- The size of the table will be: $(t + 1)^2$:
    - Where $t$ is number of terminals in grammar.
    - 1 For the $ \$ $.
- If for an ambiguous grammar we construct a table, multiple entries will be ther in the table cell.

## Construction

- Parse tree method is used to determine the precedence and associativity. To identify the precedence,
    - Construct a parse tree.
    - Identify the precedence.
    - The lower operator in parse tree levels has higher precedence.
- $ always have lesser precedence than other operators.
- The identifiers always have higher precedence than other operators.
- We don't fill the cell in table for same terminals.
- For same operator we give predecence to the side depending on operator's precedence.
    - Precedence can be checked; depending on the recirsion side.
    - For example, in `A --> B * A, the recursion is right, hence the associativity is from right to left.
    - And therefore the precedence written in table is $\lessdot$.

***

## Example

- Given grammar

{% highlight bash %}
{
    A --> B * A | B
    B --> B + C | C
    C --> a
}
{% endhighlight %}

- Parse tree os above grammar is:

![Operator Predecedence Parse Tree]({{ site.baseurl }}/assets/images/cd/operator-precedence-parse-tree.png)

- As we can see that in above grammar `+` has higher precedence than `*`.

||a|*|+|$|
|a||$\gtrdot$|$\gtrdot$|$\gtrdot$|
|*|$\lessdot$|$\lessdot$|$\lessdot$|$\gtrdot$|
|+|$\lessdot$|$\gtrdot$|$\gtrdot$|$\gtrdot$|
|$|$\lessdot$|$\lessdot$|$\lessdot$|Accept|

# Drawbacks of Operator Precedence Parser

- It's less powerful than LR.
- OPP is not suitable for `-` operator.
    - It cannot defferentiate between unary `-` and binary `-`.

# Questions

## Q1

- Find the precedence and associativity.

{% highlight bash %}
{
    A --> B ^ A | B
    B --> B & C | C
    C --> D @ C | D
    D --> a
}
{% endhighlight %}

- **Precedence (highest to lowest):**  @, &, ^
- **Associativity:**
    - **@:** Left to right
    - **&:** Right to left
    - **^:** Right to left

## Q2

- Find the precedence and associativity.

{% highlight bash %}
{
    E --> W ^ T | T - E
    T --> F + E | F * T
    F --> a
}
{% endhighlight %}

- **Options:**
    1. ^, - have same precedence.
    2. +, * have same precedence.
    3. \+ have higher precedence than -.
    4. None

- **Answer:** 4