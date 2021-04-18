---
title: B and B+ Tree
description: "B and B+ tree indexing"
nav_order: 6
child_of: File Organization
sub: true
---

- B-trees is specialized m-ary **search** tree.
- B+ tree is variation of B tree.
- Maintains **sorted** data.
- All the leaf nodes must be at same level.
- In m-ary B tree:
    - *m* is **order** of a tree.
    - Each node can have maximum *m* children.
    - Minimum chidren of:
        - Root node: 2
        - Internal nodes: ceil(m/2)
- **Number of keys in a node is always 1 less than the children it has.**
- The search time is log<sub>m</sub>n
    - m is the order of a tree.
    - n is the number of nodes in a tree.

# Indexing and B-Tree

- We have two fields in a index record, *<key, data pointer>*.
    - The *data pointer* may be a block pointer or a *record pointer*.
- We store that pair into the data field of the node of a B-tree.
- And hence now the node of m-ary B-tree can contain 
    - m child pointers
    - (m-1) pairs of *<key, block pointer>*
- Hence using this technique, the index in a tree will be sorted and it will manage itself after inserting new records (or data in the nodes).
- This will be autimatically multilevel indexing.

## Note

- Every Node in m-ary B-tree should satisfy the following condition.

m * P + (m-1) (k + Pr) < B
{: .w3-xlarge .w3-center}

- **m** is degree of a tree
- **P** is a block pointer size
- **k** is key size
- **Pr** is data or record pointer

## Example

- Suppose we have database and we want to create index on non an atribute which is not sorted.

![B Tree Indexing]({{ site.baseurl }}/assets/images/dbms/btree-index-example.png)


# Problem With B-Tree

- When we search two consecutive data items (or range of data items) in a B-Tree, we require *2Log(n)* time.
- While we could really go to next node to get that element.
    - Example to seach a page in a book, we go to that page by log(n). But to go to the next page of that current page we just flip the page and do not search by log(n).
        - But that's not possible in B-tree.
- In B-tree we don't need pointers in the leaf nodes.
    - Because in B-tree a leaf node will always be a leaf node, it will never be the internal node (its data can change).
    - Hence it's a wastage of memory.

# B+ Tree

- To solve the above problem with B-tree we use B+ trees.

- **We made two changes in B+ tree:**
    - Here we use pointer from each leaf node to next right leaf node.
    - Copy of data of all the internal nodes are stored in the leaf nodes.

## Note

- Every Node in m-ary B+ tree should satisfy the following condition.

### For Internal Nodes

m * P + (m-1) * k <= B
{: .w3-xlarge .w3-center}

- **m** is degree of a tree
- **P** is a block pointer size
- **k** is key size
- **B** is block size

### For Leaf Nodes

m * P + (m-1) * (k + Pr) + P <= B
{: .w3-xlarge .w3-center}

- **m** is degree of a leaf, i.e. maximum numer of <key, ptr> pairs a leaf node can have.
- **P** is a block pointer size
- **k** is key size
- **B** is block size


## Example

Here is a B+ tee indexing for database in above example

![B Tree Indexing]({{ site.baseurl }}/assets/images/dbms/b-plus-tree-indexing-example.png)

- In above example note that
    - We have copy of all the internal nodes in leaf nodes.
    - We only have data pinters in the leaf nodes.
    - Each leaf node is connected to the next leaf node.


# Difference Between B and B+ tree

- **Process of insertion and deletion is different.**
- **Height:**
    - B-tree: less
    - B+ tree: more
- **Searching:**
    - B-tree: Random search is faster.
    - B+ tree: Range wise search is faster.
- **Record pointers:**
    - B-tree: Internal as well as leaf nodes contain record pointer.
    - B+ tree: Internal nodes only has search keys. Record pointers present at leaf nodes.
- **Keys:**
    - B-tree: All the keys are distributed over tree.
    - B+ tree: All the keys are present at leaf nodes in sorted sequence. 
        - All the leaf nodes are connected via links.
    

# Storage

- **The one block of B or B+ tree is stored in 1 block of secondary storage.**
- The storage and structure of nodes of B and B+ trees are shown in image below.

![Spanned Organization]({{ site.baseurl }}/assets/images/dbms/b-and-b+-tree-storage.png)

