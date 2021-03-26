---
title:  "Selective Repeat"
description: "Selective Repeat protocol in data link layer."
child_of: Data Link Layer
nav_order: 6
sub: true
---

# Window Size

- In this protocol **sender's window size and reciever's window size is same.**
    - Window size id greater than 1; or else it will be stop and wait protocol.
- We need to perform additional tasks at sender's and reciever's side:
    - **Searching at sender's side**
        - We have to perform searching oepration at sender's side when we have to send (retransmit) a perticular packet.
    - **Sortingat reciever's side:**
        - At reviever's side we accep packets in any order and then we have to perform sorting operation on them.

# ACKs

- Selective repeat; we use independent ACKs only.
- I.e. we do not use cumulative ACKs.

# Negetive ACKs

- When reciever recieves the currupted frame, **it discards it and sends NACK.**
