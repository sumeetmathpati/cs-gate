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

# Observation

- In B tree we grow our tree from bottom to top.
- Hence we get new parent nodes but not the leaf nodes.
- Once we create a leaf node, it will be forever a leaf node.
    - It's values may change.
- Hence in B-tree, we don't have node pointers in a leaf node.

# Indexing and B-Tree

- We have two fields in a index record, *<key, block pointer>*.
- We store that pair into the data field of the node in a B-tree.
- Hence using this technique, the index in a tree will be sorted and it will manage itself after inserting new records (or data in the nodes).
- This will be autimatically multilevel indexing.

# Problem With B-Tree

- When we search two consecutive data items (or range of data items) in a B-Tree, we require *2Log(n)* time.
- While we could really go to next node to get that element.
    - Example to seach a page in a book, we go to that page by log(n). But to go to the next page of that current page we just flip the page and do not search by log(n).
        - But that's not possible in B-tree.

# B+ Tree

- To solve the above problem with B-tree we use B+ trees.

- **We made two changes in B+ tree:**
    - Here we use pointer from each leaf node to next right leaf node.
    - Copy of data of all the internal nodes are stored in the leaf nodes.

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

