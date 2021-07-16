---
title: Optimization on Control Flow Graph
description: "Optimization on control flow graph"
nav_order: 1
child_of: Optimization
---

- We hav two typed of optimizations:
    - **Local optimizaion**
    - **Global optimization**

# Local Optimization

- We we optimizations on 
    - **Statements**
        - Common subexpression eliminaiton
        - Copy propogation
        - Constant propogation
        - Constant folding
        - Dead code elimination
        - Strength reduction
    - **Loops**
        - Code motion
        - Loop invariant compilation
        - Loop unrolling
        - Loop functions

There are no algorithm to do optimization. Above are some of the statndard techiniques.
{: .note}

## Common Subexpression Elimination

- To do this, we use directed acyclic graph (DAG) same as we've used in tree tyep intermediate code generation.

### Example

- If we have statement `x = (a*b) + (c*d) / (a*b)`
- Without optimization it would look like this:

{% highlight c %}
t1 = a*b
t2 = c*d
t3 = a*b
t4 = t3/t3
t5 = t1+t4
x = t5
{% endhighlight %}

- After performing optimization with DAG; we will get this optimized TAC:

{% highlight c %}
t1 = a*b
t2 = c*d
t3 = t1 / t2
t4 = t1 + t3
x = t4
{% endhighlight %}

Note that I am not constructed DAG here, you can see how DAG constructed in tree type intermediate code translation.
{: .note}

## Copy Propogation

- Here unnecessary copy operations are reduces.

### Example

- The TAC for expression `x = a + b * c` would be

{% highlight c %}
t1 = b * c
t2 = a + t1 // This is unnecessary copy operation.
x = t2
{% endhighlight %}

- After optimization,

{% highlight c %}
t1 = b * c
x = a + t1
{% endhighlight %}

## Constant Propogation

- Here we elimination unnecessary storage of constants in variables.

### Example

- Suppose we have a *basic block.*

|`pi = 3.14`<br>`r = 5`<br>`area = pi * r * r`|

- Above code will be chaged to:

|`area = 3.14 * 5 * 4`|


## Constant Folding

- In above example, at the end we had *basic block*:

|`area = 3.14 * 5 * 4`|

- The above multiplication operation will take more tine while running (runtime).
- After constant folding, compiler will calculate the value on compile time and this will be changed to the:

|`area = 78.5`|

## Dead Code Elimination

- Here we **eliminate unreachable code.**
- Suppose we have the following code:

{% highlight c %}
i = 0
if (i == 1) {
    a = x + 5;
}
{% endhighlight %}

The code inside the `if` body will never be execited, hence above block will be reduced to 

{% highlight c %}
i = 0
{% endhighlight %}

## Strength Reduction

- Suppose we code:
    - We are using multiplication which is costly operation.
    - We can use addition instead which is not costly operation.

{% highlight c %}
x = 3 * y
{% endhighlight %}

- After optimization it will be changed to this

{% highlight c %}
x = y + y + y
{% endhighlight %}

## Loop Invariant Computation

- Here we remove unnecessary computing oepration which don't have relation with loops.

### Example

- Suppose we code:
    - The value `a/b` is calculated `n` times even it is remaining same.

{% highlight c %}
for (i = 0; i < n; i++) {
    k = i + a/b
}
{% endhighlight %}

- After optimization it will be changed to this

{% highlight c %}
x = a/b
for (i = 0; i < n; i++) {
    k = i + x
}
{% endhighlight %}

## Loop Fusion

### Example

- Suppose we code:
    - The `printf` is getting executed `n*m` times, but we are using multiple loops.

{% highlight c %}
for (i = 0; i <= n; i++) {
    for (j = 0; j <= m; j++) {
        printf("Hi");
    }
}   
{% endhighlight %}

- After optimization it will be changed to this

{% highlight c %}
x = m*n
for (i = 0; i <= x; i++) {
    printf("Hi");
}
{% endhighlight %}

Note that all these optimization are being done inside a *basic block.*
{: .note}

