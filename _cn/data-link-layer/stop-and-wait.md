---
title:  "‒ Stop And Wait"
description: "Stop and wait protocol in data link layer."
child_of: Data Link Layer
nav_order: 3
---

- It's simplest protocol
- While using **this protocol we assume that:**
    - Communication channel is perfect.
    - No error occurs during transmission.

# Working

- Sender sends one frame.
- After sending single frame, sender **stops and waits** for the acknowledgement of the frame sent.
- Reciever recieves and process the recieved frame.
- Reciever sends the acknowledgement to the sender for next frame.
- After getting acknowledgement sender sends next frame.

![Stop and wait protocol]({{ site.baseurl }}/assets/images/cn-stop-and-wait.jpg)

***

# Analysis

## Total Time

- The total time required to send one packet is
    - Transmission delay for frame + Propogation delay for a bit + Queuing delay for farame + Processing delay for frame + Transmission delay for ACK + Propogation delay for a bit + Queuing delay for ACK + Processing delay for ACK
- We assume that
    - Queuing delay and processing delay for both frame and ack to be zero.
    - Transmission time for ACK is very negligible hence we consider it as zero.
- Hence total time to send one frame in simple stop and wait protocol is    
    - **Transmission delay for packet + propogation delay for packet + propogation delay for ACK.**
- We know that the propogation delay is calculated for single bit and it depends upon distance and speed. Hence it will be the same for both frame and ACK.

Total time to transfer one frame = Transmission delay + 2 * Propogation delay
{: .info .w3-xlarge .w3-center}

## Efficiency

- **Efficiency (η) = Useful Time / Total Time**
- Here in this protocol
    - **Useful time** is **Transmission delay of data frame.**
    - **Useless time** is Time for which sender is waiting and doing nothing = **2 x Propagation delay**
    - **Total time** is **useful time + useless time.**

Efficiency (η) = $\frac{T_t}{T_t + 2T_p}$
{: .info .w3-xlarge .w3-center}

Efficiency (η) = $\frac{1}{1+2(T_p)}$
{: .info .w3-xlarge .w3-center}

Efficiency (η) = $\frac{1}{1+2a}$, where a = $\frac{T_p}{T_t}$
{: .info .w3-xlarge .w3-center}

- Observations
    - Efficiency (η) ∝ 1 / Distance between sender and receiver
    - Efficiency (η) ∝ 1 / Bandwidth
    - Efficiency (η) ∝ Transmission speed
    - Efficiency (η) ∝ Length of data packet
- Efficiency is also called as **link utilization**.

## Throughput

- Throughput is **number of bits can be sent in one second.**

$Throughput (η) = Efficiency \times Bandwidth$
{: .info .w3-xlarge .w3-center}

- Throughput is also known as
    - Bandwidth Utilization
    - Effective Bandwidth
    - Maximum data rate possible
    - Maximum achievable throughput

***

# Problems

## Lost Data

- If the data sent by sender gets list, reciever will not receive any data and hence it will not send any ACK.
- Sender will keep waiting for ACK, and will not send any new frame.
- The transmission is in **deadlock** state.

## Lost ACK

- If the ACK sent by reciever gets lost, sender will keep waiting for ACK.
- Reciever will keep waiting for next frame.
- The transmission is in **deadlock** state.