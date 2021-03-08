---
title: AVL Tree
description: "AVL tree tutorial."
child_of: "Trees"
nav_order: 4
---

- This tree is proposed by three scientists **A**delson, **V**elsky, and **L**andis, and hence called AVL tree.
- AVL tree is
    - **Binary tree**
    - **Binary seach tree**
    - **Height balanced tree**
- Height balance tree is a tree whose balance factor is in {-1, 0, 1}.
- **Balance factor =** Number of levels in left subtree - Number of levels in right subtree
- See the examples shown below, the balance factors is shown besides the nodes.
    - ![AVL Balanced Tree]({{ site.baseurl }}/assets/images/plds-balanced-tree.png)
- **Deletion** in AVl tree is same as BST.
    - After deleting, balance factor is recalculated and tree is balanceed again if it is not balanced (balancing you will see below) after deletion.

# Balancing AVL Tree

- If the tree is not balanced, to make it AVL tree, we have to balance it apropriately using different **rotations.**
    - **But it has to be a BST first.**

## Problems

### LL Problem

- When a node is inserted into the left subtree of the left subtree, it creates unbalanced tree.
- We solve this problem and make a balanced AVL tree by **right rotation.**

### RR Problem

- When a node is inserted into the right subtree of the right subtree, it creates unbalanced tree.
- We solve this problem and make a balanced AVL tree by **left rotation.**

### LR Problem

- When a node is inserted into the right subtree of the left subtree, it creates unbalanced tree.
- We solve this problem and make a balanced AVL tree by **left-right rotation.**

### RL Problem

- When a node is inserted into the left subtree of the right subtree, it creates unbalanced tree.
- We solve this problem and make a balanced AVL tree by **right-left rotation.**

***

## Solution

- We knoe that these trees may be unbalanced but **they are search trees.**
- To fix all the above problems we just have two intensions: **Make height balance keeping search tree maintained.**
- We don't have to remember all the rotations, just do the following:
    - **Bring the median ternodem at top (root),**
    - **Bring least node at the left side of root,** and
    - **Bring the largest node at the right side of the root.**

Out of three nodes, lest node is node with smallest value, median node is node with middle value and largest node is node with largest value.
{: .note}

 - See the example below.
    - We can see that no matter what is problem is, we always bring the median to the node, lest element to the left of the node and the greatest element to the right side of the node.

![L Rotation and R Rotation]({{ site.baseurl }}/assets/images/rotations.png)

- While solving large tree
    - **Calculate the balance factor of all nodes.**
    - **Scan from down and see where the first node where the problem is i.e. balance factor is nor in {-1, 0, 1}.**
    - **Apply the rotation according to the problem.**
- See the example below.
    - Node '10' had the balance factor 2 due to LL problem.
    - We solved the problem using R rotation. 
      

# Time Complexity

- In AVL tree deletion, insertion and searching can be done in **O(log(n))** time, where n is number of nodes.

# Examples

## Q1

What will be the resultant AVL tree if we insert 10, 6, 11, 12, 1, 7, 0, 2, 3 in that order.

While solving, inesrt elements as BST and check balance factor each time. Check from bottom, if tree is not balanced; balance with applying rotations.
{: .note}

<div class="w3-card w3-round">
<div class="w3-white">
<button onclick="toggleAccordion('avl-q1')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i
        class="fa fa-circle-o-notch fa-fw w3-margin-right"></i>Solution</button>
<div id="avl-q1" class="w3-hide w3-container" markdown="1">

![AVL tree example]({{ site.baseurl }}/assets/images/plds-avl-q1.png)

</div>
</div>
</div>

## Q2

Construct a AVL tree from the following keys: **B, C, G, E, F, D, A**.

<div class="w3-card w3-round">
<div class="w3-white">
<button onclick="toggleAccordion('avl-q2')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i
        class="fa fa-circle-o-notch fa-fw w3-margin-right"></i>Solution</button>
<div id="avl-q2" class="w3-hide w3-container" markdown="1">

![AVL tree example]({{ site.baseurl }}/assets/images/plds-avl-q2.png)

</div>
</div>
</div>

## Q3

- We have two orders
    - 6, 3, 8, 2, 7, 9, 4, 1, 5
    - 6, 5, 8, 1, 9, 3, 7, 2, 4
- In which order, **no rotations are required** to construct an AVL tree?

<div class="w3-card w3-round">
<div class="w3-white">
<button onclick="toggleAccordion('avl-q3')" class="w3-button w3-block w3-theme-l1 w3-left-align"><i
        class="fa fa-circle-o-notch fa-fw w3-margin-right"></i>Solution</button>
<div id="avl-q3" class="w3-hide w3-container" markdown="1">

The **first sequence** do not require any rotations to construct an AVL tree.

</div>
</div>
</div>