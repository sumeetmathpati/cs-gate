---
title: Construct Regular Expressions
description: "Construct regular expressions problems, examples, questions."
nav_order: 1
child_of: "Regular Expressions"
mathjax: true
---
 
### 1) All even length palindrome on ∑ = {a}.

<!-- - $L = {a, aa, aaaa, a^6, ...}$ -->
- **Answer:** $(aa)^*$

### 2) All odd length palindrome on ∑ = {a}.

- **Answer:** $a(aa)^*$

### 3) All even length palindrome on ∑ = {a, b}.

- $L = {ab, aabb, abba, ...}$
- **Answer:** This language is not possible, and hence regular expression is not possible.

Palindrome languages over single symbols are regular.<br/>Palindrome languages over more than one symbols are not regular.
{: .note}

### 4) Length of the string is exactly 4 on ∑ = {0, 1}.

- **Answer:** $(0+1)^4$ .

### 5) Number of 0s exactly 4 on ∑ = {0, 1}.

- **Answer:** $(1^* 01^* 0 1^* 0 1^* 0)$ .

### 6) Length of the string is at least 3 on ∑ = {0, 1}.

- **Answer:** $(0+1)^3(0+1)^*$.

### 7) Number of Os in string are at least 2 on ∑ = {0, 1}.

- **Answer:** $(0+1)^* 0(0+1)^* 0(0+1)^*$ .

### 8) Length of the string is at most 3 on ∑ = {0, 1}.

- **Answer:** $ε + (0+1) + (0+1)^2 + (0+1)^2 + (0+1)^3$.

### 9) Number of 1s in string are at most 3 on ∑ = {0, 1}.

- **Answer:** $0^* (ε+1) 0^* (ε+1) 0^* (ε+1) 0^*$.

### 10) Length of the string is even on ∑ = {0, 1}.

- **Answer:** $((0+1)^2)^*$.

### 11) Length of the string is even on ∑ = {0, 1}.

- **Answer:** $((0+1)^2)^* (0+1)$.

### 12) Number of 0s in string should be divisible by 3 on ∑ = {0, 1}.

- **Answer:** $(1^* 0 1^* 0 1^* 0)^* + 1^*$.

### 13) All strings should have 000 or 111 as substring on ∑ = {0, 1}.

- **Answer:** $(0+1)^* (000 + 111) (0+1)^*$.

### 14) 4th input symbol from the RHS is 0 on ∑ = {0, 1}.

- **Answer:** $(0+1)^* 0 (0+1)^3$.

### 15) 4th input symbol from the LHS is 0 on ∑ = {0, 1}.

- **Answer:** $(0+1)^3 0 (0+1)^*$.

### 16) Set of all prefix of string "GATE".

- **Answer:** $ε + G + GA + GAT + GATE$.