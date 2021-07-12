---
title: Binary Search Tree
description: "Binary search tree tutorial, BST, Search tree"
child_of: "Trees"
nav_order: 3
---

- In this tree, **key value (node value) is always is smaller than right subtree and greater than left subtree.**
- The inorder traversal of binary search tree gives ascending sequence.
- It will take O(n) time to construct a BST from given preorder or postorder.

# Number of BSTs

Let N be the number of nodes.

- **N = 0**
    - Number of BSTs possitble is 1.
- **N = 1**
    - Number of BSTs possitble is 1.
- **N = 2**
    - Number of BSTs possible are 2
- **N = 3**
    - Number of BSTs possible are 4
- **N = 4**
    - We can have 4 roots {1, 2, 3, 4}
    - When 1 is root 
        - Possible left subtrees: 1 (because we can have 1 tree from 0 nodes).
        - Possible right subtrees: 5 (because we can have 5 trees from 3 nodes).
        - Hence total trees we can have when 1 is root = 5 * 1 = 5
- When 2 is root
    - Possible left subtrees: 1 (because we can have 1 trees from 1 nodes).
    - Possible right subtrees: 2 (because we can have 1 trees from 2 nodes).
    - Hence total trees we can have when 2 is root = 2 * 1 = 2
- When 3 is root
    - Possible left subtrees: 2 (because we can have 2 trees from 2 nodes).
    - Possible right subtrees: 1 (because we can have 1 tree from 1 node).
    - Hence total trees we can have when 2 is root = 1 * 2 = 2
- When 4 is root
    - Possible left subtrees: 5 (because we can have 5 trees from 3 nodes).
    - Possible right subtrees: 1 (because we can have 1 tree from 0 nodes).
    - Hence total trees we can have when 2 is root = 5 * 1 = 5
- **Generalized formula:**
    - [(2n) C n ] / (n+1)



# Operations on BST

## Searching

- Time complexity: **Log(n)**

### Psuedocode

{% highlight c %}
struct node *search(struct node *root, int value) {
    if (root == NULL) 
        reutrn;
    
    if (root->data == value)
        return root;
    
    if (root->data > value)
        return search(root->left, value);
    
    if (root->data < value)
        return search(root->right, value);
}
{% endhighlight %}

***

## Insertion

- Inserted element becomes a leave of the new BST. Insertion is done at the place of `NULL`.    
- **Steps to inset x:**
    1. Create a node with data x.
    2. Find correct place of x in BST.
    3. Insert node with correct linking of nodes.
- Time complexity: 
    - O(1) ... B.C.
    - O(n) ... W.C.
    - O(logn) ...A.C.

***

## Deletion

- We can have 3 cases for deletion:
    - **Deleting node with no child**
    - **Deleting node with one child**
    - **Deleting node with two children**

### Deleting Node With No Child

#### Algorithm

1. Search the node to be deleted, O(n)
2. Set NULL, O(1)

### Deleting Node With One Child

#### Algorithm

1. Search the node to be deleted., O(n)
2. Update pointer i.e. set the pointer from parent to the child of the node to be deleted, O(1)

### Deleting Node With Two Children

- Here after deleting the node, we **place its inorder successor or predecessor in its place.**

#### Algorithm

1. Search the node to be deleted, O(n)
2. Search the predecessor or successor, O(n).
3. Replace with inorder successor/predecessor, O(1)
3. Delete the inorder successor/predecessor, O(1)

# Questions

## Q1

How may BSTs are possible with 15 notes in such a way that 6 is a root and 10 is root for right side tree.

**Solution:** 8820

## Q2

Given a set with *n* distinct elements an unlabelled binary tree. How many ways are there to keep data from set into that unlabelled binary tree so that it becomes BST

**Solution:** 1

Note that, according to above problem and solution if we have 2 unlabelled binary trees, 2 different BSTs are possible. Hence we can say that number of **unlaballed binary trees = number of BSTs.**
{: .note}

## Q3

Given a set with *n* distinct elements an unlabelled binary tree. How many ways are there to keep data from set into that unlabelled binary tree so that it becomes BT

**Solution:** n!

## Q4

n = 9 (1, 2, 3...9). How many BSTs possible such that in all these BST height is 8

**Solution:** 256

## Q5

The time required to find the maximum element in BST, BT, AVL tree, and minheap.

**Solution:**

||BC|WC|AV|
|-|-|-|-|
|BST|1|n|logn|
|BT|n|n|n|
|AVL|logn|logn|logn|
|Minheap|n|n|n|

## Q6

The time required to find the element x which is present in BST, BT, AVL tree, and minheap.

**Solution:**

||BC|WC|AV|
|-|-|-|-|
|BST|1|n|logn|
|BT|1|n|n|
|AVL|1|logn|logn|
|Minheap|1|n|n|

## Q7

The time required to check if the element x is present in BST, BT, AVL tree, and minheap or not.

**Solution:**

||BC|WC|AV|
|-|-|-|-|
|BST|1|n|logn|
|BT|n|n|n|
|AVL|logn|logn|logn|
|Minheap|1|n|n| 