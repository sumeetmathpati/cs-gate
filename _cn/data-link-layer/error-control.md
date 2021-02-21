---
title:  "Error Control"
description: "Error control in data link layer."
child_of: Data Link Layer
nav_order: 8
---

- In data communication, data can be currupted during transmission. Hence we need to implement the methods to detect and correct errors.
- In data link layer when data gets currupted; generally we perform retransmission instead of correcting it in reciever's side.
- There are **two types of error:**
    1. Single Bit Error
        - **In a single-bit error, only 1 bit in the data unit has changed.**
        - Single bit errors are least likely to happen. Because noice duration in the channel is larger than it only can affect single bit.
    2. Burst Error
        - **A burst error means that 2 or more bits in the data unit have changed.**
- TO be able to detect error, we need some redundant data added into the origional data.


