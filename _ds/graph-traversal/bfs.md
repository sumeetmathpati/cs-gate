---
title: Breadh First Traversal
child_of: Graph Travarsal
nav_order: 1
description: "bfs bft"
---

- Also called level order traversal.
- It uses **queue** data structure for traversing.

# Algorithm

1. Select any verted as starting vertex.
2. Insert selected verted into queue, and mark is as visited.
3. Remove item from queue ans store it into x.
    - Print the x.
    - Add all the adjecent element of x into the queue if the adjecent element is not marked at visited.
    - Mark all the added adjecent elements as visited.
4. If queue is not empty go to step 3.

## Pseudocode

{% highlight c %}
BFT(v) {
    visited(v) = 1
    add(v, q)
    while(q != empty) {
        x = delete(q)
        for (all nodes w adjecent to q ) {
            if (w != visited) {
                visited(w) = 1
                add(w, q)
            }
        }
    }
}
{% endhighlight %}

## BFT

- Based on traversal sequence, we will get a BFT tree.
- This will be a spanning tree which will may or may not be minimal.
- BFT-tree can be constructed only for undirected graph.

## Example

![BFT Breadth First Traversal]({{ site.baseurl }}/assets/images/ds/bft-example.png)

# Complexities

- Time complexity
    - Adjecency list: O(v^2)
    - Adjecency matrix: O(v + e)
- Space complexity: 
    - = Extra space used
    - v + v ...(for queue and visited array)
    - **O(V)**

# Applications of BFT

- We can find the **spanning tree for undirected graphs.**
    - This can be only done for undirectd graph because we can't guarantee that we can generat the spanning tree with (n - 1) edges.
- Using BFT, we can find out if there is a cycle in a graph.
    - This can be donw for both directed and undirected graph.
    - This can be done like this:
        - While applying BFT, we push adjecent nodes in a queue.
        - While pushing, if we get already visited node again with different edge; then there must be a cycle in a graph.
    
- We can find the different components in a graph.
- We can check if all the vertices are reachable from the given vertex.
- In an unweighted graph, we can find the shortest path from any verted to any other verted in a graph.
- We can fins if the graph is bipartite or not. 
    