---
title: Recognizing CFL 
description: "Context free languages."
nav_order: 4
child_of: CFL & PDA
mathjax: true
---

Recognize the languages below are CFL or not.

If a non-cfl have epsilon string, then it's a REL else it's CSL.
{: .note}

### 1) $L = \\{ a^nb^nc^n | n <= 10 \\}$

- **Answer:** Languages is Regular and hence CFL.

### 2) $L = \\{ a^nb^mc^m | n != m \\}$

- **Answer:** Languages is NOT CFL.

### 3) $L = \\{ a^nb^mc^n | n > m, (n,m > 10000) \\}$

- **Answer:** Languages is Regular and hence CFL.

### 4) $L = \\{ a^nb^m | n - m = 4 \\}$

- **Answer:** Languages is CFL.

### 5) $L = \\{ a^nb^m | n/m = 4 \\}$

- **Answer:** Languages is CFL.

### 6) $L = \\{ a^nb^m | n = 2m + 1 \\}$

- **Answer:** Languages is CFL.

### 7) $L = \\{ a^nb^m | n != m \\}$

- **Answer:** Languages is CFL.

### 8) $L = \\{ a^nb^m | n = m^2 \\}$

- **Answer:** Languages is NOT CFL.

### 9) $L = \\{ a^nb^m | n = m^2 \\}$

- **Answer:** Languages is NOT CFL.

### 10) $L = \\{ a^nb^m | n <= m^2 \\}$

- **Answer:** Languages is NOT CFL.

### 11) $L = \\{ a^{n!}b^{m!} | n > 1 \\}$

- **Answer:** Languages is NOT CFL.

### 12) $L = \\{ a^nb^mc^{m+n} | n, m > 1 \\}$

- **Answer:** Languages is CFL.

### 13) $L = \\{ a^nb^{n+m}c^{m+n} | n, m > 1 \\}$

- **Answer:** Languages is NOT CFL.

### 14) $L = \\{ a^{n^2}b^{m^3}c^{k^4} | n, m, k > 1 \\}$

- **Answer:** Languages is NOT CFL. 

### 15) $L = \\{ a^{3n}b^{5k}c^{25l} | n, k, l > 1 \\}$

- **Answer:** Languages is Regular and hence CFL. 

### 16) $L = \\{ a^ib^jc^k | j = i + 3k \\}$

- **Answer:** Languages is CFL.

### 17) $L = \\{ a^ib^jc^k | i > j (or) i < k \\}$

- **Answer:** Languages is CFL (but NOT DCFL).

### 18) $L = \\{ a^ib^jc^k | i > j > k \\}$

- **Answer:** Languages is NOT CFL.

### 19) $L = \\{ a^ib^jc^k | j = max(i, k) \\}$

- **Answer:** Languages is NOT CFL.

### 20) $L = \\{ a^ib^jc^k | j = i^2 + k^2 \\}$

- **Answer:** Languages is NOT CFL.

### 21) $L = \\{ a^ib^jc^kd^l | i = l, j = k \\}$

- **Answer:** Languages is CFL.

### 22) $L = \\{ a^ib^jc^kd^l | i = k, j = l \\}$

- **Answer:** Languages is NOT CFL.

### 23) $L = \\{ a^ib^jc^kd^l | i = k (or) j = l \\}$

- **Answer:** Languages is CFL (but NOT DCFL).

### 24) $L = \\{ a^ib^jc^kd^l | i = 2k (or) j = 5l \\}$

- **Answer:** Languages is CFL (but NOT DCFL).

### 25) $L = \\{ a^ib^jc^kd^l | i+j = k+l \\}$

- **Answer:** Languages is CFL.

### 25) $L = \\{ a^ib^jc^kd^l | i+j = k+l \\}$

- **Answer:** Languages is CFL.

### 26) $L = \\{ a^ib^jc^kd^l | i = 4l, j = 3k \\}$

- **Answer:** Languages is CFL.

### 27) $L = \\{ a^ib^jc^kd^l | i - k = l - j \\}$

- **Answer:** Languages is CFL.

### 28) $L = \\{ a^ib^j | (i + j) mod 5 = 0 \\}$

- **Answer:** Languages is Regular and hence CFL.

### 29) $L = \\{ a^ \\{ 2^n \\} | n >= 1 \\}$

- **Answer:** Languages is NOT CFL.

### 30) $L = \\{ a^\\{ n^2 \\}| n >= 1 \\}$

- **Answer:** Languages is NOT CFL.

### 31) $L = \\{ a^p| p \ is \ a \ prime \ number. \\}$

- **Answer:** Languages is NOT CFL.

### 32) $L = \\{ 1^{2n+1}| n >= 1 \\}$

- **Answer:** Languages is Regualar and hence CFL.

### 33) $L = \\{ Q^k | k \ is \ odd \ number. \\}$

- **Answer:** Languages is Regualar and hence CFL.

**Note:**  If langugae over one symbols regular; then it's also a CFL.
{: .note}

### 34) $L = \\{ wxw | w \in \\{a, b\\}^* \\}$

- **Answer:** Languages is NOT CFL.

### 35) $L = \\{ wxw | w, x \in \\{a, b\\}^* \\}$

- **Answer:** Languages is Regular and hence CFL.

### 36) $L = \\{ ww^rx | w, x \in \\{a, b\\}^* \\}$

- **Answer:** Languages is CFL.

### 37) $L = \\{ \sum ^* - \\{ ww | w \in \\{a, b\\}^* \\} \\}$

- **Answer:** Languages is CFL.

### 38) $L = \\{ \sum ^* - \\{ wcw | w \in \\{a, b\\}^* \\} \\}$

- **Answer:** Languages is CFL.

**Note:**  Languages `ww` and `wcw` are not CFL but their complement is CFL.
{: .note}

### 39) $L = \\{ ww^Rw | w \in \\{ a, b \\}^* \\}$

- **Answer:** Languages is NOT CFL.

### 40) $L = \\{ ww^Rww^R | w \in \\{ a, b \\}^* \\}$

- **Answer:** Languages is NOT CFL.

### 41) $L = \\{ wwww | w \in \\{ a, b \\} \\}$

- **Answer:** Languages is Regualr and hence CFL.

### 42) $L = \\{ x | x \in \\{ a, b, c \\}^*, n_a = n_b = n_c \\}$

- **Answer:** Languages is NOT CFL.

### 43) $L = \\{ x | x \in \\{ a, b, c \\}^*, n_b = n_a + n_c \\}$

- **Answer:** Languages is CFL.

### 44) $L = \\{ x | x \in \\{ a, b, c \\}^*, n_a = n_b^2 + n_c^2 \\}$

- **Answer:** Languages is NOT CFL.

### 45) $L = \\{ x | x \in \\{ a, b \\}^*, n_a mod \ 5 = 0, n^b mod \ 4 = 0 \\}$

- **Answer:** Languages is Regular and hence CFL.

### 46) $L = \\{ a^nb^nca^mb^m | n, m >= 1 \\}$

- **Answer:** Languages is CFL.

### 47) $L = \\{ a^nb^mc^k | n \ne m (or) m \ne k \\}$

- **Answer:** Languages is CFL.

### 48) Set of palindromes of Hindi language.

- **Answer:** Languages is CFL.

### 49) Set of all balanced paranthesis.

- **Answer:** Languages is CFL.