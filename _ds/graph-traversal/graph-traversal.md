---
title: Graph Travarsal
parent: true
nav_order: 3
description: "Graph traversal tree traversal bsf bft dfs dft adjecency matrix adjecency list"
parent: true
mathjax: true
---

-  Graph traversal have two types:
    - **BFT** (Breadth first traverse)
    - **DFT** (Depth first traverse)
- Graph traversal sequences may or may not be unique (unlike tree traversal sequences, which are unique).

# Time Complexity

- The **time complexity depends on, how the graph is represented in memory.**
- There are two types to represent the graph in memory:
    - **Adjecency matrix**
    - **Adjecency tree**

## Adjecency Matrix

- This has space complexity of $V^2$
    - Where V is number of vertices.
- Time complexity to find the degree of a node = O(n) ...E.C.

## Adjecency List

- This has space complexity of $V + E$
    - $V$ is number of vertices.
    - $E$ is number of edges.
- Time complexity to find the degree of a node = 
    - O(V) ...W.C.
    - O(1) ...B.C.


# Space Complexity

- We require space of 2V
    - One for flags
    - One for queue

# BFS DFS Difference

|BFS|DFS|
|-|-|
|Uses queue|Uses Stack|
|When a vertex is removed, all the adjecent vertices are inserted in the queue.|When a vertex is popped only one adjecent virtex is inserted in the stack.|
