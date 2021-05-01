---
title: CFG to PDA
description: "CFG to PDA."
nav_order: 3
child_of: CFL & PDA
mathjax: true
---

# Algorithm

1. First (on the state q0) do not read any symbol and push the strating (non-terminal) symbol in the stack and change the 
state to q1.
    - $\delta(q_0, \epsilon, Z_0) \vdash (q_1, SZ_0)$
2. Step 2
    - If the non-terminal is on top; replace it with it's RHS.
    - If terminal is on top; pop it.
3. When there is Z0 on top of the stack; go to final state (accepting by final state).
    - $\delta(q_1, \epsilon, Z_0) \vdash (q_f, Z_0)$

The PDA generated with this algorithm may or may not be DCFL (even if the language may be DCFL).
{: .note}

## Example

### Example 1

- We have CFG:

{% highlight bash %}
{
    S --> AB
    A --> a
    B --> b
}
{% endhighlight %}

- It's equivalent PDA would be:
    - $\delta(q_0, \epsilon, Z_0) \vdash (q_1, SZ_0)$
    - $\delta(q_1, \epsilon, S) \vdash (q_1, AB)$
    - $\delta(q_1, \epsilon, A) \vdash (q_1, a)$
    - $\delta(q_1, \epsilon, B) \vdash (q_1, b)$
    - $\delta(q_1, a, a) \vdash (q_1, \epsilon)$
    - $\delta(q_1, b, b) \vdash (q_1, \epsilon)$
    - $\delta(q_1, \epsilon, Z_0) \vdash (q_f, Z_0)$

### Example 2

- We have CFG:

{% highlight bash %}
{
    S --> aSb | ab
}
{% endhighlight %}

- It's equivalent PDA would be:
    - $\delta(q_0, \epsilon, Z_0) \vdash (q_1, SZ_0)$
    - $\delta(q_1, \epsilon, S) \vdash (q_1, aSb) or (q_1, ab)$
    - $\delta(q_1, a, a) \vdash (q_1, \epsilon)$
    - $\delta(q_1, b, b) \vdash (q_1, \epsilon)$
    - $\delta(q_1, \epsilon, Z_0) \vdash (q_f, Z_0)$
