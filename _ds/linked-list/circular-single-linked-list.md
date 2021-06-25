---
title: Circular Singly Linked List
child_of: Linked List
nav_order: 1
description: "Linked List"
---

- In a SLL's last node if we store the address of first node; it's a circular singly linked list.
- Here we can go back to the previous node, but it will take more time (O(n)).

# Questions

## Q1

Write a C program to add the node with data *x* at the end of singly linked list.

**Solution:**

{% highlight c %}
struct node *addAtEnd(struct node *s, int x) {
    if (s) {

        // Only one node in the LL.
        if (s->next == s) {
            struct node *newNode = (struct node*)malloc(sizeof(struct node));
            newNode->data = x;
            newNode->next = s;
            s->next = newNode;
            return s;
        } else {

            struct node *tmpS = s->next;
            while (tmpS->next != s) {
                tmpS = tmpS->next;
            }
            struct node *newNode = (struct node*)malloc(sizeof(struct node));
            newNode->data = x;
            newNode->next = tmpS->next;
            tmpS->next = newNode;
            return s;
        } 
    }
    return s;
}
{% endhighlight %}

## Q2

Write a C program to delete the first node of the circular singly linked list.

**Solution:**

- We need to go to the last node to inform it that point to the next node of the starting node.
- T.C. = O(n).