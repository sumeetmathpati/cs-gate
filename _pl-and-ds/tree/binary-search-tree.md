---
title: Binary Search Tree
description: "Binary search tree tutorial."
child_of: "Trees"
nav_order: 3
---

- In this tree, **key value (node value) is always is smaller than right subtree and greater than left subtree.**

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

- Insertion can be done at leaf node only.

***

## Deletion

- We can have 3 cases for deletion:
    - **Deleting node with no child**
    - **Deleting node with one child**
    - **Deleting node with two children**

### Deleting Node With No Child

#### Algorithm

- Search the node, O(log (n))
- Set NULL, O(1)

### Deleting Node With One Child

#### Algorithm

- Search the node, O(log (n))
- Update pointer i.e. set the pointer from parent to the child of the node to be deleted, O(1)

### Deleting Node With Two Children

- Here after deleting the node, we **place its inorder successor or predecessor in its place.**

#### Algorithm

- Replace with inorder successor/predecessor, O(log (n))
- Delete the inorder successor/predecessor, O(log (n))