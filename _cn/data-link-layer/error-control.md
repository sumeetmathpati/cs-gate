---
title:  "Error Control"
description: "Error control in data link layer."
child_of: Data Link Layer
nav_order: 9
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
- Error handling methods:
    - **Error Detection**
        - This is a technique only used to check if there is any error in the recieved data.
    - **Error Correction**
        - Error correction is a technique used to correct the error occured during transmission.
    

# Single Parity Check

- One extra bit called parity bit is sent along with origional data bits.
- Parity bits helps if any error occurred in the data durigng the transmission.

## Limitations

- This technique cannot detect an even number bit errors.
    - Hence if two, four, six... bits gets flipped, then this mechanism cannot detect the error.