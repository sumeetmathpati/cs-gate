---
title: Priority Queue
child_of: Queue
nav_order: 2
description: "Priority queue."
---

- In priority queue *dequeue* will delete only the element with highest priority.
- We have two types of priority queues.
    - **Ascending priority queue:** Minimum element has highest priority.
    - **Descending priority queue:** Maximum element has highest priority.
- In fact, the name *queue* is misleading becaue *priority queue* does not follow queue property.
- Here we shall stuy about *ascending priority queue** but the same logic can be applied to the *descending priority queue** with reversing.

# Implementation Using Unsorted Array

## Enqueue

- **Steps:** `enqueue(x)`
    1. Variables i, j = -1
    2. If queue is empty
        - i = j = 0
        - queue[j] = x
        - return
    3. j++
    4. queue[j] = x

- **Time complexity: O(1)**

Note that, `x` follows first element and `j` points to the last element.

## Dequeue

- **Steps:** `dequeue()`
    1. Find index of minimum element *m*.
    2. tmp = queue[m]
    3. queue[m] = queue[j]
    4. j--
    5. return tmp
- **Time complexity: O(n)**

# Implementation Using Sorted Array

## Enqueue

{% highlight c %}
enqueue(x)
    - Insert into queue.
    - Check if it's sorted.
        - If not, move it to correct place.

{% endhighlight %}

- **Time complexity:** 
    - Best case: O(1)
    - Worst case: O(n)

## Dequeue

{% highlight c %}
i = 0

dequeue(x)
    - tmp = queue[i]
    - i++
    - return tmp
{% endhighlight %}

- **Time complexity:**
    - Best case: O(1)

# Implementation Using Minheap

## Enqueue

- **Time complexity: O(log n)**

## Dequeue

- **Time complexity: O(log n)**
