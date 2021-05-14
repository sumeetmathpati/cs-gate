---
title:  "Bottom Up Parsers"
description: "Bottom up parsers, shirt reduce, handle"
nav_order: 2
child_of: Syntax Analysis
---

- This parser, as name suggests **construct a perse tree from the leaves (from bottom of the tree) and goes towards the root (top of the tree).**
  - **Example,**
      - Let's say we have grammar `{ S --> AB, A --> a, B --> b}`
      - Let's say we have string to parse is `ab`.
      - Bottom-up parsing is done like:
      - ![Phases of compiler]({{ site.baseurl }}/assets/images/cd/bottom-up-parsing.png)
- Bottom up parser uses **right-most derivation in reverse order.**
    - **Rightmost-derivation:** It means that; when we complete the derivation using algorithm below; the derivation will be similar to the righmost-derivation.
    - **Reverse order:** We start from the string given and replace terminals with non-terminals (usually we replace non-terminals with terminals).

# Algorithm for Bottom-Up Parsing

- We find the handle and replaces with variable in the grammar.
    - To to this; first we perform **handle detection.**
- Repeate the process until we get starting state.
- If we reach the strating stae; there is not error in the string.
    - If we do not reach the starting state; there is an error in the string.

## Handle

- Handle is a **substring of a string to be parsed, that matches the right side of the production in a grammar.**
- Replacement of handle should lead towards the starting symbol.
    - Not every substring that matches the right side of the production is a handle.

## Problem

- Sometime there could be multiple matches.
- And replacing the leftmost (as we do) will not lead us towards the starting symbol.
- Hence, selecting the correct handle is a problem in bottom up parsing.

## Example

- Let's say we have grammar: `{ S --> aABe, A --> Abc | b, B --> b }`.
{% highlight bash %}
{ 
    S --> aABe
    A --> Abc | b
    B --> b 
}
{% endhighlight %}

- Let's say we have string: `abbcde`.
- The parse tree would be:

{% highlight bash %}
abbcde

#### STEP 0 ####

aAbcde      ... Replace b with A
  ↑
abbcde

#### STEP 1 ####

aAde      ... Replace Abc with A
  ↑
aAbcde    ... Replace b with A
  ↑
abbcde

#### STEP 2 ####

aABe      ... Replace d with B
  ↑
aAde      ... Replace Abc with A
  ↑
aAbcde    ... Replace b with A
  ↑
abbcde

#### STEP 3 ####

  S       ... Replace aABe with S
  ↑     
aABe      ... Replace d with B
  ↑
aAde      ... Replace Abc with A
  ↑
aAbcde    ... Replace b with A
  ↑
abbcde
{% endhighlight %}

# Shift-Reduce Parser

- This is a practical implementation of bottom up parsers.
- Hence bottom up parsers also called **shift reduce parsers.**

## Algorithm

1. Bottom up parsers also called as shift-reduce parsers.
2. We have input string in buffer with `$` as input delimeter, and we have stack. 
3. We **push/shift** the input characters from buffer into the stack, 
  - If the sequence in stack if handle, we **replace/reduce** it with the variable.
  - If it's not a handle, push/shift next character.
4. If at the end of the input (when `$` is reached), if the starting symbol is at the top; then the input string is **accepted**.
5. If input has errors according our CFG, then the shift-reduce parser don't know what to do next, this state is called **Error.**

## Example

