---
title:  "Aloha"
description: "Aloha Access control mechanism in data link layer."
child_of: Data Link Layer
nav_order: 15
sub: true
mathjax: true
---

- There are two types in Aloha access control method
    - **Pure Aloha**
    - **Slotted Aloha**
- This access control method is not used now.

# Pure Aloha

## Steps to Transfer The Data

- Allows station to transfer data at any time they want (there is no carrier sensing involved).
- After the transmission, station waits for some time.
- There are 2 cases possible 
    - **Case 1**
        - Transmitting station recieves ACK from receiving station.
        - In this case sender assumes that transmission is **successful.**
    - **Case 2**
        - Transmitting station does not recieves ACK from receiving station.
        - In this case sender assumes that transmission is **unsuccessful.**
        - Then the sender will use **back-off strategy** similar to the CSMA/CD.
        - After the back-off time sender retransmit the package.
        - It keeps trying until back-off limit is reached, after which it aborts the package.
## Efficiency

- Efficiency = $G \times e^{-2G}$
    - Where G is the number of stations willing to transmit the data. 

# Slotted Aloha

- Slotted aloha divides the time of shared channel into discrete intervals called as **time slots.**
- Any station can transmit the data in any time slot.
- The only condition is that station must start transmittin from the beginning of the time slot.
- A collision may occur if two or more stations try to transmit data at the beginning of the same time slot.

## Efficiency

- Efficiency = $G \times e^{-G}$
    - Where G is the number of stations willing to transmit the data. 
