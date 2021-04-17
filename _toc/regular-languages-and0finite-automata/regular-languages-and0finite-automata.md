---
title: Regular Languages and Finite Automata
description: "Regular Languages and Finite Automata."
nav_order: 3
parent: true
---

- Finite automata also called **finite state machine.**
- Finite automata has **no temporary storage** hence it can remember finite information.
- With the help of finite control which contains **states and transitions.**

# Types of Finite Automata

## Finite Automata (FA Without Output)

### Deterministic finite automata (DFA)

- For every input symbol there is exactly one transition from any state in automata.
- It accepts string by halting/stopping at final state.
- It rejects string by halting at non-final state.

### Non deterministic finite automata (NFA)

- For every input symbol there can be more than one transitions from any state in automata.
- It accepts string by halting/stopping at final state.
- It rejects string by halting at non-final state or dead state.

### Non deterministic finite automata with ε (ε-NFA)

- It's a non-deterministic FA but it allows ε transitions i.e. it can change states without reading a input symbol.

***

## Finite Transducer (FA With Output)

### **Mealy machine**
- Output is associated with transition (state and input symbol).
### **Moore machine**
- Output is associated with state.

***

- Accepor is a machine which accepts or recognized the langauge.
- Trnsducer is a machine which produces an output.
- Deterministic automata is a machine in which each move is uniquely determined by reading an input.
- Non-deterministic automaton is a machine in which each move may have more than one possible actions.
- Mealy and Moore machines are deterministic.
{: .info}

# Model of Finite Automata

- We have input tape which is a string over a given input alphabet.
- Read head is a pointer which reads one input symbol from input tape at a time and moves to the next symbol.
- Finite control has finite states and transition functions to take action based on current state and input symbol.
- For every state finite control starts form initial state and if the string is valid, we end up at final state.

- 
![Finite Automata Model]({{ site.baseurl }}/assets/images/toc/finite-automata-model.png)

# Finite Automata Acceptence

- Finite automata accepts type-3 formal languages called **regular languages.**
- **Regular languages can be wither finite or infinite,** i.e. a language can contain finite string or infinite strings.
- **Every finite lanugage is regular language,** hence we can construct FSA for any finite language.
- For infinite language, construction if FSA may or may not possible.
	- If FSA does not require infinite memory, then its possible to construct.
	- Else it's not possible to construct FSA,as it's requires infinite number of states which is not allowd in FA.

# Regular Language

- **All finite languages are regular languages.**
- If the language is infinite over unary alphabet and whose strings ae forming an arithmetic progression, then the language is regular, otherwise it's not regular.
- If the language is infinite over two or more symbols and which do not contain any dependency between symbols then the language is regular.

# Representation of Regular Language


Regular languages can be represented by using following means:

- Finite automata (by construction).
- Regular grammars (by writing production rules).
- Regular expression (by writing an expression).

# Equivalence of Finite Automata

- DFA ≅ NFA ≅ ε-NFA
	- All these FA accept same class of languages called regular languages.
- Every DFA is a special case of NFA.
- NFA can be converted to DFA.
- ε-NFA can be converted to NFA and DFA.

# Representation of Finite Automata

- FA = (Q, ∑, δ, Q0, F) is a 5-tuple notation.
	- Q is a finite set of finite states.
	- ∑ is a finite set of input symbols.
	- δ is a set of transition functions for states and input of FA.
	- q0 is initial state or start state. q0 ∈ Q.
	- F is a set of final states.

## State Transition Diagram

- Every state is represented by a circle.
- For an initial state, circle is associated with an arrow.
- Final state is represented by double circle.

***

## State Transition Table