---
title: Multiple Stacks in Single Array
nav_order: 1
description: "Multiple stacks in single array."
child_of: Stack
---

- Here we have to implement $k$ stacks with array of size $n$.
    - $k = n/m$ where $m$ is size of each stack.
- Each stack inside array will have it's own $top$.

# Operations

## Initial Top

- It's a top value when stack is empty.
- Initial top of $i^{th}$ stack is = ITOS =  $T_i = i \times (n/m) - 1$

{% highlight c %}
// Check if stack i is full of not.
int iots_i(stackIi) {

    return (i * n/m) - 1;
}
{% endhighlight %}

## Is Full

{% highlight c %}
// Check if stack i is full of not.
isFull(stackIi) {

    // ITOS_n is initial top of stack of stack n.
    if (Ti == ITOS_j) {
        return 1;
    } 

    return 0;
}
{% endhighlight %}

## Push

{% highlight c %}
// Push element x into stack i.
push(x, i) {

    if (isFull(i)) {
        // ith stack overflow.
        printf("Overflow");
        exit(0);
    } else {
        Ti**;
        stack[Ti] = x;
    }
}
{% endhighlight %}

## Pop

{% highlight c %}
// Pop element from ith stack.
pop(i) {

    if (Ti == iots_i(i)) {
        // ith stack underflow.
        printf("Underflow");
        exit(0);
    } else {
        tmp = stacki[Ti];
        Ti--;
        return tmp;
    }
}
{% endhighlight %}