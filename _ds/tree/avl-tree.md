---
title: AVL Tree
description: "AVL tree tutorial."
child_of: "Trees"
nav_order: 4
---

- This tree is proposed by three scientists **A**delson, **V**elsky, and **L**andis, and hence called AVL tree.
- AVL tree is **Height balanced binary search tree.**
- In AVL tree balance factor at any node is in {-1, 0, 1}.
- **Balance factor =** Number of levels in left subtree - Number of levels in right subtree
- See the examples shown below, the balance factors is shown besides the nodes.
    - ![AVL Balanced Tree]({{ site.baseurl }}/assets/images/plds-balanced-tree.png)
- **Deletion ans insertion** in AVl tree is same as BST.
    - After every deletion and insertion, balance factor is recalculated and tree is balanced again if it is not balanced (balancing you will see below) after deletion/insertion.

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

- We know that these trees may be unbalanced but **they are search trees.**
- To fix all the above problems we just have two intensions: **Make height balance keeping search tree maintained.**
- We don't have to remember all the rotations, just do the following:
    - **Bring the median ternodem at top (root),**
    - **Bring least node at the left side of root,** and
    - **Bring the largest node at the right side of the root.**

Out of three nodes, lest node is node with smallest value, median node is node with middle value and largest node is node with largest value.
{: .note}

 - See the example below.
    - We can see that no matter what is problem is, we always bring the median to the node, lest element to the left of the node and the greatest element to the right side of the node.
- **Time required for any type of roration is O(1).**
![L Rotation and R Rotation]({{ site.baseurl }}/assets/images/rotations.png)

- While solving large tree
    - **Scan from down (i.e. after inserting at bottom strat checking while going beck) and see where the first node where the problem is i.e. balance factor is not in {-1, 0, 1}.**
    - **Apply the rotation according to the problem.**
    - **After fixing the problem, no need to go further up and check for problem, because there can be only one unbalanced node.**


# Time Complexity

- In AVL tree deletion, insertion and searching can be done in **O(log(n))** time, where n is number of nodes.

## Deletion

- Deletion steps
    - Find the node. O(log n)
    - Delete node. O(1)
    - If required add inorder successor or predecessor. O(1)
    - Go back upto the root node and check if all node have correct balance factor.
- Time complexity: **O(log n) ... E.C.**

While searching for problem, we may find two problems at a node, we should solve a problem which requre less number of rotations.
{: .note}

While deleting a node with 2 children, we actually copy data from it's inorder successor/predecessor to it, and hen delete the inorder successor/predecessor, after than check for the problems on the pach we came to the inorder seccessor/predecessor upto the root.
{: .note}

***

## Insertion

- Insertion steps
    - Create node. O(1)
    - Find correct place. O(log n)
    - Add the node. O(1)
    - Go back on path we've come and verify if all the nodes have correct load factor. O(log n)
- Time complexity: **O(log n)**

***

Time complexity of any operation on AVL is **O(log n).**
{: .info}

To create a AVL tree of *n* nodes, we need O(n log n) for every case.
{: .note}

In AVL tree, while going back (to check if every node has correct balance factor) maximum 1 problem can come and minimum 0 problems can come. But **in case of deletion, more than one problems can come, hence we have to check for problems until the root node.**
{: .note}

## Searching

- AVLis a balanced binary search tree.
- Hence, time complexity: **O(log n)**

# Minimum Number of Nodes

- Sometimes question is asked like: **Minimum number of nodes required to construct AVL tree of height *n*.**

- MNN required for height *n* = **MNN(n-1) + MNN(n-2) + 1**
- Examples
    - MNN required for height 0: 1
    - MNN required for height 1: 2
    - MNN required for height 2: 1 + 2 + 1 = 4
    - MNN required for height 3: 4 + 2 + 1 = 7 

# Maximum Height of AVL

- Sometimes question is asked like: **Maximum height of AVL tree with *n* nodes.**

- Forumula: **1.44 * log(n)**


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