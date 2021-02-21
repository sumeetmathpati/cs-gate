---
title:  "Flow Control"
description: "Flow control in data link layer."
child_of: Data Link Layer
nav_order: 2
---

- Consider a situation in which sender's transmission speed is faster that the reciever's recieving / processing speed. If sender keeps sending frames at faster rate reciever's buffer will get overflowed and it will start losing some frames.
- This problem is solved by implementing **Flow Control mechanism**.

# Types of Flow Control Mechanisms

## 1. Feedback Based Flow Control

- In this method reciever informs sender when to send frames, and then only sender sends frames.
- This is used in **Data Link Layer**.

## 2. Rate Based Flow Control

- This mechanism does not require feebacks.
- The protocol itself restrict the data transfer rate so that it doesn't get overflowed.
- This mechanism is ued in **Network Layer** And **Transport Lyaer**.

# Flow Control in Data Link Layer

- In Data link layer we have two categoris of flow control mechanisms.
    - Stop and wait protocol
        - Stop and wait with ARQ
    - Sliding window protocol
        - Go back n
        - Selective repeat

# Notes

## Ack

- If we are using acknowledgements, the ack is for nth frame is n+1.
- It shows that we have recieved nth frame and now expecting n+1 th frame.

## Number of Sequence Numbers

- If we are giving sequence numbers to frames and ACKs.
- **Sequence numbers required >= Sender Window Size + Receiver Window Size**
- That's because if the ACK frame gets lost sender may send duplicate frame and reciever may not notice.
- **Example,**
    - Let sender has window size 2 and reciever has window size 1.
    - It has total sequence numbers 3 = [1, 2].
    - Sender sends frame 1 and 2.
    - Reciever sends ACK for 3 which is now 1. Because we only have two sequnce numbers.
    - And that ACK gets lost.
    - Sender thinks that reciever didn't recieverd previously sent frames.
    - It resends frame first and second which also has sequence number 1.
    - Reciever thinks it's recieving third frame and recieves it.
