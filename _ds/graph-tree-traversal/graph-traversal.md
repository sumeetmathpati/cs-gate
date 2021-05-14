---
title: Graph traversal
nav_order: 3
description: "Graph traversal"
child_of: Graph & Tree Travarsal
mathjax: true
---

-  Graph traversal have two types:
    - **BFT** (Breadth first traverse)
    - **DFT** (Depth first traverse)

# Time Complexity

- The **time complexity depends on, how the graph is represented in memory.**
- There are two types to represent the graph in memory:
    - **Adjecency matrix**
    - **Adjecency tree**

## Adjecency Matrix

- This has time complexity of $V^2$
    - Where V is number of vertices.

## Adjecency List

- This has time complexity of $V + E$
    - $V$ is number of vertices.
    - $E$ is number of edges.


# Space Complexity

- We require space of 2V
    - One for flags
    - One for queue

# BFS DFS Difference

|BFS|DFS|
|-|-|
|Uses queue|Uses Stack|
|When a vertex is removed, all the adjecent vertices are inserted in the queue.|When a vertex is popped only one adjecent virtex is inserted in the stack.|
