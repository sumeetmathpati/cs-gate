---
title:  "Stop And Wait With ARQ"
description: "Stop and wait protocol with ARQ in data link layer."
child_of: Data Link Layer
nav_order: 4
sub: true
---

- It's an improved version of simple stop and wait protocol
- ARQ stands for **automated return request**.
- This protocol assumes that:
    - Communication channel is noisy.
    - Frames may get lost.
- Stop and wait with ARQ has following new components:
    - **Time out timer.**
    - **Sequence numbers for frames and ACKs.**
- We can also say that, it's a sliding window protocol where both **sender and reciever has window size 1.**

# Why ARQ ?

- We know that in simple stop and wait protocol; sender sends a frame ans waits for ACK from reciever.
- But the network goes into deadlock when the frame or ACK gets lost.
- Hence, the ideal simple stop and wait protocol assumes that the channel is noiseless, but that will not be possoble in practical situations.

***

# Number of Sequence Numbers

- As it's a sliding window protocol with window size 1 for both sender and reciever.
- Number of sequence numbers requires are >= sender window size + reciever's window size.
    - 1 + 1 = 2

Sequence numbers requires >= sender window size + reciever's window size
{: .info .w3-large .w3-center}

- As we can see;
    - In this protocol we requrie 2 sequence numbers.
    - **We use 0 and 1.**

***

# Working

- Sends a frame and starts a timeout timer for this frame.
- Sender starts waiting for the ACK.
- If ACK is recieved before timeout timer goes off; sender stops the timer, and sends next frame.
- If ACK is not recieved and timeout timer goes off; sender resends the frame. Sender restarts the timer.

***

# Solves following Problems

## 1. Lost Data

- It solves the lost data problem by automating returning the lost packet.
- It does this by setting timeout timer.

![Lost Data]({{ site.baseurl }}/assets/images/cn-lost-data.jpg)

## 2. Lost ACK

- When ACK gets lost; sender's timeout timer gets timedout.
- Hence, sender resends the frame thinking data frame had lost.
- Reciever gets duplicate frame; it discards the duplicate frame and resends the ACK.

![Lost DACKata]({{ site.baseurl }}/assets/images/cn-lost-ack.jpg
)

## 3. Currupted Frame

- If reciever gets a currupted frame; it sends the negetice ACK to the sender.
- Sender resends the frame.