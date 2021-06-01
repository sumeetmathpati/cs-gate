---
title: Divide and Conquer
parent: true
nav_order: 4
description: "Divide and conquer"
mathjax: true
---

- In DAC algorithm, we divide the problem into small subproblems.
    - Now we try to solve these subproblems by applying same DAC algorithm on subproblem.
    - With this; we divide subproblems until we get subproblem small enough which we can solve easily.
    - We combine the solved subproblems to get the final output.

# DAC Algorithm

{% highlight bf %}
DAC(arr, start, end) {
    if (small(arr)) {
        return solution(a);
    } else {
        m = divide(arr, start, end);
        s1 = DAC(arr, start, m);
        s2 = DAC(arr, m+1, end);
        s = combine(s1, s2);
        return s;
    }
}
{% endhighlight %}

- The pseudocode given above is abstract and can be used as template for DAC programs.
    - We need to implement `solution`, `divide` and `combine` functions as per our problem.

# Time Complexity

- `divide` Function:
    - A `divide` function may take constant or more time.
    - Let's assume it takes `f1(n)` time.
- `combine` function:
    - A `divide` function may take constant or more time.
    - Let's assume it takes `f2(n)` time. 

# Calculating Time Complexity

- Here, assume we divided problem into two equal parts.
- Each part require `T(n/2)` time.
- Hence total time required will be `2 * T(n/2)`.

The first 2 (from LHS) indicates that we have two parts, and the second 2 indicates that all the parts are equal.
{: .info}

$$
T(n) = \begin{cases}
   n &\text{if n is small}\\
   f_1(n) + 2 \times T(\frac{n}{2}) + f_2(n) &\text{if n is large}
\end{cases}\\
$$
{: .w3-large}

$$
T(n) = 2 \times T(\frac{n}{2}) + f(n)
$$
{: .w3-large}

- We can see that the above recurrence relation can be solved using Master theorem.
- We should note that master theorem makes solving DAC problems very easy.
    - Because master theorem works where division of problem includes.

# DAC Applications 

- Finding maximum and minimum.
- Binary search.
- Finding power of an element.
- Merge Sort.
- Quick sort.
- Selection procedure.
- Finding inversions.
- Stresson's matric multiplication.
- Continuous maximum subarray sum.