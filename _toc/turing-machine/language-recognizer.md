---
title: Language Recognizer
description: "Turing Machine"
nav_order: 1
child_of: Turing Machine
mathjax: true
---

# Questions

## Q1

- Construct a Turing machine for $L = \\{a^n \| n >= 1\\}$

**Solution**

- Transition Table

||a|B|
|q0|(q1, a, R)||
|q1|(q1, a, R)|(Qf, B, R)|
|Qf|||

![TM]({{ site.baseurl }}/assets/images/toc/tm-q1.png)

## Q2

- Construct a Turing machine for $(a+b)^* a(a+b)(a+b)$

**Solution**

- Transition Table

||a|b|B|
|q0|(q0, a, R)|(q0, b, R)|(Q1, B, R)|
|q1|(q2, a, L)|(q2, b, L)|(Q2, B, R)|
|q2|(q3, a, L)|(q3, b, L)|(Q3, B, R)|
|q3|(qf, a, L)|||
|qf|||(Qf, B, R)|

## Q3

- Construct a Turing machine for $(a+b)^* abab$

**Solution**

- Transition Table

||a|b|B|
|q0|(q0, a, R)|(q0, b, R)|(Q1, B, R)|
|q1||(q2, b, L)||
|q2|(q3, a, L)|||
|q3||(q4, b, L)||
|q4|(qf, a, L)|||
|qf|||(Qf, B, R)|

## Q4

- Identify the languagage given by Turing machine.

||a|b|B|
|q0|(q1, a, R)|(q1, b, R)||
|q1|(q2, a, R)|(q2, b, R)||
|q2||(q3, b, R)||
|q3|(q3, a, R)|(q3, b, R)|(qf, B, R)| 
|qf||||

**Solution** 

- The third symbol from starting is b.

## Q5

- Identify the languagage given by Turing machine.

||a|b|B|
|q0|(q1, a, R)|(q0, b, R)|(qf, B, R|
|q1|(q2, a, R)|(q1, b, R)||
|q2|(q0, a, R)|(q2, b, R)||
|qf||||

**Solution** 

- Number of a's is divisible by 3.

## Q6

- Construct a Turing machine for $L = \\{a^n b^n \| n >= 1\\}$

**Solution** 

![TM]({{ site.baseurl }}/assets/images/toc/tm-q6.png)

## Q7

- Construct a Turing machine for $L = \\{ww^R \| w \in \\{a, b\\}^* \\}$

**Solution** 

![TM]({{ site.baseurl }}/assets/images/toc/tm-q7.png)

