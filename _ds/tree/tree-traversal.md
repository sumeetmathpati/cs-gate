---
title: Tree Traversal
description: "Tree traversal tutorial."
child_of: "Trees"
nav_order: 2
---

- Traversing a tree means visiting every node in the tree. 
- Three tyes of tree traversal techniques are present:
	- **Preorder**
		- Nodes visiting order: **Root-Left-Right**
	- **Inorder**
		- Nodes visiting order: **Left-Root-Right**
	- **Postorder**
		- Nodes visiting order: **Left-Right-Root**
- The time complexity of all algorithms given above is **O(n).**
- The tree traversal is unique (unlike graph traversal).

# Preorder Tree Traversal

## Algorithm

- **Visit the root,**
- **Traverse the left subtree,** i.e., call Preorder(left-subtree)
- **Traverse the right subtree,** i.e., call Preorder(right-subtree) 

***

## Easy way to traverse given tree

- In preorder start from left side of root node, and pass through all the nodes.
	- Travelling path shown in the figure below.
- Whenever you are on **left side** on any node, mark is as visited.

**

## C Program

{% highlight c %}
#include <stdio.h>

struct node {
    int data;
    struct node *left;
    struct node *right;
};

// Function definations
struct node *newNode(int data);  // Creates new node.
void printPreorder(struct node *root);  // Prints nodes in preorder.


struct node *newNode(int data) {
    struct node* node = (struct node*)malloc(sizeof(struct node)); 
    
    node->data = data;
    node->left = NULL;
    node->right = NULL;

    return node;    
}

void printPreorder(struct node *root) {
    if (root == NULL) {
        return ;
    }

    printf("%d ", root->data);
    printPreorder(root->left);
    printPreorder(root->right);
}

int main() {

	// Create a tree.
    struct node *root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);

	// Traverse a tree.
    printf("Preorder:\n\t");
    printPreorder(root);
    return 0;

}
{% endhighlight %}

# Inorder Tree Traversal

## Algorithm

- **Traverse the left subtree,** i.e., call Inorder(left-subtree)
- **Visit the root,**
- **Traverse the right subtree,** i.e., call Inorder(right-subtree)

***

## Easy way to traverse given tree

- In Inorder start from left side of root node, and pass through all the nodes.
	- Travelling path shown in the figure below.
- Whenever you are **under** any node, mark is as visited.

***

## C Program

{% highlight c %}
#include <stdio.h>

struct node {
    int data;
    struct node *left;
    struct node *right;
};

// Function definations
struct node *newNode(int data);			// Creates new node.
void printInorder(struct node *root);	// Prints nodes in inorder.


struct node *newNode(int data) {
    struct node* node = (struct node*)malloc(sizeof(struct node)); 
    
    node->data = data;
    node->left = NULL;
    node->right = NULL;

    return node;    
}

void printInorder(struct node *root) {
    if (root == NULL) {
        return ;
    }

    printInorder(root->left);
    printf("%d ", root->data); 
    printInorder(root->right);
}


int main() {

	// Create a tree.
    struct node *root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);

	// Traverse a tree.
    printf("Preorder:\n\t");
    printPreorder(root);
    return 0;

}
{% endhighlight %}

# Postorder Tree Traversal

## Algorithm

- **Traverse the left subtree,** i.e., call Inorder(left-subtree)
- **Traverse the right subtree,** i.e., call Inorder(right-subtree)
- **Visit the root.**

***

## Easy way to traverse given tree

- In preorder start from left side of root node, and pass through all the nodes.
	- Travelling path shown in the figure below.
- Whenever you are on **right side** any node, mark is as visited.

***

## C Program

{% highlight c %}
#include <stdio.h>

struct node {
    int data;
    struct node *left;
    struct node *right;
};

// Function definations
struct node *newNode(int data);			// Creates new node.
void printPostorder(struct node *root);	// Prints nodes in post.


struct node *newNode(int data) {
    struct node* node = (struct node*)malloc(sizeof(struct node)); 
    
    node->data = data;
    node->left = NULL;
    node->right = NULL;

    return node;    
}

void printPostorder(struct node *root) {
    if (root == NULL) {
        return ;
    }

    printPostorder(root->left);
    printPostorder(root->right);
    printf("%d ", root->data); 
}


int main() {

	// Create a tree.
    struct node *root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);

	// Traverse a tree.
    printf("Preorder:\n\t");
    printPostorder(root);
    return 0;

}
{% endhighlight %}

# Time Complexity

- T(n) = O(|V| + |E|)
    - = O(|V| + |V|) ... (|E| = |V| - 1)
    - = **O(|V|)**
    
# Examples

## Q1

Find the preorder, inorder, and postorder traversal for all the followind trees.

![Tree Traversal]({{ site.baseurl }}/assets/images/plds-tree-traversal-q1.png)

**Solution:**

- **Q1:** 
    - Preorder: **A B D F H C E G I**
    - Inorder: **B F H D A E I G C**
    - Postorder: **H F D B I G E C**
- **Q2:** 
    - Preorder: **A B D F C E G**
    - Inorder: **B F D A C G E**
    - Postorder: **F D B G E C A**
- **Q3:** 
    - Preorder: **A B D E H C F I D G**
    - Inorder: **D B H E A F D I C G**
    - Postorder: **D H E B D I F G C A**

***

## Q2

Find the order which is not given.

Note that in these type of questions, you will surely have the inorder sequence, and you have to find either preorder or postorder.
{: .info}

### 1)

- **Given:**
    - **Preorder:** A B D F C E G
    - **Inorder:** B F D A C G E
- **Find:** Postorder

## Q3

A BT has 200 leaf nodes in tree T, then how many no. of nodes will be there having two children?

**Solution:**

199

