---
title: Recursive Languages
description: "Recursive Languages"
nav_order: 4
child_of: Turing Machine
mathjax: true
sub: true
---

- A recursive language (subset of RE) can be decided by TM.
    - I.e. it will enter into final state for accepting string and halt at non-final state for rejecting the string.
- There **exist a halting TM** for recursive languages.
- For example, for language $L = \\{ a^n b^n c^n \| n >= 1\}}$ is recursive because we can construct a TM which will move to the final state if the string is in the form of $a^n b^n c^n$ else it will move to the non-final state.
- So, the TM will always halt in this case.
- Recursive languages are also called as **decidable languages.**
- **Recursive languges are subclass of recursive enumerable languages.**

# Example

- Let's suppose we have to find if the grammar generates empty language.
- For that we follow following steps.
    1. Create a string representing grammar.
    2. Pass that string through the TM and check if the starting symbol is useless.
        - If yes; then the grammar generate empty language.
        - If no; then the gramma do not generate empty language.
