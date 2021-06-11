---
title: Linked List
parent: true
nav_order: 10
description: "Linked List"
---

# Questions

## Q1

Write the C program to find the address of second last node in given linked list.

{% highlight c %}
struct node* getSecondAddr(struct node *head) {
    if (head == NULL) {
        return head;
    }
    
    struct node *result;
    result = head;
    while (result->next->next != NULL) {
        result = result->next;
    }
    return result;
}
{% endhighlight %}

## Q2

Find the output.

Assume we have an linked list.

![Q2]({{ site.baseurl }}/assets/images/ds/ll-q2.png)

{% highlight c %}
struct node *p;
p = s->next->next->next->next->next;
s->next->next->next=p->next->next;
p->next->next->next = s->next->next->next;
printf("%d", p->next->next->next->next->next->next->data) ;
{% endhighlight %}

**Output:**

h

***

## Q3

Find the output.

Assume we have an linked list.

![Q3]({{ site.baseurl }}/assets/images/ds/ll-q2.png)

{% highlight c %}
struct node *p;
p = s->next->next->next->next;
p->next->next->next->next = s->next->next;
p = s->next->next->next->next->next->next->next
s = p->next->next->next->next->next->next->next;
printf("%d", s->next->next->next->next->next->next->data) ;
{% endhighlight %}

**Output:**

c

***

## Q4

The given function will always return 1 on what king of SLL?
Assume we have an linked list.

{% highlight c %}
f() {
    return ((p == NULL) || (p->next == NULL) || ((p->data <= p->next->data) && f(p->next)));
}
{% endhighlight %}

**Options:**

A) Empty SLL
B) SLL with 1 element
C) Data is in ascending order
D) Data is in descending order

**Output:**

C

***

## Q5

Write a C program to insert a node with data *x* at the end of the SLL.

**Solution:**

{% highlight c %}
struct node* insertAtEnd(struct node *head, int x) {
    struct node *tmpHead = head;
    struct node *tmp;

    // Create new node.
    tmp = (struct node*)malloc(sizeof(struct node));
    if (tmp == NULL) {
        printf("Memory over.");
        exit(1);
    }

    // Store the data in the new node.
    tmp->data = x;
    tmp->next = NULL; 

    if (head == NULL) {
        head = tmp;
    } else {
        // Go to the last node
        while (tmpHead->next != null) {
            tmpHead = tmpHead->next;
        }

        // Add the new node at the end.
        tmpHead->next = tmp;
    }

    return head;
}
{% endhighlight %}

## Q6

Write a C program to insert a node with data *x* after node with data *y*.

**Solution:**

{% highlight c %}
struct node* insertXBeforeY(struct node *head, int x, int y) {
    struct node *tmpHead = head;

    if (head == NULL) {
        return head; 
    } else {
        // Go to the node before data y.
        while (tmpHead->next->data != y && tmpHead->next != null) {
            tmpHead = tmpHead->next;
        }

        if (tmpHead->next->data == y) {
            struct node *tmp;

            // Create new node.
            tmp = (struct node*)malloc(sizeof(struct node));
            if (tmp == NULL) {
                printf("Memory over.");
                exit(1);
            }

            // Store the data in the new node.
            tmp->data = x;
            tmp->next = NULL; 

            // Add the new node at the end.
            tmp->next = tempHead->next;
            tmpHead->next = tmp;
        }
    }
    return head;
}
{% endhighlight %}

## Q7

Write a C program to delete last node of SLL.

**Solution:**

{% highlight c %}
struct node* deleteLastNode(struct node *head) {

    struct node *tmpHead = head;

    // If LL is empty.
    if (head == NULL) {
        return NULL;
    }

    // If LL has only one node.
    if(tmpHead->next == NULL) {
        free(head);
        tmpHead = NULL;
        return head;
    }

    while (tmpHead->next->next != NULL) {
        tmpHead = tmpHead->next;
    }

    struct node *tmp = tmpHead->next;
    tmpHead->next = NULL;
    free(tmp);

    return head;
}
{% endhighlight %}

## Q8

Write a C program to delete last node of SLL.

**Solution:**

{% highlight c %}
struct node* deleteData(struct node *head, int x) {

    struct node *tmpHead = head;

    // If LL is empty.
    if (head == NULL) {
        return NULL;
    }

    // If LL has only one node.
    if(head->data == x) {
        if (head->next) {
            struct node *tmp = head;
            head = head->next;
            free(tmp);
            return head;
        }
    }

    while (tmpHead->next->data != x && != tmpHead->next != NULL) {
        tmpHead = tmpHead->next;
    }

    if (tmpHead->next->data == x) {
        struct node tmp* tempHead->next;
        tmpHead->next = tmpHead->next->next;
        free(tmp);
    }

    return head;
}
{% endhighlight %}

## Q9

Write a C program to get the address of the middle node.

**Solution:**

{% highlight c %}
struct node* deleteData(struct node *head, int x) {

    struct node *tmpHead = head;

    // If LL is empty.
    if (head == NULL) {
        return NULL;
    }

    while(tmpHead->next && tmpHead->next->next) {
        tmpHead = tmpHead->next->next;
        head = head->next;
    }

    return head;
}
{% endhighlight %}


## Q10

Write a C program perform binary search on linked list.

**Solution:**

{% highlight c %}
BC(struct node *s, int x) {
    if (s->next == NULL) {
        if (s->data == x)
            return s;
        else
            return NUll;
    } else {
        m = mid(s); //Function in previous example.
        if (m->data == x) 
            return m;
        else {
            if (x < m->data) {
                m->next = NULL;
                BS(s, x);
            } else {
                BS(m-next, x);
            }
        }
    }
}
{% endhighlight %}

- Reccurence relation (WC): **T(n) = n + T(n/2)**
- Time complexity: 
    - BC: O(n).
    - AC: O(n).
    - WC: O(n).

Therefore, linear search is better for linked lists.
{: .info}