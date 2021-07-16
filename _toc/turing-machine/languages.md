---
title: Languages
description: "Turing Machine Languages"
nav_order: 2
child_of: Turing Machine
mathjax: true
---

- A language is called
    - **Recursive Language (REL)**; for which a TM always halts..
    - **Recursive Enumerable (RE)**; for which TM may or may not halt   .

When we say Turing machine; we are talking about may or may not halting TM.
{: .note}

# Closure Properties

|Operation|RL|REL|
|-|-|-|
|Set Difference|||
|CFL - Regular|||
|Regular - CFL|||
|Subset|||
|Kleene Closure|Yes|Yes|
|Positive Closure|||
|Reverse|||
|Prefix|||
|Suffix|||
|Quotient|||
|CFL / Regular|||

|Operation|Regular|DCFL|CFL|CSL|Recursive|RE|
|-|-|-|-|-|-|
|Union|yes|No|yes|yes|yes|yes|
|Intersection|yes|No|No|yes|yes|yes|
|Complement|yes|yes|No|yes|yes|No|
|Concatenation|yes|No|yes|yes|yes|yes|
|Kleene star|yes|No|yes|yes|yes|yes|
|Homomorphism|yes|No|yes|No|No|yes|
|ϵ-free Homomorphism|yes|No|yes|yes|yes|yes|
|Substitution (ϵ-free)|yes|No|yes|yes|No|yes|
|Inverse Homomorphism|yes|yes|yes|yes|yes|yes|
|Reverse|yes|No|yes|yes|yes|yes|
|Intersection with a regular language|yes|yes|yes|yes|yes|yes|  