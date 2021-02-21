---
title: Congestion Control
description: "Transport Layer TCP congestion control tutorial."
child_of:  Transport Layer
nav_order: 5
sub: true
---

# Sender Window Size

- The size of the sender window is determined by the following two factors:
    - Receiver window size
    - Congestion window size

## Receiver Window Size

- Reciever's window size is the data reciever can recieve without ACK.
- Sender shouldn't send more data than reciever's window size.
- Reciever tells the information about it's window size in three way handshaking through the TCP header.

***

## Congestion Window Size

- The sender's window size is determined not only by the receiver but also by **congestion in the network.**

***

The sender has two pieces of information: the receiver-advertised window size and the congestion window size. The actual size of the window is the minimum of these two.

Sender's Window Size = min(reciever's window size, congestion window size)

# Congestion Control Algorithms

- TCP's general policy for handling congestion is based on three phases: 
    - **Slow start**, 
    - **Congestion avoidance**, and 
    - **Congestion detection.**

## Slow Start Phase (Exponential Increase)

- This algorithm is based on the idea that the size of the congestion window (cwnd) starts with one maximum segment size (MSS). - The **MSS is determined during connection establishment by using an option of the same name.**
- The size of the window increases one MSS each time an acknowledgment is received.
- As the name implies, the **window starts slowly, but grows exponentially** until it reaches the threashold.
- **Threashold =  (Receiver window size / Maximum Segment Size) / 2**
- See the example below:

![TCP Congestion Control Slow Start]({{ site.baseurl }}/assets/images/cn-transportlayer-tcp-slow-start.png)

***

## Congestion Avoidance Phase (Additive Increase)

- When the size of the congestion window reaches the slow-start threshold, the slow-start phase stops and the additive phase begins.
- In this algorithm, each time the whole window of segments is acknowledged (one round), the size of the window increased by 1.
- This phase continues until the congestion window size becomes equal to the receiver window size.

***

![TCP Congestion Control]({{ site.baseurl }}/assets/images/cn-transportlayer-congestion-control.png)

***

## Congestion Detection Phase (Multiplicative Decrease)

- If congestion occurs, the congestion window size must be decreased. 
- The only way the sender can guess that congestion has occurred is by the need to retransmit a segment.
- However, retransmission can occur in one of two cases: 
    - **[When a timer times out]({{ site.baseurl }}/cn/transport-layer/tcp/tcp-communication/#retransmission-after-expiring-time-out-timer)** or 
    - **[When three ACKs are received.]({{ site.baseurl }}/cn/transport-layer/tcp/tcp-communication/#retransmission-after-three-duplicate-acks)**
- In both cases, the **size of the threshold is dropped to one-half,** a multiplicative decrease.

### Time Out Occurs

- If a time-out occurs, there is a **stronger possibility of congestion**; a segment has probably been dropped in the network, and there is no news about the sent segments.
- In this case, TCP **reacts stroongly.**
#### Reaction

- It sets the value of the threshold to one-half of the current window size.
- It sets cwnd to the size of one segment.
- It starts the slow-start phase again.

### Three ACKs Recieved

- If three ACKs are received, there is a **weaker possibility of congestion**; a segment may have been dropped, but some segments after that may have arrived safely since three ACKs are received.
- This is called fast transmission and fast recovery. In this case, TCP has a **weaker reaction.**

- It sets the value of the threshold to one-half of the current window size.
- It sets cwnd to the value of the threshold.
- It starts the congestion avoidance phase.