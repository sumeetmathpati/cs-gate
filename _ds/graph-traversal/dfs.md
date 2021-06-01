---
title: Depth First Traversal
child_of: Graph Travarsal
nav_order: 2
description: "dfs dft"
---

- Also called level order traversal.
- It uses **queue** data structure for traversing.

# Algorithm

1. Select any verted as starting vertex.
2. Print selected vertex, push selected verted into queue, and mark is as visited.
3. Select any unvisited adjecent node of node on top of stack, and go to step 2.
4. If there is no unvisited note adjecent to the node top of the stack, pop the vertices until we have vertex on top which have unvisited adjecent node.
    - If you find such node, go to stop 2.
    - Else the stack will be empty which means all the nodes in graph are visited.

## Pseudocode

{% highlight c %}
DFS(adjacent[][], source, visited[], key) {
   if(source == key) return true
   visited[source] = True
   
   FOR node in adjacent[source]:
       IF visited[node] == False:
          DFS(adjacent, node, visited)
       END IF
   END FOR
   return false 

}
{% endhighlight %}

## DFT

- Based on traversal sequence, we will get a BFT tree.
- This will be a spanning tree which will may or may not be minimal.
- BFT-tree can be constructed only for undirected graph.

## Example

![DFT Depth First Traversal]({{ site.baseurl }}/assets/images/ds/dft-example.png)

# Complexities

- Time complexity
    - Adjecency list: O(v^2)
    - Adjecency matrix: O(v + e)
- Space complexity: 
    - = Extra space used
    - v + v ...(for queue and visited array)
    - **O(V)**

# Observations

- Number of function calls = Number of vertices in a graph.
- Stack size:
    - = Maximum levels in a DFT.
    - For same grpah we may have different sequences and hence different stack size.
    - Max stack size can be number of vertices in a graph.

# Applications of DFT

- We can find the **spanning tree for undirected graphs.**
    - This can be only done for undirectd graph because we can't guarantee that we can generat the spanning tree with (n - 1) edges.
- Using DFT, we can find out if there is a cycle in a graph.  
- We can find the different components in a graph.
- We can check if all the vertices are reachable from the given vertex.
- We can find the articulation point in a graph.