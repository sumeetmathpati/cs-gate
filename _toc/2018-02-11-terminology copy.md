---
title:  "TOC Terminology"
description: "Theory of computation terminology. Know about symbols, alphabets, language, strings, Kleen's closure, etc."
serial: 2
---

## Symbols
- Symbol is the smallest building block, which can be any alphabet, letter or any picture.
- A symbol is any single object such as (any picture) , a, 0, 1, #, begin, or do.

***

## Alphabets $(∑)$
- An alphabets is a **finite, nonempty set of symbols.**
- Examples,
	- `∑ = {0, 1}` is an alphabet of binary digits.
	- `∑ = {0, 1, ..., 9}` is an alphabet of decimal digits.
	- `∑ = {a, b, c, ..., z}`

***

## Strings or words

- String is a **finite** sequence of symbols from some alphabet. 
- String is generally denoted as W and length of a string is denoted as \|W\|.
- **\|W\|** (length of string) is number of symbols in a string.
- Empty string is the string with zero occurrence of symbols, represented as $\epsilon$ (epsilon).
- Examples
	- 0110, 11, 001 are three strings over the binary alphabet {0, 1}.
	- aab,abcb, b, cc are four strings over the alphabet { a, b, c }.

***

## Powers of (∑)
- Say `∑ = {a, b}` then
	- $∑^0$ = Set of all strings over `∑` of length 0. `{ε}`
	- $∑^1$ = Set of all strings over `∑` of length 1. `{a, b}`
	- $∑^2$ = Set of all strings over `∑` of length 2. `{aa, ab, ba, bb}`
	- i.e. $\|∑^2\|$= 4 and Similarly, $\|∑^3\|$ = 8
	- $∑^\*$ is an universal set. 
		- Also known as **Kleen's closure.**
		- Infinite language

***

## Language
- A language is a set of strings, chosen from some $∑$
- We can say **'A language is a subset of $∑^*$**. 
- A language which can be formed over $∑$ **can be Finite or Infinite**.
- Examples,
	- `L1` = `{aa, ab, ba, bb}`
	- `L1` = `{aa, ab, ba, bb,...}`
- We can define language with automata as well as Grammer.

***

## Grammar

- In our natural languages (like Sanskrit, English), grammar defines rules for conversation.
	- With the small and finite set of rules we can create our language.
- **Noam Chmsky** in 1956 gave mathematical model for grammar to create computer languages.
- A grammar G is defined as a quadruple. `G = ( V, ∑ , P, S)`
    - V is a non-empty finite set of **non-terminals** or variables.
    - ∑ is a non-empty finite set of **terminal symbols** such that `V ∩ ∑ = ∅.`
    - S ∈ V, is a special non-terminal (or variable) called the start symbol.
    - P: `( V ∪ ∑)* V ( V ∪ ∑)*` is a finite set of production rules.

***

**Note:** We define grammar for our language, according to this grammar we create **machines/automaton**. When we give strings as an input to the automaton it either accepts or rejects the string.
{: .info}