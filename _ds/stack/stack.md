---
title: Stack
parent: true
nav_order: 12
description: "Stack data structure."
---

- Stack is a data structure in which we insert and remove elements from same end.
- Stack is a FILO data structure.
- **Top:** It's a variable which points to the topmost element of stack.
    - Deletion and insertion will be done on top.
    - Hence we can also say that.
        - *top* variable points to the element to be deleted.
        - *top* points to the newly inserted element.

# Stack as ADT Using Array

## Get Top Element

- Suppose we have stack

|a|b|c|d|||
|1|2|3|4|5|6|

- In above stack *top = 4.*

## Is Full

- **If top+1 = stackSize; then stack is full.**

***

## Is Empty

- **If top = -1; then stack is empty.**

***

## Push

{% highlight c %}
push(x) {
    if (isFull(stack)) {
        printf("Overflow");
        exit(0);
    } else {
        top++;
        stack[top] = x;
    }
}
{% endhighlight %}

- Time complexity: **O(1)**

***

## Pop

{% highlight c %}
int pop() {
    if (isEmpty(stack)) {
        printf("Underflow");
        exit(0);
    } else {
        tmp = stack[top];
        top--;
        return tmp;
    }
}
{% endhighlight %}

- Time complexity: **O(1)**


# Stack as ADT Using Linked List

## Is Empty

- **If top == NULL; then stack is empty.**

***

## Push

{% highlight c %}
push(x) {
    p = malloc()
    if (p) {
        p->next = top
        top = p
    }
}
{% endhighlight %}

Note the links, newly created node is pointing to the old nodes.
{: .note}

- Time complexity: **O(1)**

***

## Pop

{% highlight c %}
pop() {
    if (isNull(Stack)) {
        printf("Overflow")
    } else {
        tmp = top->data
        tmpP = top
        top = top->next
        free(tmpP)
        return tmp
    }
}
{% endhighlight %}

- Time complexity: **O(1)**

# Life of Element in Stack

- The lifetime of any element $x$ in stack is the (time after push(x) - before pop(x)).
