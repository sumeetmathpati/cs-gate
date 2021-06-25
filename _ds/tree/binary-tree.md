---
title: Binary Tree
description: "Array data structure tutorial."
child_of: "Trees"
nav_order: 1
mathjax: true
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


# Questions

## Q1

Write a program to count all the leaf nodes in a tree.

**Solution:**

{% highlight c %}
int leafCount(struct btNode *r) {
	if (r == NULL ) {
		return 0;
	}
	if (r->lc == NULL && r->rc == NULL) {
		return 1;
	} else {
		left_count = leafCount(r->lc);
		right_count = leafCount(r->rc);
		totalLeaves = left_count + rigntCount;
		return totalLeaves;
	}
}
{% endhighlight %}

- TC: $2T(n/2) + c$
	- $= O(n) ... E.C.$

## Q2

Write a program to count all the non-leaf nodes in a tree.

**Solution:**

{% highlight c %}
int nonLeafCount(struct btNode *r) {
	if (r == NULL ) {
		return 0;
	}
	if (r->lc == NULL && r->rc == NULL) {
		return 0;
	} else {
		left_count = nonLeafCount(r->lc);
		right_count = nonLeafCount(r->rc);
		totalLeaves = left_count + rigntCount + 1;
		return totalLeaves;
	}
}
{% endhighlight %}

- TC: $2T(n/2) + c$
	- $= O(n) ... E.C.$

## Q3

Write a program to check if a given binary tree is a strict binary tree.
A strict biinary tree is a binary tree in which every node has 0 or 2 children.

{% highlight c %}
int checkIfStrict(struct btNode *r) {
	if (r == NULL ) {
		return 1;
	}
	if (r->lc == NULL && r->rc == NULL) {
		return 1;
	}
	if (r->lc != NULL && ->rc != NULL) {
		return checkIfStrict(r->lc) && checkIfStrict(r->rc);
	}
	return 0;
}
{% endhighlight %}

- TC: $2T(n/2) + c$
	- $= O(n) ... W.C. & A.C$
	- $= O(1) ... A.C.$


## Q4

Write a program to find the height of a binary tree.

**Solution:**

{% highlight c %}
int heightOfBinaryTree(struct btNode *r) {
	if (r == NULL ) {
		return 0;
	}

	if (r->lc == NULL && r->rc == NULL) {
		return 0;
	} 

	hl = heightOfBinaryTree(r->lc);
	hr = heightOfBinaryTree(r->rc);
	return (1 + max(hl, hr));
}
{% endhighlight %}

- TC: $2T(n/2) + c$
	- $= O(n) ... E.C.$

## Q5

Write a program to find the two binary trees are same (have same data in every nodes).

**Solution:**

{% highlight c %}
int isEqual(struct btNode *r1, struct btNode *r2) {
	if (r1 == NULL && r2 == NULL ) {
		return 1;
	}

	if ((r1 == NULL && r2 != NULL) || (r1 != NULL && r2 == NULL))

	if (r1->data == r2->data) {
		return isEqual(r1->lc, r2->lc) && isEqual(r1->rc, r2->rc);
	}

	return 0;

	hl = heightOfBinaryTree(r->lc);
	hr = heightOfBinaryTree(r->rc);
	return (1 + max(hl, hr));
}
{% endhighlight %}

- TC: $= O(n) ... W.C.$
	- $= O(1) ... B.C.$

## Q6

Write a program to conver a binary tree inot it's morror image.

{% highlight c %}

btNode *convertMirror(struct btNode *r) {
	if (r1 == ) {
		return r1;
	}

	if (r->lc == NULL && r->rc == NULL) {
		return r;
	} else {
		struct btNode *tmp = r->lc;
		r->rc = convertMirror(r->lc);
		r->lc = convertMirror(tmp);
		return r;
	}	
}
{% endhighlight %}

- TC: $= O(n) ... E.C.$
	
**Solution:**