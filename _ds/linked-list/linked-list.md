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

The given function will always return 1 on what kind of SLL?
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
        while (tmpHead->next != null && tmpHead->next->data != y) {
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

### Method 1

{% highlight c %}
struct node* midAddress(struct node *head, int x) {

    struct node *tmpHead = head;
    int c = 0;

    while (tmpHead != NULL) {
        tmpHead = tmpHead->next;
        c++;
    }

    c = ceil(c/2);

    while(c!=1) {
        head = head->next;
        c--;
    }

    return head;
}
{% endhighlight %}

### Method 2

{% highlight c %}
struct node* midAddress(struct node *head, int x) {

    struct node *p = head;
    while(p != NULL && p->next != NULL && p->next->next != NULL) {
        p = p->next->next;
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

Therefore, linear search is better forsingly  linked lists.
{: .info}

## Q11

Write a C program to reverse a given singly linked list.

**Solution:**

{% highlight c %}
reverse(s) {
    struct node *p, *q = NULL;
    while(s != NULL) {
        p = q;
        q = s;
        s = s->next;
        q->next = p;
    }
    return q;
}

{% endhighlight %}

- Time complexity: O(n) every case.

## Q12

Write a C program to find if there is a cycle in a SLL.

**Solution:**

### Algorithm 1

- Use flag in all the nodes.
- Start visiting all the nodes.
    - After visiting check the flag value.
        - If it's 0; make it 1.
        - If it's already 1; cycle is there.

- Time complexity: O(n) every case.
- Space complexity: O(n) every case.

### Algorithm 2

- Take two pointers p and q, both pointing at start of SLL.
- p will increment by 1 and q will increment by 2.
- They both should never meet if there is no loop in a SLL; if they meet, then there is a cycle in SLL.

- Time complexity: O(n) every case.
- Space complexity: O(1) every case.


## Q13

Perform Merge algorithm on linked list.

**Solution:**

- BC: min(m, n)
- WC, AC: O(m+n)

## Q14

Perform Merge sort on linked list.

**Solution:**

{% highlight c %}
mergeSort(s) {
    if (s->next == NULL) {
        return s;
    } else {
        m = mid (s) // O(n)
        p = m->next;
        m->next = NULL;

        s1 = mergeSort(s); // T(n/1)
        s2 = mergeSort(p);  // T(n/2)
        s = merge(s1, s1) // O(n)
    }

    return s;
}

{% endhighlight %}

- T(n) = 2T(n/2) + 2n
- = 2T(n/2) + n
- = n * Log(n); ... (For every case)

# Drawbacks of SLL

- We cannot go back because there is no back link.
- The next pointer in the last node is NULL i.e. we are not using it.