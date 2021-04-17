---
title: Terminology
description: "Theory Of Computation tutorial."
nav_order: 1
child_of: Theory Of Computation
mathjax: true
---

# Alphabets (∑)

- **An aplhabet is non-empty and FINITE set of symbols.**
- **Examples,**
    - ∑ = {a, b} is alphabet with two symbols *a* and *b*.
    - ∑ = {1, 0} is alphabet with two symbols *1* and *0*.

## Powers of an Alphabet

- Say $\sum$ = $\\{a,b\\}$ then
	- $\sum^0$ = Set of all strings over $\sum$ of length 0. $\\{\epsilon\\}$
	- $\sum^1$ = Set of all strings over $\sum$ of length 1. $\\{a, b\\}$
	- $\sum^2$ = Set of all strings over $\sum$ of length 2. $\\{aa, ab, ba, bb\\}$
- \|$\sum^n\| = 2^n$ 
    Example, $\|\sum^2\|$= 4 and Similarly, $\|\sum^3\|$ = 8

***

## Keleen's Closure

- $\sum^*$ is an set of all string over ∑.
    - Also known as **Kleen's closure.**
    - $\sum^* = \sum^0 \cup \sum^1 \cup \sum^2 \cup ...$
    - Infinite language

## Positive Closure

- $\sum^+$ is an set of all string over ∑ **Except an empty string.**.
    - Also known as **Kleen's closure.**
    - $\sum^+ = \sum^* - \sum^0$
    - Infinite language

# String

- **A string is any sequence of zero or more symbols over given alphabet ∑.**
- **Example,**
    - *abba* is a string over ∑ = {a, b}.

## Empty String (ε)

- Empty string is a string with zero number of symbols in it.
- Also called null string.

## Operations On String

### Concatenation

- **Example,**
    - If string *w1 = abb* and *w3 = babb*
        - Then *w1w2 = abb.babb = abbbabb*
        - Then *\|w1w2\| = \|w1\| + \|w2\|*

### Reversal

- **Example,**
    - If *w = abb*, 
        - Then *w<sup>r</sup> = bba*. 

### Length of String

- **The number of symbols in a string is length of that string.**
- **Example,**
    - Length os string *abba* is a *\|abba\| = 4*, where *∑ = {a, b}*
    - Length os an empty string is zero, i.e. *\|ε\| = 0*.

### Substring of String

- **A continuous sequence of symbols from any part of a string is called a subset of that string.**
- **Example,**
    - Substrings of string *abba* are
        - Substrings of length 0: *ε*
        - Substrings of length 1: *a*, *b*
        - Substrings of length 2: *ab*, *ba*, *bb*
        - Substrings of length 3: *abb*, *bba*
        - Substring of length 4: *abba* 

### Prefix

- **A substring with the sequence of beginning symbols of a given string is called prefix.**
- **Example,**
    - For string *abb*, the possible prefixes are:
        - Prefix of length 0: *ε*
        - Prefix of length 1: *a*
        - Prefix of length 2: *ab*
        - Prefix of length 3: *abb*
- **Number of prefixes of string with size n = n+1.**

### Suffix

- **A substring with the sequence of trailing/ending symbols of a given string is called suffix.**
- **Example,**
    - For string *abb*, the possible prefixes are:
        - Prefix of length 0: *ε*
        - Prefix of length 1: *b*
        - Prefix of length 2: *bb*
        - Prefix of length 3: *abb*
- **Number of prefixes of string with size n = n+1.**

# Language

- A set of strings over the given aplphabet is called *language*.
- **Example,**
    - Suppose ∑ = {1, 0}, possible languages are:
        - {11, 101, 01}, or
        - {0, 1, 10, 100, ...}, or
        - {ε, 101, 11}
- Languages may be **finite or infinite.**

# Grammar

- Grammar is a set of rule to **generate/scan/accept** the strings present in the language.
- Hence, we can say that:
    - The specific grammar generates specific language.
    - All strings in a language are accepted by its grammar.
    - Each language has associated grammar, and vice versa.

## Formal Grammar

- Formal grammar is a grammar used to represent formal languages (such as RL, CFL etc.) is called formal grammar.
- A formal grammar can be represented as 4 tuple (tuple of 4 elements):
    - **G = {V, T, P, S}**
        - **V** is a set of **variables** or **non-terminal** symbols.
        - **T** or ∑ is a set of **terminal** (symbols in *∑*).
        - **S** is a special variable called the **Start symbol,** **S ∈ V.**
        - **P** is Production rules for Terminals and Non-terminals.
            - Production rule is represented as *X --> Y**, where **X** and **Y** can be terminal or variable.

# Automaton

## Automaton As Acceptor

- An automaton is a machine that accepts or recognizes the string of a language L over an aplhabet **∑.**

![Automaton As Acceptor]({{ site.baseurl }}/assets/images/toc/automaton-as-acceptor.png)

automaton-as-acceptor.png

***

## Automaton As Generator

- Automaton can also produce output over any aplhabet **∆** for input alphabet **∑.**

![Automaton As Generator]({{ site.baseurl }}/assets/images/toc/automaton-as-generator.png)
