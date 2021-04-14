---
title: Routing Algorithms
description: "Routing algorithms."
child_of: Network Layer
nav_order: 2
---
- Routing is a process of moving information (in this case a IP packet) from source to destination.
- We try to select best path for routing.
- Routers use routing algorithms to choose best path between two hosts.

# Routing Algorithm Metrics

- The optimal routing algorithm can be decided on the basis of:
    - Path length
    - Delay
    - Hop count
    - Reliability

# Routing Table

- All routers store information about other routers and their distances.
- Every router may not have the exact path to reach the other router, but they may have the name of the interface through which then have to go.
- Routers communicate with each other and maintain their routing tables.