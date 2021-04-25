---
title: Grammars
description: "Grammars in theory of computation. Regular grammar, context free grammar."
nav_order: 5
parent: true
---

- Grammar is a set of productions used to generate the lagnague described by a language.
- Formal definition of grammar is:

(V, T, P, S)
{: .w3-xlarge .w3-center }

**V** is a set of variables/non-terminals.<br>
**T** is a set of terminals.<br>
**P** is a set of productions.<br>
**S** is starting symbol.<br>
{: .w3-center}

**Note:** Generally non-terminals/variable are represented with capital letters and terminals are represented with small letters in the grammar.
{: .note}

- Every grammar generated only one language.
- A language can have more than one grammar.

# Terminology

## Derivation

- It's the process of deriving the strings from the given grammar.
	- I.e. the strings in the language which the grammar represents.
- Derivation can be rightmost of leftmost.

## Parse Tree

- It's the tree representation of the derivation.
- All leaf nodes of the parse tree known as yeild of the parse tree.

## Productions

- All the productions in a grammar are in the form $X --> y$.	
	- Where $X$ contain at least one non-terminal/variable.
	
