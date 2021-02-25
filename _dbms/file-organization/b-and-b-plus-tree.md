---
title: B and B+ Tree
description: "B and B+ trees in DBMS"
nav_order: 3
child_of: File Organization
---

- B-trees is specialized n-ary **search** tree.
- B+ tree is variation of B tree
- Maintain **sorted** data.
- All the leaf nodes must be at same level.
- In n-ary B tree:
    - *n* is **order** of a tree.
    - Each node can have maximum *n* children.
    - Minimum chidren:
        - Root node: 2
        - Other node (except leaf node): ceil(m/2)
- **Number of keys in a node is always 1 less than the children it has.**

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

