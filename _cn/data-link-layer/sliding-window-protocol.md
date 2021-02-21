---
title:  "‒ Sliding Window Protocol"
description: "Sliding window protocol in data link layer."
child_of: Data Link Layer
nav_order: 5
---

- Unlike stop and wait protocol; it has window size more than 1.
- Hence we can send multiple frames at one without ACKs.
- It's called sliding window protocol because sender has window which slides through the frames after recieving ACKs.


# Number of Frames Sender Can Send

- **Maximum Number of frames sender can send are = Sender Window Size.**

***

# Optimal Window Size 

- To get that 100% efficiency sender should **not only transmit frames in useful time (Tt) but also in useless time or waiting time (Tp).**
    - I.e. sender should transfer frames in transmission time as well as in round trip time.
- **Sender should transfer frames Tt + 2Tp time.**
- In (Tt + 2Tp) time; **sender can send (Tt + 2Tp) / Tt frames.**

To achieve maximum utilization sender window size should be $\frac{(T_t + 2T_p)}{T_t}$ or $1 + 2a$ where $a = \frac{T_p}{T_t}$
{: .info .w3-xlarge .w3-center}

***

# Efficiency

- **Efficiency (η) = Useful Time / Total Time**
- Efficiency (η) = Number of frames sent in one window / Total frames can be sent in one window
- Efficiency (η) = Sender window size used / Optimal sender window size

Efficiency (η) = $\frac{Sender \ window \ size \ used}{(1 + 2a)}$, where $a = \frac{T_p}{T_t}$
{: .info .w3-xlarge .w3-center}

***

# Implementation

- We have two practical implementations of sliding window protocol
    1. **Go back n**
    2. **Selective repeat**