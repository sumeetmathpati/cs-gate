---
title:  "Bottom Up Parsers"
description: "Bottom up parsers, shirt reduce, handle"
nav_order: 2
child_of: Syntax Analysis
mathjax: true
---

- This parser, as name suggests **construct a perse tree from the leaves (from bottom of the tree) and goes towards the root (top of the tree).**
- To do so, bottom-up parsing tries to find a **rightmost derivation of a given string in reverse order.**
  - **Rightmost-derivation:** It means that; when we complete the derivation using algorithm below; the derivation will be similar to the righmost-derivation.
  - **Reverse order:** We start from the string given and replace terminals with non-terminals (usually we replace non-terminals with terminals).
- **Example,**
    - Let's say we have grammar `{ S --> AB, A --> a, B --> b}`
    - Let's say we have string to parse is `ab`.
    - Bottom-up parsing is done like:
    - ![Phases of compiler]({{ site.baseurl }}/assets/images/cd/bottom-up-parsing.png)
    
  
# Key Ideas

- The weakness of top-down LL(k) parsing techniques is that they must predict which production to use, having seen only the first k tokens in the right side.
- The more powerful techniques of bottom-up LR(k) parsing is able to postpone the decision until it has seen
  - Input tokens corresponding to the entire right side of the production
  - and k lookahead tokens beyond


# Algorithm for Bottom-Up Parsing

- We find the handle and replaces with variable in the grammar.
    - To to this; first we perform **handle detection.**
- Repeate the process until we get starting state.
- If we reach the strating state; there is not error in the string.
    - If we do not reach the starting state; there is an error in the string.

## Handle

- **Handle is a substring that matches the body of a production.**
- Replacement of handle should lead towards the starting symbol.
    - Not every substring that matches the right side of the production is a handle (because not every substring that matches leads towards the starting symbol).

If grammar $G$ is unambiguous, then every right sentential form has only one handle
{: .note}

## Problem

- Sometime there could be multiple matches.
- And replacing the leftmost (as we do) will not lead us towards the starting symbol.
- Hence, **selecting the correct handle is a problem in bottom up parsing.**

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
- Hence, **bottom up parsers also called shift reduce parsers.**
- It has two primary actions, **shift** and **reduce.**
  - Other obvious actions are **accept** and **error.**
- The input string (i.e., being parsed) consists of two parts:
  - Left part is a string of terminals and nonterminals, and is stored in stack.
  - Right part is a string of terminals read from an input buffer.
- Bottom of the stack and end of input are represented by $.

## Shift-Reduce Actions

- **Shift:** shift the next input symbol from the right string onto the top of the stack.
- **Reduce:** identify a string on top of the stack that is the body of a production, and replace the body with the head.

## Example

- Grammar

{% highlight bash %}
{
  E --> E + T | T
  T --> T * F | F
  F --> (E) | id
}
{% endhighlight %}

|Stack|Input|Action|
|$|id1 * id2 $|Shift|
|# id1|* id2 $|Reduce by `F --> id`|
|$id1|∗id2$|Reduce by `F --> id`|
|$F|∗id2$|Reduce by `T --> F`|
|$T|∗id2$|Shift|
|$T∗|id2$|Shift|
|$T∗id2|$|Reduce by `F --> id`|
|$T∗F|$|Reduce by `T --> T∗F`|
|$T|$|Reduce by `E --> T`|
|$E|$|Accept|

