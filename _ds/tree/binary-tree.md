---
title: Binary Tree
description: "Array data structure tutorial."
child_of: "Trees"
nav_order: 1
---

- A tree with **maximum degree 2,** i.e. every node can have at most 2 children.
- In binary tree with **n levels**
	- Maximum (2^n - 1) nodes are possible. Example binary tree with level 3 (height 2) can have at most 7 nodes.
	- Minimum n nodes are possible.


# Numer of Nodes

Let's take binary tree with **n levels,**

- **Maximum Number of Nodes: (2^n - 1) nodes are possible.** 
	- Example binary tree with level 3 (height 2) can have at most 7 nodes.
- **Minimum Number of Nodes: n nodes are possible.** 
	- Example binary tree with level 3 (height 2) can have at most 7 nodes.

# Number of Binary Trees

- For un named nodes
	- Catelan number = 
	- $(^{2n}C_n) / (n+1)$ = 
	- $\sum^n_{i = 1}\,T(i-1)*(n-i)$
- For labelled nodes
	- We can generate n! trees from same tree with n nodes.
	- Therefore we can have **Catelan number * n!** trees.

# Types of Binary Trees

## Skewed Binary Tree

### Left Skewed Binary Tree

### RIght Skewed Binary Tree

***

## Strict Binary Tree

- All nodes execept leaf nodes should have **0 or 2 children.**
- Always have **odd** number of nodes.

***

## Complete Binary Tree

- **Every node except leaf nodes should have 2 children.**
- Every leaf node should have same level.
- Every complete binary tree is a strict binary tree.
- This is **maximal bianry tree.**



