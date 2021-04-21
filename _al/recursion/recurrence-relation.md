---
title: Recurrence Relation
child_of: Recursion
nav_order: 1
description: "Recursion tutorial. Recurrence relation, recursion tree, subsititution method."
mathjax: true
---

- A recurrence relation is an equation that recursively defines a sequence where the next term is a function of the previous terms.
- For a recursive program, we can write the recurrence relation for many different thigs:
    - Recurrence relation for values (output)
    - Recurrence relation fot time complexity
    - Recurrence relation for number multiplications happening in the program.
    - etc.

# Example

Look at the following recursive code.

{% highlight ruby %}
f (n) {
    if (n <= 1)
        return 1;
    else 
        return n * (n-1)
}
{% endhighlight %}

- The **recurrence relation for the output** will be 
$$
\begin{cases}
   1 &\text{if } n <= 1 \\
   n \times f(n-1) &\text{if } n > 1
\end{cases}
$$

Let time complexity of above recursive code is $T(n)$
- The **recurrence relation for the time complexity** will be 
    - $T(n) = T(n-1) + c$