---
title:  "1) LR(0) Parser"
description: "LR Parser."
nav_order: 5
child_of: Syntax Analysis
sub: true
---

# Terminologies

## Augmented Grammar

- In our given grammar when we add new initial state, with previous starting state on its RHS is called augmented grammar.
- Example

{% highlight bash %}
{ 
    S --> AA
    A --> aA | b
}

Augmented Grammar

{ 
    S1 --> S    
    S --> AA
    A --> aA | b
}
{% endhighlight %}

## LR(0) Items

- LR(0) items or items are grammar productions with a special dot added somewhere in the RHS of production.
- Example, the production `A --> B + C` have following four items
    - `E --> . B + C`
    - `A --> B . + E`
    - `A --> B + . E`
    - `A --> B + E .`
- An item indicates how much of a production we have seen.
    - Symbols on the left of “•” are already on the stack.
    - Symbols on the right of “•” are expected in the input.
- Example the item `A --> B . + E` represents:
    - Parser has read the string corresponding with B and now it expects the `+` followed by `E`.

## LR(0) Item Set

- The items `A --> B . + E` and `A --> B . * E` both satisfy the after the string corresponding with `B` has been read.
- Therefore we characterize the state of the parser by a set of items.
    


## The Closure of Item Sets

- An item with a dot in front of a non-terminal example `A --> B . + E`, indicates that the parser expects to parse a non-terminal `E` next.
- And hence, to parse `E` a parse state should contain all the production in which `E` is on LHS.
- Colusre works like this:
    - In any LR items, after dot, a non-terminal exists; then closure adds the new production of that non-terminal.
    - And in that new production, a dot it placed on left-most side.

- Example,

{% highlight bash %}
Grammar
{ 
    S1 --> S    
    S --> AA
    A --> aA | b
}

LR Item:
{ 
    A --> A . B 
}

closure of above item:
{
    A --> A . B
    B --> a
}
{% endhighlight %}


## LR(0) DFA Construction

### Steps

- Construct autgmented grammar.
- Construct LR(0) items DFA using *closure()* and *goto()*.
- Construct parsing table.

### Note

- Terminal transitions = shift actions
- Non-terminal transitions = Goto entries
- LR(0) items with dot at the end = Reduce

### Example


![Parse Tree Table]({{ site.baseurl }}/assets/images/cd/lr0-dfa.png)


# LR(0) Grammar

- If any CFG LR(0) parsing table contains Shift/Reduce conflict or Reduce/Reduce conflict then that grammar is NOT LR(0) grammar.
    - Shift/Reduce conflict: In a single cell, *shift* and *reduce* both are present.
    - Reduce/Reduce conflict: In a single cell, multiple *reduce* are present.

## Checking LR(0) Grammar

- Instead of creating table, we can check the conflicts by looking at states.
- If states contina following kinds of productions, then there is conflict.

![LR(0) Conflict]({{ site.baseurl }}/assets/images/cd/lr0-conflict.png)

**Note:** Any unambiguous grammar is NOT a LR(0) grammar, but not all ambiguous grammars are LR(0) grammar.
{: .note}

- Example, 
     - The gramar `{S --> A, S --> a, A --> a}` has RR conflict

# LR(0) Drawbacks

- LR(0) parsing table contains unnecessary reduce actions.
- Therefore LR(0) supports less number of grammars than SLR(1).
- An LR(0) parser works only if each state with a reduce action has only one possible reduce action and no shift action.

|`{𝐿 → 𝐿 𝑆•}`|OK|
|`{𝐿 → 𝐿 𝑆•, 𝑆 → 𝑆• 𝐿}`|SR Conflict|
|`{𝐿 → 𝑆 𝐿•, 𝐿 → 𝑆• }`|RR Conflict|

- Takes shift/reduce decisions without any lookahead token.
    - Lacks the power to parse programming language grammars