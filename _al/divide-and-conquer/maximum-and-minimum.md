---
title: Maximum Minimum
child_of: Divide and Conquer
nav_order: 1
description: "Maximum and minimum"
mathjax: true
---

- In this problem, we have to **find the maximum and minimum element in an array.**
- **Input:** An array of *n* elements.
- **Output:** Find the minimum and maximum element in an array.
- **Small problem:** The problem is small when
    - There are 2 elements in an array.
    - There is 1 element in an array.

# Pseudocode

{% highlight bf %}
DACMaxMin(arr, i, j) {
    if (i == j) {
        min = max = a[i];
        return (min, max);
    } 
    if (i = j - 1) {
        if (a[i] > a[j]) {
            min = a[j];
            max = a[i];
        } else {
            min = a[i];
            max = a[j];
        }
        return (min, max);
    } else {
        min = floor((i+j) / 2);
        (max1, min2) = DACMaxMin(a, i, mid);
        (max2, min1) = DACMaxMin(a, mid+1, j);

        if (max1 > max2) 
            max = max1
        else
            max = max2
        
        if (min1 < min2) 
            min = min1
        else
            min = min2
        
        return (min, max)
    }
}
{% endhighlight %}

# Example

- **Array**

|50|70|20|60|30|180|10|23|
|1|2|3|4|5|6|7|8|

- **Recursive Tree**

![Recursive Min Max]({{ site.baseurl }}/assets/images/al/recursive-min-max.png)

- **Stack space:**
    - Number of levels in a tree.
    - 3 (In this case).

## Notes

- **Why 3 levels?**
    - Because we have 8 elements.
    - We divide the problem recursively in 2 parts.
    - Therefore $log_2 8 = 3$ levels.
- **Why it formed binary tree?**
    - We've done recursive call twice.

# Time Complexity

- Time complexity for
    - Small problem = constant
    - Divide = constant
    - Combine = constant
$$
T(n) = \begin{cases}
   c &\text{if n <= 2}\\
   c + 2T(\frac{n}{2} + c &\text{if n > 2}
\end{cases}\\
$$

- $T(n) =  \theta (n) ... \text{solve using MT}$
{: .w3-large}

# Number of Comparisons

$$
T(n) = \begin{cases}
   0 &\text{if n = 1}\\
   1 &\text{if n = 2}\\
   0 + 2 T(n/2) + 2 &\text{if n > 2}
\end{cases}\\
$$
{: .w3-large}

- $= \frac{3n}{2} - 2 ... solve using substitution.$