---
title: Queue
parent: true
nav_order: 11
description: "Queue data structure."
---

- Queue is a data structure, in which we can instert element from one side and can remove them from other side.

|<--Remove|A|B|C|D|E|<--Enter|
||0 (front)|1|2|3|4 (rear)||

- Hence we can also say that queue is a FIFO data structure.

# Front and Rear

- In above diagram, index 0 is front and index 4 is rear.
    - **front:** is a variable which has location of a element to be deleted.
    - **rear:** is a variable which has location where newly inserted (latest) elemet is present.

## Examples

|a|b|c||||
|0|1|2|3|4|5|

- In above diagram, front=0, rear=2

||b|c||||
|0|1|2|3|4|5|

- In above diagram, front=1, rear=2

||b|c|d|||
|0|1|2|3|4|5|

- In above diagram, front=1, rear=3

||||d|||
|0|1|2|3|4|5|

- In above diagram, front=3, rear=3

***

- When front=read; then there is **only one element** in the queue.
- When front=rear=-1; then there is **no element present** in the queue.
    - If one of them (front and read) is -1; then other also will be -1.
{: .note}

# Queue as ADT

## Enqueue

- Input for enqueue operation is some element *x*.
- Output is a queue with element *x* inserted.

***

## Dequeue

# Implementing Queue Using Array

## Enqueue

{% highlight c %}
enqueue(x) {
    if (!queue.isFull) {
        if (front == -1) {
            front = rear = 0;
        } else {
            rear++;            
        }
        queue[rear] = x;
    } else {
        printf("Oveflow!");
    }
}
{% endhighlight %}

## IsFull 

- To check if the queue implemented with array is full or not; we can check `if (rear+1 == Size of queue)`.
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
            front++;
        }

        return tmp;
    } elsle {
        printf("Underflow!");
        return -1;
    }
}
{% endhighlight %}

## IsEmpty

- To check if the queue is empty or not; we can check `if (rear == -1)` or `if (front == -1)`.
    - If yes; then queue is empty.
    - If not; then queue is not empty.

Time complexity of all functions `enqueue`, `dequeue`, `isEmpty` and `isNull` is O(1).
{: .note}

# Implementing Queue Using Stack

- Queue and stack are oppposite data structures, i.e. queue is FIFO and stack is FILO.
- As they both have opposite behavious, **we use 2 stacks.**

## Enqueue

- **Steps:** `enqueue(x)`
    1. `push(x)` of stack1.
- **Time complexity:** O(1)

### Example

- `enqueue(a)`
- `enqueue(b)`
- `enqueue(c)`
- `enqueue(d)`

|Stack1|Stack2|
|-|-|
|||
|||
|e||
|d||
|c||
|b||
|a||


***

## Dequeue

- **Steps:** `dequeue()`
    1. If *stack2* == empty
        - Move all the elements from *stack1* to the *stack2* (so that the element which was first inserted will be on top of the second stack).
    2. Pop elements you want from *stack2*.
- **Time complexity:** 
    - O(n) ... Worst case
    - O(1) ... Best and average case

### Example

- `dequeue()`
- `dequeue()`
- `enqueue(f)`
- `enqueue(g)`

|Stack1|Stack2|
|-|-|
|||
|||
|||
|||
||c|
|g|d|
|f|e|

- `dequeue()`
- `dequeue()`
- `dequeue()`
- `dequeue()`

|Stack1|Stack2|
|-|-|
|||
|||
|||
|||
|||
|||
||f|

In this case `dequeue` is more constly (O(n)) than `enqueue` (O(1)). But we reverse the implementation and make `enqueue` operation constly (O(n)) and `dequeue` in O(1).
{: .note}

# Life of Element in Queue

- The lifetime of any element $x$ in queue is the (time after enqueue(x) - before dequeue(x)).
- Unlike stack (you will see in stack chapter), lifetime of every element in queue is same.