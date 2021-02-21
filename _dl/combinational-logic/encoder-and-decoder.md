---
title:  "Encoders and Decoders"
description: "Encoders and decoders tutorial"
child_of: Combinational Logic
nav_order: 5
mathjax: true
---

- In digital devices information is represented in binary codes (like BCD codes of Excess three codes).
- $n$ bits are capable to represent $2^n$ distinct elements of information.

# Decoder

- The decoder is a combinational circuit which converts binary information from $n$ input lines to $2^n$ output lines.
- Each output represent one of the minterm of n input variables.
- If the $n$ bit information has unused or don't care conbinations, the decoder output will have fewer output lines than $2^n$.
    - Like BCD coded information don't use all the combinations. It only uses 10 out of 16 combinations.
- For understanding purpose, we shall study 3-to-8 decoder.

## 3 to 8 Decoder

- Here 3 inputs are decoded into 8 outputs.
- Each output represent one of the minterm of $n$ input variables.
- We have both normal and complemented inputs.
- The application of this would be binary-to-octal convertsion.
    - The input variables may represent the binary number.
    - Output will then represent the eight digits in the octal number system.

![4 to 8 Decoder]({{ site.baseurl }}/assets/images/dl-4-to-8-decoder.png)

- The truth table of above circuit will be:


