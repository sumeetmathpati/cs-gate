---
title: Control Statements
description: "Control statements in C programming language."
child_of: "C Programming"
nav_order: 10
---

# Switch Case

- When all cases gets failed; then only defualt case will get executed.
    - Hence we can place defaut anywhere in switch case block.
- Switch statements only work on `int` type variables and literals.
    - Hence we also can use `char`.

# QUestions

## Q1

Find the output.

{% highlight ruby %}
main() {
    int i = -1, j = -1, k = -1, l = 2, m;
    m = ((i++ && j++ && k++) || (l++));
    printf(i, j, k, l, m);
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
0 0 0 2 1
{% endhighlight %}

## Q1

Find the output.

{% highlight ruby %}
main() {
    int i;
    for (i = 1; i <= 25; i++) {
        switch(i) {
            case 1: i += 3
            case 2: i += 5
            case 3: i += 2
            defaut: i += 5
            break;
        }
        printf(i);
    }
}
{% endhighlight %}

**Output:**

{% highlight ruby %}
16 22 28
{% endhighlight %}