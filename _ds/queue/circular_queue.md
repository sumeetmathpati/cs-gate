---
title: Circular Queue
child_of: Queue
nav_order: 1
description: "Circular queue."
---

- The problem with the simple queue is; even if we delete the elements and free the spaces, we can't use them because the `rear` variable can't access those indices.
    - This is cause we are checking if the queue is full with the condition `if (rear+1 == Size of queue)` which do not consider if there is space available on the front side of the queue.
    - Hence in simple queue, there is a space wastage when we delete elements.
- To solve this problem we use circular queue.

# Implementing Circular Queue Using Array

- The code below is sued to impleent circular queue using array.
- The `QZISE` is a size of the queue (staring from 1).

## Enqueue

{% highlight c %}
enqueue(x) {
    if (!queue.isFull) {
        if (front == -1) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % QSIZE;            
        }
        queue[rear] = x;
    } else {
        printf("Oveflow!");
    }
}
{% endhighlight %}



## IsFull 

- To check if the queue implemented with array is full or not; we can check `if ((rear+1) % QSIZE == front)`.
    - If yes; then queue is full.
    - If not; then queue is not full.

## Dequeue

{% highlight c %}
dequeue() {
    if (!queue.isEmpty()) {

        // Store the element to be deleted in 
        // temporary variable.
        tmp = queue[front];

        // If only one element is present in queue.
        if (rear == front) {
            front = rear = -1;
        } else {
            front = (front+1) % QSIZE;
        }

        return tmp;
    } elsle {
        printf("Underflow!");
        return -1;
    }
}
{% endhighlight %}

## IsEmpty

- To check if the circular queue is empty or not; we can check `if (rear == -1)` or `if (front == -1)`.
    - If yes; then queue is empty.
    - If not; then queue is not empty.

We can see that the only change in simple/linear queue and the circular queue is, while incrementing `front` and `rear` we just mod it with the size of the circular queue.