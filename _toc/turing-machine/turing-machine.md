---
title: Turing Machine
description: "Turing Machine"
nav_order: 7
parent: true
---

- Turing machine is a mathematical model used to study the capability of the computer.
- Using turing machine; we can conclude that which problems are decidable and which are undecidable.
- Turing machine is superior to all other models, because it has following capabilities:
    - **Turnaround**
        - I.e. a R/W head of Turing machine can go forward and backwards.
    - **Read/Write**
        - Turing machine not only can read the input, but also can write the data.
    - **Infinite length tape**
- Languages are recognized using final state method.
- Turing machine is more powerful than any other automata.

# Turing Machine Structure

- It has finite control and unbound input tape.
- Finite control has finite number of states.
- R/W head can read and write input by moving in left or right direction.
- 

# Formal Definitions

- The DFA will have a following parameters

(Q, ∑, δ, qo, F, B, Γ)
{: .w3-xlarge .w3-center }

**Q** is a set of states.<br>
**∑** is a set of input symbols.<br>
**δ** is a transition function: Q * Γ -> Q * Γ + {left/right}.<br>
**q0** is a initial state.<br>
**F** is a set of final states. F ⊆ Q.<br>
**B** is a blank symbol.
**Γ** is a tape alphabet.
{: .w3-center}

# Types

We have three types of Turing machines.

1. **Language recognizer** [IMP GATE]
    - Takes input, and accept or reject the language.
2. **Output Generator / trancducer**
    - Takes input, generate output.
3. **Language generator**
    - Don't take input and generated the output.

# Representation

- A turing machine can be represented using:
    - **Transition diagram**
    - **Transition Table**

# Acceptance 

- If Turing machine halts in final state; string is accepted.
- If Turing machine halts in non-final state; string is rejected.
- If Turing machine goes into infinite loop; we can't say, it's undecidable.
